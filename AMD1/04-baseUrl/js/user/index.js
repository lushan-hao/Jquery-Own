define(["user/detail"],function(detail){

    return function(){
        var age=detail();
        console.log('用户模块初始化');

        return age++;
    }
})