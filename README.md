# Ethcdm-AlcancIA 🤖

An artificial intelligence agent that simplifies access to decentralized savings. 
Users can create invisible Web3 wallets, set personalized savings goals, 
and form savings groups with friends.


## 🎯 

- 🤖 characters/ # Personajes configurables (JSON)
- ⚙️ src/ # Código fuente principal
- 🔨 scripts/ # Scripts de automatización y despliegue
- 📄 .env.example # Variables de entorno de ejemplo



- characters/ # Personajes configurables (JSON)
src/ # Código fuente principal
scripts/ # Scripts de automatización y despliegue
.env.example # Variables de entorno de ejemplo

## 🚀 Quick Start

### Prerequisites

- [Python 2.7+](https://www.python.org/downloads/)
- [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)

> **Note for Windows Users:** [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install-manual) is required.

### Use the Starter


git clone https://github.com/robz323/ethcdm-alcancIA.git
cd ethcdm-alcancIA
cp .env.example .env
pnpm install   
pnpm build   
pnpm start


Once the agent is running, you should see the message to run "pnpm start:client" at the end.
Open another terminal and move to same directory and then run below command and follow the URL to chat to your agent.


Then read the [Documentation](https://elizaos.github.io/eliza/) to learn how to customize your Eliza.

### Edit the character file

1. Open `packages/core/src/defaultCharacter.ts` to modify the default character. Uncomment and edit.

2. To load custom characters:
    - Use `pnpm start --characters="path/to/your/character.json"`
    - Multiple character files can be loaded simultaneously
  


### API to use Hyperlane

This project implements an API to interact with messaging smart contracts on Ethereum using Hyperlane.
It enables sending and receiving messages between different blockchains in a secure and decentralized manner.

Contracts

The project includes two main contracts:
	1.	Sender: A contract that allows sending messages via Hyperlane.
	2.	Receiver: A contract that receives and stores messages sent from the Sender.

Requirements
	•	Python 3.8+
	•	Node.js (for Ganache)
	•	Ganache (for local development)

Installation
	1.	Clone the repository:

git clone [REPOSITORY_URL]

	2.	Install dependencies:

pip install -r requirements.txt

	3.	Install Ganache (for local development):

sudo npm install -g ganache

Configuration
	1.	Create a .env file in the project root with the following variables:

SENDER=http://localhost:8545  
RECEIVER=http://localhost:8545  
PRIVATE_KEY=your_private_key  
API_HOST=0.0.0.0  
API_PORT=8000

	2.	Start Ganache:

ganache

Using the API

Deploying Contracts
	1.	Deploy Sender:

curl -X POST http://localhost:8000/deploy-sender \
-H "Content-Type: application/json" \
-d '{
  "mailbox_address": "0x...",
  "initial_owner_address": "0x..."
}'

	2.	Deploy Receiver:

curl -X POST http://localhost:8000/deploy-receiver \
-H "Content-Type: application/json" \
-d '{
  "mailbox_address": "0x...",
  "initial_owner_address": "0x..."
}'

Configuring the Receiver

Authorize the Sender contract in the Receiver:

curl -X POST http://localhost:8000/receiver/set-sender \
-H "Content-Type: application/json" \
-d '{
  "address": "0x...",
  "chain_id": 5
}'

Sending and Receiving Messages
	1.	Send Message:

curl -X POST http://localhost:8000/send-message \
-H "Content-Type: application/json" \
-d '{
  "message": "Hello World"
}'

	2.	Query Messages:

	•	Get a specific message:

curl http://localhost:8000/receiver/message/0

	•	Get the sender of a message:

curl http://localhost:8000/receiver/sender/0

	•	Get all data from a message:

curl http://localhost:8000/receiver/full-message/0

	•	Get the message counter:

curl http://localhost:8000/receiver/counter


### Project structure
├── api.py              # Main API using FastAPI  
├── requirements.txt    # Python dependencies  
├── .env                # Environment variables  
├── Receiver.sol        # Receiver contract  
├── Sender.sol          # Sender contract  
├── Receiver.json       # ABI and bytecode for the Receiver  
├── Sender.json         # ABI and bytecode for the Sender  
└── README.md           # This file



