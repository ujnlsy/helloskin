#### 地址
`/api/skinmanage/list/put`

#### 描述
保存反馈

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userId|string|T|用户Id|
|feedbackText|string|T|反馈文字|
|image|string|F|反馈图片|

示例：
```
{
  userId: 'dfdf',
  feedbackText: '反馈内容',
  image:''
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

