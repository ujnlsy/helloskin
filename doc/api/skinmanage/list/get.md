#### 地址
`/api/skinmanage/list/get`

#### 描述
获取用户皮肤档案列表

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
    record: {
      '1': {  //首次建档
        time: 1232423123, //时间戳
        skinProblem: '皮肤问题', //皮肤问题类型
        mainWant: '去除红血丝',  //主要诉求
        suggestion: '护肤建议',  //护肤建议
        skinProduct: '使用产品',  //使用产品
        useMethod: '使用方法', //使用方法
      },
      '2': {
        time: 1232423123, //时间戳
        text: '', //第二次更新档案的内容
      }
    },
    nextFeedbackTime: 123232323, //下次反馈的时间戳
  }
}
```

