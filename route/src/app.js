require.config({
    baseUrl:"js",
    paths:{
        //文件
        jquery:"lib/jquery-3.3.1",
        //文件夹
        service:"../service"
    }
})

require(["jquery","router"],function($,router){
    //这种事件绑定方式比较浪费性能
    //因为页面中有3个元素，所以这种事件会绑定3次
    //-->建议：使用事件委托的方式：
    //  -->就是把事件绑定在父元素或者祖先元素中，然后让子元素触发
    
    //1、绑定事件
    $(".aside").on("click",".aside-item",function(){
        //2、通过判断元素是否有指定的类名，从而知道要实现什么功能
        //元素：this    -->dom
        
        if($(this).hasClass("aside-saleman")){
            //销售员
            //3、调用销售员模块
            router.push({ path:"/saleman"} )
        }else if($(this).hasClass("aside-car")){
            //汽车
        }else if($(this).hasClass("aside-shop")){
            //经销商
        }
        
    });


    //默认展示第一个菜单栏的内容
    $(".aside .aside-item:eq(0)").trigger("click");
})