import Modal from "react-modal";
import React, { useContext, useEffect, useState } from "react";
import { getStarknet } from "@argent/get-starknet/dist";
import { Contract, number, shortString } from "starknet";
import registerContractAbi from "../../starknet/contracts/abis/registerContract";
import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";
import { truncateString } from '../../../components/utils';
import { connectStarknet, networkId } from "../../../components/starknet";
import { Context } from "../../../components/Context";
import Link from "next/link";

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


function Account(props) {
    const [twitter, setTwitter] = useState('');
    const [github, setGithub] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const { quests, dispatchQuests } = useContext(Context);
    const { getStarknetQuestsData } = useContext(Context);
    const { starknet } = useContext(Context);

    useEffect(() => {
            if(starknet) getStarknetQuestsData();
    }, [starknet]);

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

    function AccountDetails() {
        return (
            <div className='accountSection'>
                <h1 className='accountSectionTitle'>
                    Account Details
                </h1>
                <div>
                    <div className='accountSectionRow'>
                        <span className='accountSectionKey'>
                            Address:
                        </span>
                        <span className='accountSectionValue'>
                            <a
                                href={'https://goerli.voyager.online/contract/' + starknet.selectedAddress}
                                target="_blank"
                            >
                                {starknet.selectedAddress}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    function AccountQuests() {
        return (
            <div className='accountSection'>
                <h1 className='accountSectionTitle'>
                    Quest Tracker
                </h1>
                <Link style={{ fontFamily: 'Metro' }} href="/quests">
                    <a onClick={() => closeModal()}>See Exothium Quests</a>
                </Link>
            </div>
        )
    }

    function renderAccountDetails() {
        return (
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="starknet sign account"
                className="modal"
                overlayClassName="modalOverlay"
            >
                <form onSubmit={handleRegisterSubmit}>
                    {AccountDetails()}
                    {AccountQuests()}
                    {/*<div>Sign with Twitter {JSON.stringify(quests)}</div>
                    <input
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
        <div className='accountRoot'>
            <button
                className='accountButton'
                onClick={starknet ? openModal : connectStarknet}
            >
                {starknet ?
                    (starknet.selectedAddress ? truncateString(starknet.selectedAddress, 12) : 'Not Connected')
                    :
                    'No wallet detected'
                }
            </button>
            {starknet && renderAccountDetails()}
        </div>
    )
}

export default Account;