#### 地址
`/api/consult/list/put`

#### 描述
保存第二次咨询

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userId|string|T|用户Id|
|askText|string|T|咨询问题|

示例：
```
{
  userId: 'dfdf',
  askText: '第二次提问提问'
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

