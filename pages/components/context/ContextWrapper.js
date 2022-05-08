import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import { connectStarknet, networkId } from "../../starknet/utils/starknet";
import { Contract, number, shortString } from "starknet";
import registerContractAbi from "../../starknet/contracts/abis/registerContract";
import QuestsAux from "../../quests/QuestsAux";

const { toBN, toHex } = number;
const { encodeShortString, decodeShortString } = shortString;


function ContextWrapper(props) {
    const questsClass = new QuestsAux();
    const [quests, setQuests] = useState(questsClass.getQuests);
    questsClass.setDispatcher(setQuests);
    const [starknet, setStarknet] = useState(null);
    const [registerContract, setRegisterContract] = useState(null);
    const [contracts, setContracts] = useState( {});

    useEffect(() => {
        //checks if wallet is connected then checks what network he is connected
        connectToStarknet().then(r => {
            console.log(networkId());
        });
    }, []);

    const connectToStarknet = async () => {
        let starknet = await connectStarknet();

        const registerContract = new Contract(
            registerContractAbi,
            '0x01ba91aa5c08e36cbfccada801dbb31a90b0b7ce3f47e016694a9d115f2cc492',
            starknet.account,
        );
        setRegisterContract(registerContract);
        setContracts(
            {
                registerContract: registerContract,
            }
        );
        setStarknet(starknet);
    };

    function getStarknetContractQuests() {
        questsClass.getStarknetContractQuests(contracts, starknet);
    }

    return (
        <Context.Provider
            value={{ getStarknetContractQuests, quests, starknet, contracts }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextWrapper;