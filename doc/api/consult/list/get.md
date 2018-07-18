#### 地址
`/api/consult/list/get`

#### 描述
获取用户是否咨询列表

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
    first: {  //第一次提问
      ask: {  //提问信息
        time: 1232423123, //提问的时间戳
        skinType: '1,2,3', //皮肤问题类型
        mainWant: '去除红血丝',  //主要诉求
        skinDesc: '夏天皮肤发红',  //皮肤问题描述
        skinCare: '一天洗三次脸',  //护肤步骤
        skinProduct: 'sk2，相宜本草',  //使用产品
      },
      answer: {  //第一次提问回答，没有回答返回null
        time: 1232423123,  //回答时间戳
        text: '没啥问题，哈哈哈哈',  //回答内容
      }
    },
    second: {  //第二次提问，没有提问返回null
      ask: {
        time: 1232423123,  //提问时间
        text: '虾青素怎么用的',  //提问内容
      },
      answer: {  //第二次提问回答，没有回答返回null
        time: 1232423123,  //回答时间戳
        text: '2没啥问题，哈哈哈哈',  //回答内容
      }
    }
  }
}
```
