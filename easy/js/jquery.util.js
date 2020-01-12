jQuery.extend({
    //可以遍历数组和对象
    each(obj,callback){

        //有2种情况，数组使用for循环，对象使用for...in循环
        
        //不仅仅可以遍历数组，也可以遍历伪数组
        //{ length:0 }
        //{ 0:100,length:1 }
        //{ 0:"a",1:"b",2:"c",length:3 }
        //在这里，由于存在数组、伪数组2种情况，只能使用一种约定俗成的方式来通过他们的特征来进行判断：length属性，并且值>=0
        if( (length in obj) && obj.length>=0 ){
            for(let i =0;i<obj.length;i++){

                callback.call(obj[i],i,obj[i])
                //callback.apply(obj[i],[i,obj[i]])
                
                //没有必要使用bind，bind的实现相对繁琐
                // callback.bind(obj[i])(i,obj[i])
            }

        }else{
            for(let i in obj){
                callback.call(obj[i],i,obj[i])
            }
        }
    },
    
    type(data){
        //判断data的数据类型
        //-->Object.prototype.toString.call(1)
        //  -->"[object Number]"

        var type=Object.prototype.toString.call(data);
        return type
                .replace("[object ","")
                .replace("]","")
                .toLowerCase();
    }
})

jQuery.fn.extend({
    each(callback){
        //this：jquery对象
        jQuery.each(this,callback)

        return this;
    }
});