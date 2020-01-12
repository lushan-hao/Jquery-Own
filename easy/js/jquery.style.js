//样式操作部分
jQuery.fn.extend({
    //1、获取样式$("div").css("color")  只能获取到第一个div的颜色
    //2、设置样式
    //      $("div").css("color","red") 设置每一个div的字体颜色
    //      $("div").css({ color:"red","backgroundColor","blue" })
    css(...args){
        var arg1=args[0],
            arg2=args[1];
        //参数个数：1
        if(args.length === 1){
            if(jQuery.type(arg1)==="string"){
                //a、获取样式:只能获取第一个元素的样式
                let firstDom = this[0];

                //错误写法
                // return firstDom.style[arg1]; //只能获取行内样式

                //正确的写法
                let domStyleObj = window.getComputedStyle(firstDom,null)
                return domStyleObj[arg1];
            }else{
                //b、设置多个样式  
                //arg1:{ color:"red",fontSize:"20px" }
                
                var _that=this;
                //遍历出所有要添加的样式
                jQuery.each(arg1,function(key,value){

                    //遍历每一个DOM元素，添加指定的样式
                    _that.css(key,value);
                });


                return _that;

            }
            
        }else{
            //参数个数：2  设置单个样式
            
            //第一步：遍历每一个DOM
            //第二步：给DOM添加样式

            //this：表示一个jquery对象
            // this.each(function(index,dom){
            //     //this：表示一个DOM元素  ===   dom
            //     this.style[arg1] = arg2;
            // });
            // return this;

            //等价于：
            //$("div").css()        
            //this->$("div")
            //this: { 0:div,1:div,2:div,length:3 }
            return this.each(function(index,dom){
                //this：表示一个DOM元素  ===   dom
                this.style[arg1] = arg2;
            });
        }
        
    },
    show(){
        //不会涉及动画
        //功能：让所有的元素显示出来
        
        this.css("display","block");
        return this;
    },
    hide(){
        this.css("display","none");
        return this;
    },
    toggle(){
        //判断每一个元素，如果隐藏就显示，如果显示就隐藏
        this.each(function(){
            //问题：jquery(this)都会产生一个新的jquery对象
            //而每一次产生一个新的jquery对象都会开辟一块新的内存，
            //而这里的dom元素是唯一的，所以导致了一些不必要的内存浪费

            // jQuery(this).css("display")==="none"?
            //     jQuery(this).show():
            //     jQuery(this).hide()

            //解决方案：
            // let $this=jQuery(this);
            // $this.css("display")==="none"?
            //     $this.show():
            //     $this.hide();

            //解决方案2：
            let $this=jQuery(this);
            $this[$this.css("display")==="none"?"show":"hide"]();

        })
    }
});