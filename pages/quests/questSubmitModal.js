import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { Context } from "../../components/Context";
import { getStarknet } from "@argent/get-starknet/dist";
import registerContractAbi from "../starknet/contracts/abis/registerContract";
import { Contract, number, shortString } from "starknet";

const { toBN, toHex } = number;
const { encodeShortString, decodeShortString } = shortString;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function QuestSubmitModal(props) {
    const { quests, dispatchQuests } = useContext(Context);
    const { starknet } = useContext(Context);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [twitter, setTwitter] = useState(quests[0].contractInteraction.twitter.value);
    const [github, setGithub] = useState(quests[0].contractInteraction.github.value);
    const contracts = useContext(Context);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleChangeTwitter(e) {
        setTwitter(e.target.value);
    }

    function handleChangeGithub(e) {
        setGithub(e.target.value);
    }

    const handleRegisterSubmit = async (e) => {
        try {
            e.preventDefault();

            try {
                //newConctract that is built on componentDidMount on state is not being called
                const registerContract = new Contract(
                    registerContractAbi,
                    '0x01ba91aa5c08e36cbfccada801dbb31a90b0b7ce3f47e016694a9d115f2cc492',
                    starknet.account,
                );

                await registerContract.set_address_registry(
                    encodeShortString(twitter),
                    encodeShortString(github)
                );
            } catch (e) {
                console.error(e);
            }

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form onSubmit={handleRegisterSubmit}>
            <div>Twitter Username</div>
            <input
                onChange={handleChangeTwitter}
                value={twitter}
            />
            <div>Github Username</div>
            <input
                onChange={handleChangeGithub}
                value={github}
            />
            <input type="submit" value="Register"/>
        </form>
    )

}

export default QuestSubmitModal;