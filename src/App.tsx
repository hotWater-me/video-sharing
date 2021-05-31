import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routers from './routers';
import './App.css';
import Layout from './common-components/layout'

export interface IAppProps {}
const App: FC<IAppProps> = () => (
  <>
    <Router>
      <Switch>
        <Layout>
        {routers.map(({ path, exact, component, children }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        </Layout>
      </Switch>
    </Router>
  </>
);

export default App;
