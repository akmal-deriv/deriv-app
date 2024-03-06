import React from 'react';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { defaultRoute, routes } from '../../constants/routes-config';

const RouteLinks = () => (
    <BrowserRouter>
        <div className='px-4 py-16 gap-6 grid grid-cols-[2fr_4fr] max-w-[800px] mx-auto lg:py-50 lg:px-24'>
            <div className='p-8 d-none lg:flex lg:flex-col bg-solid-slate-1 rounded-xs'>
                {routes.map(route => (
                    <NavLink
                        activeClassName='bg-solid-slate-2 border-solid border-l-4 border-l-solid-red-5 rounded-xs font-bold'
                        className='p-10 text-default'
                        key={route.routePath}
                        to={route.routePath}
                    >
                        {route.routeName}
                    </NavLink>
                ))}
            </div>
            <div className='p-8'>
                <Switch>
                    {routes.map(route => {
                        const Component = route.routeComponent;
                        return (
                            <Route
                                exact
                                key={route.routePath}
                                path={route.routePath}
                                render={() => <Component path={route.routePath} />}
                            />
                        );
                    })}
                    <Redirect from='/' to={defaultRoute} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default RouteLinks;