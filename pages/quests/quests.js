import { useContext } from "react";
import { checkEmptyObject } from "../jsUtils/utils";
import {  useEffect, useState } from 'react';
import { networkId } from "../starknet/utils/starknet";
import { Contract, number, shortString } from "starknet";
const { toBN, toHex } = number;
const { encodeShortString, decodeShortString } = shortString;


export let questsInfo = [
    {
        questNumber: 1,
        name: "Connect Twitter/Github",
        description: "Interact with Exothiums first test contract on Starknet testnet by linking your Twitter and/or Github.",
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

export function interactWithQuests(props) {
    const [quests, setQuests] = useState(questsInfo);
    const [registerContractCalled, setRegisterContractCalled] = useState(false);

    useEffect(() => {
        //alert('hey')
    }, [registerContractCalled]);

    function getQuestNumber(contractName) {
        for (let i = 0; i < quests.length; i++) {
            if(quests[i].contractName === contractName) {
                return quests[i].questNumber;
            }
        }
    }

    function getRegisterContractQuest(registerContract, questNumber) {
        registerContract.get_address_registry(starknet.selectedAddress).then(function (value) {
            let twitterValue = decodeShortString(toHex(value.twitter));
            let githubValue = decodeShortString(toHex(value.github));

            let starknetContractInfo = {
                twitter: twitterValue,
                github: githubValue,
            };

            let questsUpdate = JSON.parse(JSON.stringify(quests));
            questsUpdate[questNumber - 1].starknetContractInfo = starknetContractInfo;
            if(twitterValue || githubValue) {
                questsUpdate[questNumber - 1].finished = true;
            }
            setQuests(questsUpdate);
        }, function (error) {
            console.log(error);
        });
    }
    return quests
}



export function checkQuests(quests, dispatchQuests) {
    if (quests.length === 0) {
        dispatchQuests(questsInfo);
    }
}