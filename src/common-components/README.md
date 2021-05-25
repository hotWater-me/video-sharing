### 公共组件声明文件

```
  此文件夹下是整个项目的公共组件
  请参考组件的类型进行复用
  如发现功能不能慢如当前需求 应基于组件现状去迭代 迭代完成后在此文件上记录 迭代细节 - 功能 -类型
```

### FooterBar 组件

```
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

  目前是路由的公共部分
  不需其他组件再次引入 一下根组件配置引入
```
