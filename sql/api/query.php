<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
</head>
<body>
<?php
                //我需要把所有的employee 数据都获取到，然后通过一个表格输出到客户端.
                 header("Content-Type:text/html;charset=utf-8");
                $con = mysql_connect("127.0.0.1","root","");

                if (!$con){
                    die('Could not connect: ' . mysql_error());
                }
                 $sql="select * from employee";
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
                             "username"=>$row['username'],
                             "password"=> $row['password'],
                             "loginName"=>$row['loginName']
                        );
                        //往数组里面添加一条记录. php 往数组里面添加一条记录怎么出力.
                        //var_dump($item);
                        array_push($list,$item);
                }

?>
        <table>
                <tr>
                        <td>id 编号</td>
                        <td>用户名</td>
                        <td>登录名</td>
                        <td>密码</td>
                </tr
                <!-- 把php 的数组动态向结合html 标签动态的输出.
              早之前我们干这个跟后台衔接，美工做好页面，做好效果，把页面给后台程序员。
              后台程序员拿到代码，决定在那个位置上面进行输出，就写对应的<?php ?>
                 --!>
                <?php for($i=0;$i<count($list);$i++){ ?>
                       <tr>
                            <td><?php echo $list[$i]["id"]; ?></td>
                            <td><?php echo $list[$i]["username"]; ?></td>
                            <td><?php echo $list[$i]["loginName"]; ?></td>
                            <td><?php echo $list[$i]["password"]; ?></td>
                       </tr>
                <?php } ?>
        </table>
</body>
</html>