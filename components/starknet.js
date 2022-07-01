import {getStarknet} from "@argent/get-starknet";
import { toast } from 'react-toastify';

export const connectStarknet = (/*operation: string, data: object, method: any*/) => {
    return new Promise(async function (resolve, reject) {
        const starknet = getStarknet();

        // May throw when no extension is detected, otherwise shows a modal prompting the user to download Argent X.
        try {
            const [userWalletContractAddress] = await starknet.enable({ showModal: true });
        } catch(e) {
            console.log(e);
        }

        // Check if connection was successful
        if (starknet.isConnected) {
            // If the extension was installed and successfully connected, you have access to a starknet.js Signer object to do all kinds of requests through the user's wallet contract.
            toast.success('Wallet connected', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
            resolve(starknet)
        } else {
            // In case the extension wasn't successfully connected you still have access to a starknet.js Provider to read starknet states and sent anonymous transactions
            toast.error('Please connect wallet', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
            reject(
                starknet
            )
        }
    });
}

export const networkId = () => {
    try {
        const { baseUrl } = getStarknet().provider;
        if (baseUrl.includes("alpha-mainnet.starknet.io")) {
            return "mainnet-alpha"
        } else if (baseUrl.includes("alpha4.starknet.io")) {
            return "goerli-alpha"
        } else if (baseUrl.match(/^https?:\/\/localhost.*/)) {
            return "localhost"
        }
    } catch {}
}

export const waitForTransaction = async (hash) =>
    await getStarknet().provider.waitForTransaction(hash)


export const addWalletChangeListener = async (handleEvent) => {
    getStarknet().on("accountsChanged", handleEvent)
}

export const isPreauthorized = async () => {
    return getStarknet().isPreauthorized()
}