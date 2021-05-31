import React from 'react';
import './index.less';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  return (
      <div className="home-router-wrapper">
        Home页面
      </div>
  );
};

export default Home;
