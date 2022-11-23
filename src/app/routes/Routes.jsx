import React from 'react';
import { Route, Routes as RoutesContainer } from 'react-router-dom';
import RegisterView from '../views/RegistrerView';
import { ROLE_ADMIN,ROLE_COMMERCIAL } from '../constants/rolesConstant';
import * as URL from '../constants/urls/urlFrontEnd';
import AdminHomeView from '../views/AdminHomeView';
import FormProductView from '../views/FormulaireProductView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ProductsView from '../views/ProductsView';
import { PrivateRoute } from './PrivateRoute';
import UsersView from '../views/UsersView';
import DetailProductView from '../views/DetailsProductsView';
import AdminProductsView from '../views/AdminProductsView';
import CartView from '../views/CartView';
import ProfileView from '../views/ProfileView';

const Routes = () => {
    return (
        <RoutesContainer>

            <Route path={URL.URL_HOME} element={<HomeView />} />
            <Route
                 path={URL.URL_CREATE_PRODUCT} 
                 element={
                    <PrivateRoute roles={[ROLE_ADMIN,ROLE_COMMERCIAL]}>
                        <FormProductView/>
                    </PrivateRoute>}
                
            />
            <Route
                 path={URL.URL_ADMIN_HOME} 
                 element={
                    <PrivateRoute roles={[ROLE_ADMIN]}>
                        <AdminHomeView />
                    </PrivateRoute>
                    }
            />
            <Route
                 path={URL.URL_ADMIN_PRODUCTS} 
                 element={
                    <PrivateRoute roles={[ROLE_ADMIN,ROLE_COMMERCIAL]}>
                        <AdminProductsView/>
                    </PrivateRoute>}
                
            />
            <Route path={URL.URL_CART} element={<CartView />} />
            <Route path={URL.URL_PRODUCTS} element={ <ProductsView /> }/>
            <Route path={URL.URL_LOGIN} element={<LoginView/>}/>
            <Route path={URL.URL_HOME} element={<HomeView/>}/>
            <Route path={URL.URL_USERS} element={<UsersView />} />
            <Route path={URL.URL_PROFILE} element={<ProfileView/>}/>

            <Route path={URL.URL_PRODUCT} element={<DetailProductView />} />
            <Route path={URL.URL_REGISTER} element={<RegisterView/>}/>

            
        </RoutesContainer>
    );
};

export default Routes;
