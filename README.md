## ✨ 仓库地址已迁移到 https://github.com/video-sharing-team/video-sharing-front 

```jsx
  替换remote
     git remote rm origin
     git remote add origin git@github.com:video-sharing-team/video-sharing-front.git
     git remote -v
```


### 🔨 接口

```jsx
  获取文件列表 http://1.116.126.210:3000/getList
  获取视频文件 https://dev-1305586739.cos.ap-shanghai.myqcloud.com/文件名
  代理访问的话需要 host需为localhost:3000，不然会有跨域报错
```

### antd - m

```
  已配置按需加载 - 目前build文件仍然较大 正在查找方案解决
```

### 适配方案 - rem

```
  rem的适配单位是 750
  css可以完全按照 750 的设计稿进行设置单位
```

### less 目前已 zhichi

```
  less@4+
  less-loader@6+
```

### review-code-lint

```
  强制规范每个组件不能超过200行(尽量抽离公共组件 - 为整个项目提供使用)
  编写的所有组件都要易拓展 易维护
```

### 组件命名规范

```
  组件文件夹名强制使用 - 所有单词小写 单词之间用 '-' 隔开
  组件名强制使用 - 驼峰命名法 所有单词大写
```

### css 书写规范

```
  尽量不使用行内方式
  class的名称语义化要强 不限制className长度
```
