# node+Express+MongoDB 框架搭建一个类似 Instagram 的图片分享社区

*参考：https://tuture.co/2019/10/16/a0531f0/*

**Model 定义了数据模型，View 定义了用户界面，而 Controller 则定义了相应的业务逻辑。**

## 基础中间件
* morgan：用于记录日志的中间件，对于开发调试和生产监控都很有用；
* bodyParser：用于解析客户端请求的中间件，包括 HTML 表单和 JSON 请求；
* methodOverride：为老的浏览器提供 REST 请求的兼容性支持；
* cookieParser：用于收发 cookie；
* errorHandler：用于在发生错误时打印调用栈，**仅在开发时使用**；
* handlebars：用于渲染用户界面的模板引擎，会在后面细讲。

## 后续所需中间件
* moment：时间格式化，中文化时间戳；
* multer：用于处理文件上传；

## 搭建路由
* GET /：网站主页
* GET /images/image_id：展示单张图片
* POST /images：上传图片
* POST /images/image_id/like：点赞图片
* POST /images/image_id/comment：评论图片