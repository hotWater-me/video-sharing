import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouterProps,
  Switch,
} from 'react-router-dom';
import config from './config';
import Layout from '../common-components/layout'

export interface IRoutersProps {}
const Routers: React.FC<IRoutersProps> = () => (
  <Router>
    
      <Switch>
        <Layout>
        {config.map(({ path, exact, component: Comp }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            component={(props: RouterProps) => (
              <Suspense fallback={<></>}>
                <Comp {...props} />
              </Suspense>
            )}
          />
        ))}
        </Layout>
      </Switch>
  </Router>
);

export default Routers;
