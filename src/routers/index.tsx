import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouterProps,
  Switch,
} from 'react-router-dom';
import config from './config';
import FooterBar from '../common-components/footer-bar';

export interface IRoutersProps {}
const Routers: React.FC<IRoutersProps> = () => (
  <Router>
    <FooterBar>
      <Switch>
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
      </Switch>
    </FooterBar>
  </Router>
);

export default Routers;
