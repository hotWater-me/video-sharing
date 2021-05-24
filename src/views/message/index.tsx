import React from 'react';
import FooterBar from '../../common-components/footer-bar';
import './index.less';

export interface IMessageProps {}

const Message: React.FC<IMessageProps> = (props) => {
  return (
    <div className="message-router-wrapper">
      <FooterBar />
    </div>
  );
};

export default Message;
