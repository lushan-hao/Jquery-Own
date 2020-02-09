// 本身是node的环境，使用path+fs操作也是可以的
function MyPlugin(options) {  //{ text:'xxx' }
    // 个性化定制
    this.options = options;
    if ( !this.options.text ) {
        throw new Error('text is required!!!');
    }
}

MyPlugin.prototype.apply = function(compiler) {

    // 编辑过程事件回调函数
    compiler.plugin('compilation',(compilation)=>{
        console.log(this.options.text);
        // 通过compilation操作文件
        compilation.assets['./test.txt'] = {
            // 内容
            source:()=> {
                return this.options.text;
            },
            // 大小
            size:()=>{
                return this.options.text.length;
            }
        }
        // 通过compilation切入其他组件提供的事件
        compilation.plugin('html-webpack-plugin-before-html-processing',(htmlData,callback) => {
            // console.log(htmlData.html);
            htmlData.html = htmlData.html.replace('<div id="app"></div>',`<div id="app">
                  <div style="background-color:red;height:300px;display:none;" id="default" >
                      我是默认的骨架屏
                  </div>
                  <div style="background-color:red;height:300px;display:none;" id="user" >
                      我是user的骨架屏
                  </div>
                  <div style="background-color:red;height:300px;display:none;" id="login" >
                      我是login的骨架屏
                  </div>
                </div>
                <script>
                      var hash = window.location.hash;
                      var path = window.location.pathname;
                      if (path === '/login' || hash === '#/login') {
                        document.getElementById('login').style.display = 'block';
                      } else if (path === '/user' || hash === '#/user') {
                        document.getElementById('user').style.display = 'block';
                      } else {
                        document.getElementById('default').style.display = 'block';
                      }
                </script>`);

                // 错误有限
                // 如果处理有错误，传递到第一个参数，否则错误参数的位置就null
                callback(null, htmlData);
                // 没有成功的生成文件是因为没有调用回调函数

        });
    });
}

module.exports = MyPlugin;
// 向外导出  供  webpack.config.js 中的module.exports.plugins.push(new MyPlugin(options) )