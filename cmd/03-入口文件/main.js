require.config({
    //baseUrl
    //paths：用来配置一些常用的文件、文件夹路径
    paths:{
        //以后所有的模块调用都通过jquery短名称
        jquery:"jquery-3.3.1"

        //当然，不是所有的模块都需要配置在这里的，一般来说常用的模块、文件夹才需要配置
    }
    //shim
})

require(["jquery"],function($){
    console.log('首页');

    $("body").append("<div>abc</div>")
})


//user.js
// define(["jquery"],function($){

// })

//解释：
//1、为什么每个模块要引用jquery，都需要引用jquery模块
//  -->为了防止全局变量污染：$
//      -->zepto:$
//  -->使用amd的方式每个模块导入一下，$就是一个局部变量了

//2、我们要使用paths来配置jquery，为什么？
//  -->jquery版本升级？3.3.1-->3.4.0，会导致牵一发而动全身的修改
//      -->define(["jquery-3.4.0"]))
//      -->define(["jquery-3.4.0"]))
//      -->define(["jquery-3.4.0"]))
//  -->以后代码结构、文件结构、项目结构进行了优化，其他模块引用的jquery又导致了牵一发而动全身的效果