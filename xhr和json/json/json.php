<?php

                        header("Content-Type:text/json;charset=utf-8");
                        $con = mysql_connect("127.0.0.1","root","");
                        if (!$con){
                            die('Could not connect: ' . mysql_error());
                        }
                        $sql="select * from book";
                        //连接那个数据库  pdj 数据
                        mysql_select_db("huike", $con);
                        //查询，响应一个结果。返回的结果都在这个$result
                        $result = mysql_query($sql);
                        $list=array();
                        //怎么去获取这个结果.
                        while($row=mysql_fetch_array($result)){
                                // $row 代表的是一条记录，代表是一行.
                                $item=array(
                                     "id"=> $row['id'],
                                     "bookName"=>$row['bookName'],
                                     "author"=> $row['author'],
                                     "price"=>$row['price'],
                                     "cbs"=>$row['cbs'],
                                     "operation"=>"删除"
                                );
                                //往数组里面添加一条记录. php 往数组里面添加一条记录怎么出力.
                                //var_dump($item);
                                array_push($list,$item);
                        }
                        //$list  最傻的方式就是把数组的数据进行遍历，然后组拼字符串成json 格式的数据.
                        //php 或者java,node.js 这种服务器对json 的格式的支持比较友好
                        //php 可以将一个关联数组的数据直接转换成json 格式.
                        $json=json_encode($list);
                        echo $json;
?>