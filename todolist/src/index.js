import React from 'react';//为了运行 <App> jsx 语法
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

//项目从index，js 开始

// import { Component } from 'react'
// 等价于
// import React from 'react'
// const Component = React.Component