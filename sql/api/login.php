<?php

            header("Content-Type:text/html;charset=utf-8");
            //接收请求，处理请求，完成响应.

            //接收请求
            $loginName=$_POST['loginName'];
            $password=$_POST['password'];

            //处理请求。获取到用户名跟密码，到数据库里面进行查询，有没有这样的一条记录，有就代表登录成功.
            //否则就是用户名或密码错误.
//            /建立数据库连接，跟哪个库建立连接，准备sql 语句，发送sql 语句，等待响应的结果，根据结果进行响应.
            $con = mysql_connect("127.0.0.1","root","");

            if (!$con){
            	die('Could not connect: ' . mysql_error());
            }



            $sql="select * from employee where loginName='$loginName' and password='$password'";

            //连接那个数据库  pdj 数据
            mysql_select_db("huike", $con);

            //查询，响应一个结果。返回的结果都在这个$result
            $result = mysql_query($sql);
            $item=array();
            //怎么去获取这个结果.
            if($row=mysql_fetch_array($result)){
                    // $row 代表的是一条记录，代表是一行.
                    $item=array(
                         "id"=> $row['id'],
                         "username"=>$row['username'],
                         "password"=> $row['password'],
                         "loginName"=>$row['loginName']
                    );
            }
            //根据结果进行判断,进行输出.
            if(count($item)>0){
                 echo "登录成功";
            }else{
                 echo "登录失败，用户名或者密码错误";
            }

?>