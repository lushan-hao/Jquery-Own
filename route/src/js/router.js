//用户编写的部分
define(["Route","saleman/index","saleman/add"],function(Route,salemanIndex,salemanAdd){
    var router=new Route({
        routes:[
            // { path:"/",redirect:"/saleman" },
            { path:"/saleman",component: salemanIndex },
            { path:"/saleman/add",component: salemanAdd }
        ]
    });

    return router;

})