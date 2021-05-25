import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routers from './routers';
import FooterBar from './common-components/footer-bar';
import './App.css';

export interface IAppProps {}
const App: FC<IAppProps> = () => (
  <>
    <Router>
      <FooterBar>
        <Switch>
          {routers.map(({ path, exact, component, children }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
        </Switch>
      </FooterBar>
    </Router>
  </>
);

export default App;
