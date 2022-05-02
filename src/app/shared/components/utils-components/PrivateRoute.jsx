import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { URL_HOME, URL_LOGIN } from '../../constants/urls/urlConstants';
import { accountRoles, isAuthenticated } from '../../services/accountServices';

/**
 * Component PriveRoute
 * To handle private's route, that needs authentication
 * Check also if the role is authorized to access the route
 *
 * @example
 *          <PrivateRoute exact path={URL_HOME} component={HomeView} />
 *          <PrivateRoute path={URL_ADMIN_HOME} component={AdminHomeView} roles={[ROLE_ADMIN]} />
 * @author Peter Mollet
 */
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (!isAuthenticated())
                return (
                    <Redirect
                        to={{ pathname: URL_LOGIN, state: { from: props.location } }}
                    />
                );

            if (roles) {
                const rolesUser = accountRoles();
                if (!roles.some((r) => rolesUser.indexOf(r) >= 0))
                    return <Redirect to={{ pathname: URL_HOME }} />;
            }
            return <Component {...props} />;
        }}
    />
);
