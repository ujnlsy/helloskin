/**
 * Created by lsy on 2018/8/9.
 */
import {
  wxRequest
} from '../utils/wxRequest';

const env = "test" //dev 或者 test
//const apiSkin = 'https://helloskin.club/'
const apiSkin = 'http://localhost:9006/'

//登录请求
const Login = (params) => wxRequest(params, apiSkin + 'api/login')
//获取用户第一次提交的信息
const getCustomerFirstInfo = (params) => wxRequest(params, apiSkin + 'api/consult/list/get');
//获取用户基本信息
const getCustomerBase = (params) => wxRequest(params, apiSkin + 'api/customer/base/get')
//获取用户皮肤档案
const getSkinDocHisList = (params) => wxRequest(params, apiSkin + 'api/skinDoc/hisList/get')

export default {
  Login,
  getCustomerFirstInfo,
  getCustomerBase,
  getSkinDocHisList
}
