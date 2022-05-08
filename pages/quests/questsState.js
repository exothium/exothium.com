import { questsInfo } from "./questsInfo";
import { number, shortString } from "starknet";

const { toBN, toHex } = number;
const { encodeShortString, decodeShortString } = shortString;


class QuestsState {
    constructor() {
        this.quests = questsInfo;
        this.dispatchQuests = null;
    }

    get getQuests() {
        return this.quests;
    }

    setQuests(quests) {
        this.dispatchQuests(quests);
    }

    setDispatcher(dispatcher) {
        this.dispatchQuests = dispatcher;
    }

    getQuestNumber(contractName) {
        for (let i = 0; i < this.quests.length; i++) {
            if(this.quests[i].contractName === contractName) {
                return this.quests[i].questNumber;
            }
        }
    }

    // gets data from deployed contracts
    getStarknetQuestsData(contracts, starknet) {
        this.getRegisterQuestData(contracts.registerContract, 'registerContract', starknet);
    }

    // gets data from deployed register contract
    getRegisterQuestData(registerContract, contractName, starknet) {
        let auxThis = this;
        let questNumber = this.getQuestNumber(contractName);
        registerContract.get_address_registry(starknet.selectedAddress).then(function (value) {
            let twitterValue = decodeShortString(toHex(value.twitter));
            let githubValue = decodeShortString(toHex(value.github));

            let starknetContractInfo = {
                twitter: twitterValue,
                github: githubValue,
            };


            let questsUpdate = JSON.parse(JSON.stringify(auxThis.quests));
            questsUpdate[questNumber - 1].starknetContractInfo = starknetContractInfo;
            questsUpdate[questNumber - 1].contractInteraction.twitter.value = twitterValue;
            questsUpdate[questNumber - 1].contractInteraction.github.value = githubValue;
            if(twitterValue || githubValue) {
                questsUpdate[questNumber - 1].finished = true;
            }
            auxThis.setQuests(questsUpdate);
        }, function (error) {
            console.log(error);
        });
    }
}

export default QuestsState;