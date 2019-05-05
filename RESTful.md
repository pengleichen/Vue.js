#RESTful规范
##面向资源编程
  ```
https://api.example.com/v1/zoos
https://api.example.com/v1/animals
```
##HTTP 动词
```
对于资源的具体操作类型，由HTTP动词表示：
GET(SELECT): 从服务器取出资源（一项或多项）
POST(CREATE)：在服务器新建一个资源
PUT(UPDATE)：在服务器更新资源（向客户端提供改变后的完整资源）
PATCH(UPDATE)：在服务器更新资源（向客户端提供改变的属性）
DELETE(DELETE)：从服务器删除资源
```
##在URL中体现版本
`https://www.bootcss.com/v1/`
##在URL中体现是否是API
`https://www.bootcss.com/api/mycss`
##在URL中的过滤条件
```
如果记录数量很多，服务器不可能都将它们返回给用户，API应该提供参数，过滤返回结果。
?limit=10: 指定返回记录的数量
?offset=10：指定返回记录的开始位置
?page=2&per_page=100：指定第几页，以及每页的记录数
?sortby=name&order=asc：指定返回结果安装哪个属性排序，以及排序顺序
?animal_type_id=1：指定筛选条件
```
##尽量使用HTTPS
`https://www.bootcss.com/api/mycss`
##响应时设置状态码
```
1xx 信息，服务器收到请求，需要请求者继续执行操作
2xx 成功，操作被成功接收并处理
3xx 重定向，需要进一步的操作以完成请求
4xx 客户端错误，请求包含语法错误或无法完成请求
5xx 服务器错误，服务器在处理请求的过程中发生了错误
```
##返回值
```
   GET请求  返回查到所有或单条数据
  POST请求  返回新增的数据
   PUT请求  访问更新数据
 PATCH请求  局部更新，返回更新整体数据
DELETE请求  返回值为空
```
##返回错误信息
```
  如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。
```
##Hypermedia API
```
如果遇到需要跳转的情况，携带跳转接口的URL
Hypermedia API的设计，比如github的API就是这种设计，访问api.github.com会得到一个所有可用的API网址列表。
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  ...
}
从上面可以看到，如果想获取当前用户的信息，应该去访问api.github.com/user，就会得到下面的结果
{
  "message": "Requires authentication",
  "documentation_url": "https://developer.github.com/v3/users/#get-the-authenticated-user"
}
```
##其他
```
1. API的身份认证应该使用OAuth 2.0框架
2. 服务器返回的数据格式，应该尽量使用JSON，避免使用XML
```