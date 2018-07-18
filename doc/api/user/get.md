#### 地址
`/api/user/get`

#### 描述
获取微信信息

#### 参数
无

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok",
  data: {
    nickName: 'xxx',
    avatarUrl: '',
    baseInfo: {
      userName: 'source',
      age: '22',
      gender: '0', //0男，1女
      city: '四川-成都',  //常住城市
      weight: '50',  //体重
    }
  }
}
```

