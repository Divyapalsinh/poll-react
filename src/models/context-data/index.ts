import { IVoteFields } from '../vote-form';

export interface IVoteContextFields {
    votes: Array<IVoteFields>,
    addVote: (vote: IVoteFields) => void
}