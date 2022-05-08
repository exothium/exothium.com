import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/context/Context";
import Modal from "react-modal";
import { getStarknet } from "@argent/get-starknet/dist";
import { Contract } from "starknet";
import registerContractAbi from "../starknet/contracts/abis/registerContract";

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

function Quests(props) {
    const { quests, dispatchQuests } = useContext(Context);
    const [modalIsOpen, setIsOpen] = useState(false);
    const contracts = useContext(Context);

    useEffect(() => {
        console.log(JSON.stringify(quests))
    }, [props.quests]);

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
                const starknet = getStarknet();
                setStarknet(starknet);
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

    function renderQuests() {
        let contentHtml = [];

        for (let i = 0; i < quests.length; i++) {
            contentHtml.push(
                <div className='questCard'>
                    <div className='questCardTitle'>
                        <span className='questName'>#{quests[i].questNumber}</span>
                        <span className='questName'>{quests[i].name}</span>
                    </div>
                    <div className='questCardItemRow'>
                        <span className='questCardKey'>Description:</span>
                        <span className='questCardValue'>{quests[i].description}</span>
                    </div>
                    <div className='questCardItemRow'>
                        <span className='questCardKey'>Network:</span>
                        <span className='questCardValue'>{quests[i].network}</span>
                    </div>
                    <div className='questCardItemRow'>
                        <span className='questCardKey'>Contract Address:</span>
                        <span className='questCardValue'>{quests[i].contractAddress}</span>
                    </div>
                    <div className='questStatus'>
                        <span className={'questStatus' + (quests[i].finished ? 'Complete' : 'Incomplete')}>
                            {quests[i].finished ? 'Completed' : 'Incomplete'}
                        </span>
                    </div>
                    <div className='interactWithContract'>
                        <button
                            onClick={openModal}
                            className='interactWithContractButton'
                        >
                            Interact with Contract
                        </button>
                    </div>
                </div>
            )
        }
        return (contentHtml);
    }

    function renderQuestInteraction() {
        return(
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="starknet interaction"
                className="modal"
                overlayClassName="modalOverlay"
                style={customStyles}
            >
                <form onSubmit={handleRegisterSubmit}>
                    <div>Sign with Twitter {JSON.stringify(quests)}</div>
                    {/*<input
                        onChange={handleChangeTwitter}
                        value={twitter}
                    />
                    <div>Sign with Github {decodeShortString(encodeShortString('hey'))}</div>
                    <input
                        onChange={handleChangeGithub}
                        value={github}
                    />
                    <input type="submit" value="Register"/>*/}
                </form>
            </Modal>
        )
    }

    return (
        <div className='questsPageMain'>
            <div className='questsBackgroundWrapper'>
                {renderQuests()}
                {renderQuestInteraction()}
            </div>
        </div>
    )
}

export default Quests