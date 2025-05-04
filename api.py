from fastapi import FastAPI, HTTPException
from web3 import Web3
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import json
from eth_abi import encode

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Hyperlane Message API",
             description="API for interacting with Hyperlane message contracts",
             version="1.0.0")

# Initialize Web3 connections
emisor_w3 = Web3(Web3.HTTPProvider(os.getenv('EMISOR')))
receptor_w3 = Web3(Web3.HTTPProvider(os.getenv('RECEPTOR')))
print(os.getenv('HOLA'))
# Load contract ABIs
with open('abis/Emisor.json', 'r') as f:
    emisor_abi = json.load(f)

with open('abis/Receptor.json', 'r') as f:
    receptor_abi = json.load(f)

# Get contract bytecode from compiled file
with open('abis/Emisor.bin', 'r') as f:
    emisor_bytecode = '0x' + f.read().strip()

# Initialize contracts
emisor_contract = emisor_w3.eth.contract(
    address=os.getenv('EMISOR_CONTRACT_ADDRESS'),
    abi=emisor_abi
)

receptor_contract = receptor_w3.eth.contract(
    address=os.getenv('RECEPTOR_CONTRACT_ADDRESS'),
    abi=receptor_abi
)

# Pydantic models for request/response
class MessageRequest(BaseModel):
    message: str

class MessageResponse(BaseModel):
    message: str
    sender: str
    index: int

class DeployRequest(BaseModel):
    mailbox_address: str
    initial_owner_address: str

@app.post("/deploy-emisor", response_model=dict)
async def deploy_emisor(request: DeployRequest):
    try:
        # Get the gas price
        gas_price = emisor_w3.eth.gas_price
        print(f"Gas price: {gas_price}")

        # Convert addresses to checksum format
        mailbox_address = Web3.to_checksum_address(request.mailbox_address)
        initial_owner_address = Web3.to_checksum_address(request.initial_owner_address)

        # Create contract factory
        contract_factory = emisor_w3.eth.contract(
            abi=emisor_abi,
            bytecode=emisor_bytecode
        )

        # Get the estimated gas for deployment
        gas_estimate = contract_factory.constructor(
            mailbox_address,
            initial_owner_address
        ).estimate_gas()
        print(f"Gas estimate for deployment: {gas_estimate}")

        # Build the deployment transaction
        deploy_tx = contract_factory.constructor(
            mailbox_address,
            initial_owner_address
        ).build_transaction({    
            'from': emisor_w3.eth.account.from_key(os.getenv('PRIVATE_KEY')).address,
            'gas': gas_estimate,
            'gasPrice': gas_price,
            'nonce': emisor_w3.eth.get_transaction_count(
                emisor_w3.eth.account.from_key(os.getenv('PRIVATE_KEY')).address
            ),
        })

        # Sign and send the transaction
        signed_txn = emisor_w3.eth.account.sign_transaction(
            deploy_tx, os.getenv('PRIVATE_KEY')
        )
        tx_hash = emisor_w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        
        # Wait for transaction receipt
        tx_receipt = emisor_w3.eth.wait_for_transaction_receipt(tx_hash)
        
        return {
            "status": "success",
            "contract_address": tx_receipt.contractAddress
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/hola")
async def root():
    return {"message": "Welcome to Hyperlane Message API"}

@app.post("/send-message", response_model=dict)
async def send_message(request: MessageRequest):
    try:
        # Get the gas price
        gas_price = emisor_w3.eth.gas_price
        print(gas_price)
        
        # Get the estimated gas for the transaction
        receiver_address = Web3.to_checksum_address(os.getenv('EMISOR_CONTRACT_ADDRESS'))
        chain_id = int(os.getenv('ID_EMISOR', '5'))  # Default to 5 (Goerli) if not set
        
        # Encode the payload
        payload = encode(
            ['string', 'address'],
            [request.message, emisor_w3.eth.account.from_key(os.getenv('PRIVATE_KEY')).address]
        )
        
        gas_estimate = emisor_contract.functions._establecerReceptor(
            receiver_address,
            chain_id
        ).estimate_gas()
        print("Gas estimate: {gas_estimate}")
        
        # Build the transaction
        transaction = emisor_contract.functions.enviarMensaje(
            request.message
        ).build_transaction({
            'from': emisor_w3.eth.account.from_key(os.getenv('PRIVATE_KEY')).address,
            'gas': gas_estimate,
            'gasPrice': gas_price,
            'nonce': emisor_w3.eth.get_transaction_count(
                emisor_w3.eth.account.from_key(os.getenv('PRIVATE_KEY')).address
            ),
        })
        
        # Sign and send the transaction
        signed_txn = emisor_w3.eth.account.sign_transaction(
            transaction, os.getenv('PRIVATE_KEY')
        )
        tx_hash = emisor_w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        
        return {
            "status": "success",
            "transaction_hash": tx_hash.hex(),
            "message": request.message,
            "payload": payload.hex()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/messages/{index}", response_model=MessageResponse)
async def get_message(index: int):
    try:
        message_data = receptor_contract.functions.obtenerMensajePorIndex(index).call()
        return {
            "message": message_data[0],
            "sender": message_data[1],
            "index": index
        }
    except Exception as e:
        raise HTTPException(status_code=404, detail="Message not found")

@app.get("/message-count")
async def get_message_count():
    try:
        count = receptor_contract.functions.obtenerContadorMensajes().call()
        return {"count": count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=os.getenv('API_HOST', '0.0.0.0'), 
                port=int(os.getenv('API_PORT', 8000))) 