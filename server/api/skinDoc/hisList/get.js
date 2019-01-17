/**
 * Created by lsy on 2019/1/16.
 */
let express = require('express');   // 引入express文件
let router = express.Router();      // 创建router实例
let Mock = require('mockjs');       // 引入mockjs模块创建假数据

// 将接口名称命名为lottery.do, 因此在HTML文件中如果需要使用该接口, 那么发送请求的时候就要声明是lottery.do
router.all('/get', function(req, res) {
  let data = {
    code: 0,
    msg: "ok",
    data: {
      records: [
        {
          createdTime: 1533293827000,
          skinSolution: "洗脸",
          medicalSolution: "维胺酯",
          imgs: [
            {url: '/rrr/rrr/r.jpg'},
            {url: '/rrr/rrr/r.jpg'}
          ]
        },
        {
          createdTime: 1533293827000,
          skinSolution: "洗脸",
          medicalSolution: "维胺酯",
          imgs: [
            {url: '/rrr/rrr/r.jpg'},
            {url: '/rrr/rrr/r.jpg'}
          ]
        }
      ]
    }
  }
  res.json(data);
});

module.exports = router;
