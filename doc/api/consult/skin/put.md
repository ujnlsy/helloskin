#### 地址
`/api/consult/skin/put`

#### 描述
保存皮肤基础信息

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userId|string|T|用户Id|
|skinType|string|T|皮肤类型|
|mainWant|string|T|主要诉求|
|skinDesc|string|T|皮肤状况描述|
|skinCare|string|T|护肤步骤|
|skinProduct|string|T|使用的产品|

示例：
```
{
  userId: 'dfdf',
  skinType: '1,2,3',
  mainWant: '去除红血丝',
  skinDesc: '夏天皮肤发红',
  skinCare: '一天洗三次脸',
  skinProduct: 'sk2，相宜本草'
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

