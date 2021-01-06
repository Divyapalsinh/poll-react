import React from 'react';
import { withRouter } from 'react-router';
import { Path } from '../../utils/constants';

const Header: React.FunctionComponent<any> = ({ history }) => {
    return (
        <>
            <button onClick={() => history.push(Path.Vote)}>Form</button>
            <button onClick={() => history.push(Path.Results)}>Results</button>
        </>
    );
}

export default withRouter(Header);