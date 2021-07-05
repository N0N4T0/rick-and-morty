import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CharacterList from '../components/CharacterList';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={CharacterList} />;
    </Switch>
);

export default Routes;
