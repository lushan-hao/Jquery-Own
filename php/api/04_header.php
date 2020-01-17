<?php

            //Refresh 响应头，这个头是http 协议规定的。
            header("Content-Type:text/html;charset=utf-8");

            header("Refresh:10;url=http://www.baidu.com");
            //输出响应体的
            echo "<span>10</span>秒钟之后将跳转到百度，如果没有跳转，请点击<a href='http://www.baidu.com'>这里</a>";
?>

<script>
            window.onload=function(){
                   var timer=10;
                   var ids=window.setInterval(function(){
                         timer--;
                         console.log(timer);
                         if(timer<1){
                             window.clearInterval(ids);
                             return;
                         }
                         document.querySelector("span").innerHTML=timer;
                   },1000);
            };
</script>





