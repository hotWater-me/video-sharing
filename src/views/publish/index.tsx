import React from 'react';
import FooterBar from '../../common-components/footer-bar';
import './index.less';

export interface IPublishProps {}

const Publish: React.FC<IPublishProps> = (props) => {
  return (
    <div className="publish-router-wrapper">
      Publish页面
    </div>
  );
};

export default Publish;
