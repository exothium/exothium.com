import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../components/Context';
import { connectStarknet, networkId } from "../../../components/starknet";
import { Contract } from "starknet";
import registerContractAbi from "../../starknet/contracts/abis/registerContract";
import QuestsState from "../../../components/questsState";


function ContextWrapper(props) {
    const questsState = new QuestsState();
    const [quests, setQuests] = useState(questsState.getQuests);
    const [starknet, setStarknet] = useState(null);
    const [contracts, setContracts] = useState( {});

    questsState.setDispatcher(setQuests);

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
        setContracts(
            {
                registerContract: registerContract,
            }
        );
        setStarknet(starknet);
    };

    function getStarknetQuestsData() {
        questsState.getStarknetQuestsData(contracts, starknet);
    }

    return (
        <Context.Provider
            value={{ getStarknetQuestsData, quests, starknet, contracts }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextWrapper;