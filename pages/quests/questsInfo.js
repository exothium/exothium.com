export let questsInfo = [
    {
        questNumber: 1,
        name: "Connect Twitter/Github",
        description: "Interact with Exothiums first test contract on Starknet testnet by linking your Twitter (username) and/or Github (username). NOTE: This is only for web testing. This quest will be updated to link with twitter and github API in the next days.",
        contractName: 'registerContract',
        network: 'goerli-alpha',
        contractAddress: '0x01ba91aa5c08e36cbfccada801dbb31a90b0b7ce3f47e016694a9d115f2cc492',
        finished: false,
        starknetContractInfo: {},
        contractInteraction: {
            twitter: {
                type: 'input',
                value: '',
            },
            github: {
                type: 'input',
                value: '',
            }
        }
    }
];