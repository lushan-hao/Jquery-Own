(function(){
    //将会保存曾经绑定过的所有的事件处理函数
    //以DOM元素为区分，
    const events=[
        //{ ele:div1,type:"click",callback:function(){} },
        //{ ele:div1,type:"click",callback:function(){} },
        //{ ele:div1,type:"keydown",callback:functioN(){} },
        //{ ele:div3,type:"click",callback:function(){} }
    ];


    jQuery.fn.extend({
        //$("div").on("click",function(){})
        on(type,callback){
            //给当前jquery对象中的每一个DOM元素绑定事件
            this.each(function(index,element){
    
                element.addEventListener(type,callback);

                events.push({ ele:element,type,callback })
                
            });
    
            //实现链式编程
            return this;
        },
        //解绑绑定：$("div").off("click")：表示解除当前元素的所有的单击事件
        off(type){
    
            this.each(function(index,element){
    
                //遇到一个问题：并不能得到之前绑定事件的回调函数的地址
                //-->解决方案：必须在当前绑定事件的时候，把事件回调函数的内存地址保存起来
                // element.removeEventListener(type,)

                //找到该元素曾经绑定过type类型的事件
                var evts = events.filter(function(evtObj){
                    
                    //是否是该元素绑定的该类型的事件
                    var isCurrent=evtObj.ele === element && evtObj.type === type;

                    return isCurrent;
                });

                //进行事件解绑操作
                evts.forEach(function(evt){
                    var { callback } = evt;

                    element.removeEventListener(type,callback);
                })
            })
    
        }
    })
})()

//$("div").on("click")