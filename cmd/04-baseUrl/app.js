
//配置requirejs模块的基础路径
require.config({
    baseUrl:"js",
    //paths里面的配置，也是相对于baseUrl的
    paths:{

    }
})


require(
        [
            "user/index",
            "product/index",
        ],
        function(userIndex,product){
    console.log('首页');

    var age = userIndex();
    console.log(age);

    product();
})