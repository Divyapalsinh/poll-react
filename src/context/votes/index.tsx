import React, { useContext, useState } from 'react';
import { IVoteFields } from '../../models/vote-form';
import { IVoteContextFields } from '../../models/context-data';

export const VoteContext = React.createContext(null);

const VoteContextProvider: React.FunctionComponent = (props: any) => {
    const [votes, setVotes] = useState<Array<IVoteFields>>([]);

    const AddVoteHandler = (vote: IVoteFields) => setVotes([...votes, vote]);

    const values: IVoteContextFields = {
        votes: votes,
        addVote: AddVoteHandler
    };

    return <VoteContext.Provider value={values}> {props.children} </VoteContext.Provider>
}

export default VoteContextProvider