import React from 'react';
import FooterBar from '../../common-components/footer-bar';
import './index.less';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <FooterBar>
      <div className="home-router-wrapper"></div>
    </FooterBar>
  );
};

export default Home;
