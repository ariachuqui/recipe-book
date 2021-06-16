import React from 'react';
import {
    Switch,
    Route,
    Redirect
}   from 'react-router-dom';

import { Nav } from '../components/ui/Nav';
import { Sidebar } from '../components/ui/Sidebar';
import { CollectionsScreen } from '../components/CollectionsScreen';
import { SingleCollectionScreen } from '../components/SingleCollectionScreen';
import { RecipeScreen } from '../components/recipe/RecipeScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Nav />

                <div className="content-wrap flex-between">
                    <Sidebar />

                    <Switch>
                        <Route exact path="/" component={CollectionsScreen} />
                        <Route exact path="/collection/:id" component={SingleCollectionScreen} />
                        <Route exact path="/recipe/:id" component={RecipeScreen} />

                        {/* ERROR 404 */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </>
    );
};
