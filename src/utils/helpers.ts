import { IVoteFields } from "../models/vote-form";
import { AppData } from "./constants";
import { type } from "os";
import { IVoteChartResult } from "../models/vote-results";

export const countVotes = (votes: Array<IVoteFields>) => {
    const { Candidates } = AppData;
    const data: Array<IVoteChartResult> = [];

    Object.keys(Candidates).map(ele => {
        let obj: IVoteChartResult = {
            name: Candidates[ele],
            votes: votes.filter(i => i.vote == ele).length
        }

        data.push(obj);
    });

    return data
}