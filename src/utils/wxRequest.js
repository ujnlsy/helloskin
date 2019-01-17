/**
 * Created by lsy on 2018/6/11.
 */
import wepy from 'wepy';
// import util from './util';
// import md5 from './md5';
import tip from './tip'

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

// const wxRequest = async(params = {}, url) => {
//   tip.loading();
//   let data = params.query || {};
//   // data.sign = SIGN;
//   // data.time = TIMESTAMP;
//   let res = await wepy.request({
//     url: url,
//     method: params.method || 'GET',
//     data: data,
//     header: { 'Content-Type': 'application/json' },
//   });
//   tip.loaded();
//   console.log('wxR',res)
//   return res;
// };

const wxRequest = function (params = {}, url) {
  let data = params.query || {};
  let userToken = wx.getStorageSync('userToken')
  const promise = new Promise((resolve,reject)=>{
    wx.request({
      url:url,
      data:data,
      mehtod:params.method || 'GET',
      header: {
        'content-type': 'application/json',
        'userToken': "" + userToken
      },
      success:function(res){
        resolve(res)
      },
      fail:function(res){
        reject(res);
      },
      complete:function(){
        console.log('complete');
      }
    })
  })
  
  return promise
}


module.exports = {
  wxRequest
}
