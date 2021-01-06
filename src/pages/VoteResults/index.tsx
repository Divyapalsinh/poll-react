import React, { useContext } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { VoteContext } from '../../context/votes';
import { countVotes } from '../../utils/helpers';

const VoteResults: React.FunctionComponent<any> = () => {
    const contextData = useContext(VoteContext);
    const { votes } = contextData;

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <BarChart width={730} height={250} data={countVotes(votes)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="votes" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default VoteResults