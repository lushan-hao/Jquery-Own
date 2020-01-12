(function(global){

    function jQuery(selector){
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = jQuery.prototype = {
        constructor:jQuery,

        init:function(selector){
            if(jQuery.type(selector)==="string"){   //选择器
            
                const elements = document.querySelectorAll(selector)
                
                for(let i = 0;i<elements.length;i++){
                    this[i] = elements[i];
                }
                this.length=elements.length;
                
            }else if( selector.nodeType ){  //DOM元素
                    
                this[0] = selector;
                this.length = 1;
                
            }
            
        }
    }

    jQuery.fn.init.prototype = jQuery.fn;

    //$.extend
    //  1、如果有一个参数，把参数对象里面的属性依次拷贝给$
    //      $.extend({ name:"abc",age:18 })
    //    -->$.name="abc"
    //    -->$.age=18
    //  2、如果有多个参数，把第二个参数及其后面的所有参数中的属性依次遍历给第一个参数
    //      var p={}
    //      $.extend(p,{a:10},{b:20},{c:30})
    //              p.a=10;
    //              p.b=20;
    //              p.c=30
    
    //$.fn.extend
    //  1、如果有一个参数，把参数对象中的属性依次遍历给$.fn
    //      $.fn.extend({ css:function(){},on:function(){} })
    //          $.fn.css=function(){}
    //          $.fn.on=function(){}
    //  2、如果有多个参数，功能等价于$.extend的第二个功能
    //      $.fn.extend(p,{a:10},{b:20},{c:30})
    //      $.extend(p,{a:10},{b:20},{c:30})
    //      -->p.a=10 p.b=20 p.c=30;

    //寻找共同点：
    //1、$.fn.extend和$.extend多参数功能是完全一样的
    //2、$.fn.extend和$.extend一个参数的功能其实都是为了把参数里面的属性依次便利给（this）

    //3、这2大功能最终的目的都是为了进行对象的拷贝——>实现拷贝继承-->思考：能不能重用拷贝的逻辑
    //  -->寻找共同点：
    //      1、都是为了拷贝
    //      2、拷贝其实只要确定了
    //          a、提供数据的对象  
    //          b、接收数据的对象
    //              第一大功能提供数据的对象：第二个参数及其后面的参数；接收数据的对象是第一个参数
    //              第二大功能提供数据的对象：第一个参数；接收数据的对象：this



    jQuery.fn.extend=jQuery.extend=function(...args){
        //接收数据的对象
        let target;
        let sources=[];

        //参数个数为1：
        if(args.length===1){
            target=this;
            sources.push(args[0]);
        }else{
            //参数个数>1：
            target=args[0];

            sources.push(...args);
            sources.splice(0,1);
        }

        //完成拷贝的逻辑
        sources.forEach(function(source){
            //获取对象中的每一个属性：
            Object.keys(source).forEach(function(key){
                target[key] = source[key];
            })
        });

        //告知用户拷贝的结果
        return target;

    }

    global.$ = global.jQuery = jQuery;
})(window)