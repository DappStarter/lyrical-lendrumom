require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth ranch punch good neck forget taste'; 
let testAccounts = [
"0xaa3c5fc9bf9f0479191bbc4b76196c35c0b77c6e70ce96e2da2213e8317029fd",
"0x07b5817fe6cd6c313f2ce8da0ad7873571b1f8161049adf02a8851298ff4e28c",
"0x2fbf6d10a9b5b0f04e39e830a8cc8b592882a4a553259cc5eeeb997006b5f610",
"0x51dba6156a1c79f03a2d4736d57bbde274cf95fa2a8bcf61f9e8d0111d9bb71d",
"0xed7769754f4062d975ccfc7d5a7f87b75f6a2c5c5d94fd285a363dbefaa05f1a",
"0xefe6204e38395a9a3dae5aa31e8948e9f106d26a8f64be8aa776113c81d19979",
"0xab04a97716a6b1d84b1a5bb28c809784996cbb452c4d8c2f485689c1740db03c",
"0x14f8602184614e793079b4ff6d18b1da354dca1f363c2d078b9c476b6e21f938",
"0x349b8e4efd2aee51ca78a8e806edcfa82ace640b53caa58b1b47ba373a431065",
"0x646c570d00440f9a0a3d684b02579bb53b43ce42488d5d2e17799b520c7fa4aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
