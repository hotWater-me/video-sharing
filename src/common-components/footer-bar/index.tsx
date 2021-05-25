import React, { FC, useCallback, useMemo } from 'react';
import { withRouter, RouteProps } from 'react-router-dom';
import './index.less';

export interface IHomeButtonProps extends RouteProps {
  history: any;
}

export const HomeButton = withRouter((props: IHomeButtonProps) => {
  /**
   * 判断是否是当前路由
   */
  const actived = useMemo(
    () => props.location?.pathname === '/', 
    [props.location]
    );

  /**
   * 跳转事件
   */
  const jump = useCallback(() => {
    if (!actived) props.history.push('/');
  }, [actived, props]);

  return (
    <div 
      className={['home-router-button', actived ? 'actived' : ''].join(' ')} 
      onClick={jump}
    >
      <i className="iconfont icon-home" />
    </div>
  );
});

export interface IPublishButtonProps extends RouteProps {
  history: any;
}

export const PublishButton = withRouter((props: IPublishButtonProps) => {
  /**
   * 判断是否是当前路由
   */
  const actived = useMemo(
    () => props.location?.pathname === '/publish', 
    [props.location]
    );

  /**
   * 跳转事件
   */
  const jump = useCallback(() => {
    if (!actived) props.history.push('/publish');
  }, [actived, props]);

  return (
    <div 
     className={['home-router-button', actived ? 'actived' : ''].join(' ')} 
     onClick={jump}
    >
      <i className="iconfont icon-tianjia iconfontpub" />
    </div>
  );
});

export interface IMessageButtonProps extends RouteProps {
  history: any;
}

export const MessageButton = withRouter((props: IMessageButtonProps) => {
  /**
   * 判断是否是当前路由
   */
  const actived = useMemo(
    () => props.location?.pathname === '/message', 
    [props.location]
  );

  /**
   * 跳转事件
   */
  const jump = useCallback(() => {
    if (!actived) props.history.push('/message');
  }, [actived, props]);

  return (
    <div 
     className={['home-router-button', actived ? 'actived' : ''].join(' ')} 
     onClick={jump}
    >
      <i className="iconfont icon-geren" />
    </div>
  );
});

export interface IFooterBarProps {}

const FooterBar: FC<IFooterBarProps> = ({ children }) => {
  return (
    <div className="router-wrapper">
      <div className="container">{children}</div>
      <div className="footer-bar-wrapper">
        <HomeButton />
        <PublishButton />
        <MessageButton />
      </div>
    </div>
  );
};

export default FooterBar;
