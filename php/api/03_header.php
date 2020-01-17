<?php

        header("Content-Type:text/html;charset=utf-8");
        //获取到客户端的请求头
        //$_GET $_POST $_FILES  获取客户端用户提交的参数.
        $arr=getallheaders();
        //var_dump($arr);
        $userAgent=$arr['User-Agent'];
        //判断$userAgent 字符串当中是否包含某个字符串
        if(strstr($userAgent,"Chrome")){
                echo "您当前使用的是google 浏览器";
        }
        else if(strstr($userAgent,"Firefox")){
                echo "您当前使用的是火狐 浏览器";
        }else{
                echo "您当前使用的浏览器版本过低，请<a href='http://www.360.cn'>升级</a>";
        }
?>