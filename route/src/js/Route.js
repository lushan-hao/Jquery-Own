//Route作者编写的部分
define([],function(){
    // var router=new VueRoute(){
    //     routes:[
    //         { path:"/saleman",componont:Saleman },
    //         { path:"/user",componont:User },
    //     ]
    // }

    function Route(option){
        this.routes=option.routes;
        this.init();
    }
    Route.prototype={
        constructor:Route,
        //初始化
        init(){
            var _that=this;

            //1、监听路由变化
            window.addEventListener("hashchange",function(){
                //1.1、获取最新的hash值
                var hash=location.hash.substring(1);

                //1.2、将hash(/saleman)跟本地保存的的路由中的path进行匹配，匹配到指定路由，就执行指定模块的代码
                var route=_that.routes.find(item=>{
                    return item.path === hash
                }); //如果找不到符合条件的元素，那么route值为空

                if(route){
                    route.component();  //Saleman()

                    //相当于：
                    //var route={ path:"",component:function(){} }
                    //route.component只是找到了这个函数，这个函数就是那个模块
                    //route.component()才是执行了这个函数，也就是调用了那么模块
                }
                
            })
        },

        push({path}){
            //从this.routes中找到path与参数path相等的对象
            var route=this.routes.find(item=>{
                return item.path === path
            });

            if(route){
                route.component();
            }
        }
    }

    return Route;

})