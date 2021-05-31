import React from 'react';
import './index.less';

export interface IMessageProps {}

const Message: React.FC<IMessageProps> = (props) => {
  return (
    <div className="message-router-wrapper">
      Messge页面
    </div>
  );
};

export default Message;
