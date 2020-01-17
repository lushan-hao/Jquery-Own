<?php

        header("Content-Type:text/html;charset=utf-8");
         /*
            文件上传需要做的一些处理

            1:接收请求
            2：处理请求
            3：完成响应.
         */
         // 1:接收请求
         //var_dump($_FILES);
        $files=$_FILES;
        /*
        array
          'lifephoto' =>
            array
              'name' => string 'author.jpg' (length=10)
              'type' => string 'image/jpeg' (length=10)
              'tmp_name' => string 'C:\wamp\tmp\php34A7.tmp' (length=23)
              'error' => int 0
              'size' => int 63744
        */

       //获取上传的文件的名称
       $fileName=$files['lifephoto']['name'];
       //获取文件上传的临时位置.
       $tmp_name=$files['lifephoto']['tmp_name'];

       //往images 目录下面去进行硬盘的存储.
       //php 字符串拼接我们使用 .
       move_uploaded_file($tmp_name,"images/".$fileName);
       echo "上传成功!";
?>