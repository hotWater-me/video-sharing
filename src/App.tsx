import React, { FC } from 'react';
import Routers from './routers/index';
import './App.css';

export interface IAppProps {}
const App: FC<IAppProps> = () => (
  <>
    <Routers />
  </>
);

export default App;
