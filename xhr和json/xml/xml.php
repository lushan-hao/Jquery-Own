<?php


            header("Content-Type:text/xml;charset=utf-8");

            //把user.txt 文件的内容读取出来。file_
            $data=file_get_contents("user.txt");

            echo $data;

?>