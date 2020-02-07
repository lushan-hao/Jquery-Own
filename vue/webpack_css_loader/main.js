
import './main.css'
// es6 Module 
import Vue from './vue.js'
// 整个项目的入口文件
import App from './App.js'



new Vue({
	el:'#app',
	components:{
		App
	},
	template:`
		<App />
	`
});
