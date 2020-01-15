define([
    "jquery",
    "service/salemanService",
    "require",
    "saleman/index"],function($,salemanService,require){
    return function(){
        
        var addStr=`
            <form>
                <label>姓名：</label><input name="name"/>
                <label>年龄：</label><input name="age"/>
                <button type="submit">提交</button>
            </form>
        `;

        //1、把同步的表单变成异步的表单：阻止form的submit事件的默认行为
        var $add=$(addStr);
        $add.on("submit",function(e){
            e.preventDefault();
            
            //2、自己去获取表单数据，进行数据操作
            var name=$(this).find("input[name=name]").val();
            var age=$(this).find("input[name=age]").val();
            salemanService.add(name,age);

            //3、回到saleman/index页面
            // $(".aside .aside-item:eq(0)").trigger("click");

            require("saleman/index")();

            //错误的方式
            //salemanIndex(); //报错：xxx is not a function


        })

        $("#main .content").html($add);
    }
})