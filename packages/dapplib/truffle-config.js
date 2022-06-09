require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note shift promote hidden clinic sun view'; 
let testAccounts = [
"0x8a964c896f0044e0f14f43286fce85e3817ed5383e97cf83f1a94f5948c245a4",
"0xf05793ce9b546d73a39c5909d2a9a1a5cad7f2b2c46eb89b802c54791a4e4ddb",
"0xe1d56efb1872bea844ee90e8e123f2df474568da3c8b5b7a7084eeb89a2cecf0",
"0x47d9aec694d01a1060701ce1fce42587545d85a88918b3a20d9c57ab6ae9c028",
"0xaa73e09f617acfed5498c1256af8f83c2bc2660817288cb09a27d68471c0e696",
"0x4cc93a40470a200ff9306bf10ddcc9cd716d0ed3d61604ed035519586628beed",
"0x8427359778b174194d89dc38296e1b81a825b8d9d367936139bb318eed9b34be",
"0x4a7ad94ef4369f04eb6238848a29f68fb3a1cbc740ef0ddf50a2a71022922426",
"0xcb3b8d310875f1c34f5cad4f606455d83c14ec7e29e2b063b6596d4de8fcddce",
"0x1b44ebc6e2f7f9f2e903fd2ce561171a4ebc34b67f00947908e57622225b559b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


