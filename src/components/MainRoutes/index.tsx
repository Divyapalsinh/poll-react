import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../Layout';
import { Path } from '../../utils/constants';
import VoteForm from '../../pages/VoteForm';
import VoteResults from '../../pages/VoteResults';

const Routes: React.FunctionComponent<any> = () => {
    return (
        <>
            <Switch>
                <Layout>
                    <Route exact path={Path.Results} component={VoteResults}></Route>
                    <Route exact path={Path.Vote} component={VoteForm}></Route>
                    <Redirect to={Path.Vote} />
                </Layout>
            </Switch>
        </>
    );
}

export default Routes;