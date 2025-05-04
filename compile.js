const solc = require('solc');
const fs = require('fs');
const path = require('path');

// Create simplified versions of the contracts without external dependencies
const simplifiedEmisor = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Emisor {
    address public mailbox;
    address public owner;
    
    struct MetadatosReceptor {
        bytes32 direccion;
        uint32 chainID;
    }
    
    MetadatosReceptor public receptor;
    
    constructor(address mailbox_, address initialOwner) {
        mailbox = mailbox_;
        owner = initialOwner;
    }
    
    function _establecerReceptor(address _direccion, uint32 _chainID) external {
        require(msg.sender == owner, "Only owner");
        receptor.direccion = bytes32(uint256(uint160(_direccion)));
        receptor.chainID = _chainID;
    }
    
    function obtenerCotizacionPorEnvio(string memory mensaje) external view returns (uint256) {
        return 100000; // Simplified fixed gas cost
    }
    
    function enviarMensaje(string memory mensaje) external payable {
        // Simplified implementation
    }
}
`;

const simplifiedReceptor = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Receptor {
    address public mailbox;
    address public owner;
    uint256 public contadorMensajes;
    
    struct MetadatosEmisor {
        bytes32 direccion;
        uint32 chainID;
    }
    
    struct MetadatosMensaje {
        string mensaje;
        address quienLoEnvia;
    }
    
    mapping(uint256 => MetadatosMensaje) private mensajes;
    MetadatosEmisor public emisor;
    
    constructor(address initialOwner, address mailbox_) {
        owner = initialOwner;
        mailbox = mailbox_;
    }
    
    function _establecerEmisor(address _direccion, uint32 _chainID) external {
        require(msg.sender == owner, "Only owner");
        emisor.direccion = bytes32(uint256(uint160(_direccion)));
        emisor.chainID = _chainID;
    }
    
    function handle(uint32, bytes32, bytes calldata _data) external payable {
        require(msg.sender == mailbox, "Only mailbox");
        (string memory _mensaje, address _quienLoEnvia) = abi.decode(_data, (string, address));
        mensajes[contadorMensajes] = MetadatosMensaje(_mensaje, _quienLoEnvia);
        contadorMensajes++;
    }
    
    function obtenerMensaje(uint256 index) public view returns (string memory) {
        require(index < contadorMensajes, "Index out of bounds");
        return mensajes[index].mensaje;
    }
    
    function obtenerQuienLoEnvia(uint256 index) public view returns (address) {
        require(index < contadorMensajes, "Index out of bounds");
        return mensajes[index].quienLoEnvia;
    }
    
    function obtenerMensajePorIndex(uint256 index) public view returns (MetadatosMensaje memory) {
        require(index < contadorMensajes, "Index out of bounds");
        return mensajes[index];
    }
    
    function obtenerContadorMensajes() public view returns (uint256) {
        return contadorMensajes;
    }
}
`;

// Create the input object for solc
const input = {
    language: 'Solidity',
    sources: {
        'Emisor.sol': {
            content: simplifiedEmisor
        },
        'Receptor.sol': {
            content: simplifiedReceptor
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode']
            }
        }
    }
};

try {
    // Compile the contracts
    const output = JSON.parse(solc.compile(JSON.stringify(input)));

    // Check for compilation errors
    if (output.errors) {
        const hasError = output.errors.some(error => error.severity === 'error');
        if (hasError) {
            console.error('Compilation errors:', output.errors);
            process.exit(1);
        } else {
            console.log('Compilation warnings:', output.errors);
        }
    }

    // Create the abis directory if it doesn't exist
    if (!fs.existsSync('abis')) {
        fs.mkdirSync('abis');
    }

    // Save the ABIs
    fs.writeFileSync(
        'abis/Emisor.json',
        JSON.stringify(output.contracts['Emisor.sol'].Emisor.abi, null, 2)
    );

    fs.writeFileSync(
        'abis/Receptor.json',
        JSON.stringify(output.contracts['Receptor.sol'].Receptor.abi, null, 2)
    );

    console.log('Contracts compiled successfully!');
} catch (error) {
    console.error('Error during compilation:', error);
    process.exit(1);
} 