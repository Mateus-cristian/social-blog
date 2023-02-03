import { CircularProgress } from '@mui/material';
import config from '../screens/Config';
import React, { Suspense } from 'react';
import { BrowserRouter, HashRouter, Route, RouteProps, Switch } from 'react-router-dom';
import InexistentRoute from './InexsistenteRoute';



export interface IRouteConfig extends Omit<RouteProps, 'path'> {
    // Limita os tipAcessos podem acessar tal página
    path: string | string[];
}

const getKey = (route: IRouteConfig) => (route.path instanceof Array ? route.path[0] : route.path);

const routes: { page: any; path: string }[] = [];

const Routes: React.FC = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Suspense
                    fallback={
                        <div className="flex h-screen w-screen items-center justify-center">
                            <CircularProgress color="primary" />
                        </div>
                    }
                >
                    <Switch>
                        {config.map(page => (
                            <Route key={getKey(page)} {...page} />
                        ))}

                        {routes.map(x => (
                            <Route key={x.path} path={x.path} component={x.page} />
                        ))}
                    </Switch>
                </Suspense>
                <Route component={InexistentRoute} path="*" exact />
            </Switch >
        </BrowserRouter  >
    );
};
export default Routes;
