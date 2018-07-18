#### 地址
`/api/consult/base/put`

#### 描述
保存客户基础信息

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userId|string|T|用户Id|
|userName|string|T|用户名字|
|age|string|T|年龄|
|gender|string|T|性别|
|city|string|T|居住城市|
|weight|string|T|体重|

示例：
```
{
  userId: 'dfdf',
  userName: 'source',
  age: '22',
  gender: '0', //0男，1女
  city: '四川-成都',
  weight: '50'
}
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok",
  data: {
    status: 0, //提交成功
  }
}
```

