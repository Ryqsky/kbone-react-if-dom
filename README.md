# kbone-react-if-dom

Kbone-react 缺陷复现仓库

1. 安装依赖
```sh
npm i
```

2. 构建应用
```sh
npm run mp
```

3. 打开小程序
```
./dist/mp
```

4. 复现缺陷

- 点击切换状态后，整个开发者工具会卡顿，界面无响应，控制台 console 输出也没响应
- 当多嵌套一个 div 就不会出现这个问题
- 或者在条件判断另一个元素多加一层 div 也不会出现这个问题
