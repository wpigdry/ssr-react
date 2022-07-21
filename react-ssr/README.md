# React Server Side Rendering Demo

# ssr-react
利用react和koa实现ssr

# 打包index.jsx 打包前端页面
"build:client": "NODE_ENV=development webpack -w",

# 打包webpack.server.js 打包后端页面到server/build/app.js路径
"build:server": "NODE_ENV=development webpack -w --config webpack.server.js",

# 启动打包后的node服务，服务中返回前端页面
"start": "nodemon server/build/app.js"

## Get Started

```sh
$ git clone https://github.com/JustClear/react-ssr.git
$ cd react-ssr
$ yarn
$ npm run build:client
$ npm run build:server
$ npm start
```

## License

Licensed under the [MIT License](https://github.com/JustClear/react-ssr/blob/master/LICENSE)
