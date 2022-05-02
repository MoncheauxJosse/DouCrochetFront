import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';
import { ROLE_ADMIN } from '../shared/constants/rolesConstant';
import * as URL from '../shared/constants/urls/urlConstants';
import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ListView from './../views/ListView';

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <PrivateRoute exact path={URL.URL_HOME} component={HomeView} />
            <PrivateRoute
                path={URL.URL_ADMIN_HOME}
                component={AdminHomeView}
                roles={[ROLE_ADMIN]}
            />
            <Route path={URL.URL_LOGIN} component={LoginView} />
            <Route path={URL.URL_LIST} component={ListView} />
        </Switch>
    );
};

export default Routes;
