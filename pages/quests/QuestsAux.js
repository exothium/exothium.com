import { questsInfo } from "./quests";
import { number, shortString } from "starknet";

const { toBN, toHex } = number;
const { encodeShortString, decodeShortString } = shortString;


class QuestsAux {
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

    getStarknetContractQuests(contracts, starknet) {
        this.getRegisterContractQuest(contracts.registerContract, 'registerContract', starknet);
    }

    //quest number 1
    getRegisterContractQuest(registerContract, contractName, starknet) {
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
            if(twitterValue || githubValue) {
                questsUpdate[questNumber - 1].finished = true;
            }
            auxThis.setQuests(questsUpdate);
        }, function (error) {
            console.log(error);
        });
    }
}

export default QuestsAux;