/**
 * Created by lsy on 2018/8/9.
 */
import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiSkin = 'https://helloskin.club/'
// const apiSkin = 'http://localhost:8080/'

//获取用户第一次提交的信息
const getCustomerFirstInfo = (params) => wxRequest(params, apiSkin + 'api/consult/list/get');
