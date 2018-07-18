#### 地址
`/api/skinmanage/get`

#### 描述
获取用户是否有皮肤档案

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userId|string|T|用户Id|

示例：
```
{
  userId: 'dfdf'
}
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok",
  data: {
    isHave: 0, //是否有皮肤档案，0没有，1有
  }
}
```

