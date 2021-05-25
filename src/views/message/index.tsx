import React from 'react';
import './index.less';

export interface IMessageProps {}

const Message: React.FC<IMessageProps> = (props) => {
  return <div className="message-router-wrapper">message</div>;
};

export default Message;
