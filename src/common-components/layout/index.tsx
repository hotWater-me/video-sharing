import React, { ReactNode } from 'react';
import FooterBar from '../footer-bar';

const { Fragment } = React;
interface layoutType {
  children: ReactNode;
}
const Layout = (props: layoutType) => {
  return (
    <Fragment>
      {/* TODO header组件 */}
      <div>Header组件</div>
      <div style={{ textAlign: 'center' }}>{props.children}</div>
      <FooterBar />
    </Fragment>
  );
};
export default Layout;