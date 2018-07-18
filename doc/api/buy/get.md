#### 地址
`/api/buy/get`

#### 描述
获取购买商品

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userId|string|T|用户Id|

示例：
```
{
  userId: 'dfdf',
}
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok",
  data: {
    record: [
      {
        time: 123213123213, //购买时间戳
        product: [
          {
            name: '虾青素',
            price: 498.00',
          },
          {
            name: '虾青素',
            price: 498.00',
          },
        ],
        totalmoney: '996.00',
        realmoney: '600.00'
      },
      {
        time: 123213123214, //购买时间戳
        product: [
          {
            name: '虾青素',
            price: 498.00',
          },
          {
            name: '虾青素',
            price: 498.00',
          },
        ],
        totalmoney: '996.00',
        realmoney: '600.00'
      },
    ]
  }
}
```

