/*
包含n个接口请求函数
与后台交互模块
*/
import ajax from './ajax'
//1、获取地址信息（根据经纬度串）
export const reqAddress=geohash=>('/ajax/position/'+geohash)
//2、获 取 msite页 面 食 品 分 类 列 表
export const reqFoodCategorys=()=>ajax('/api/index_category')
//3、获 取 msite商 铺 列 表 ( 根 据 经 纬 度 )
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})
//4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
//5、用户密 码 登 录 
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
name,
pwd,
captcha
},'POSt')
//6、发送 短 信 验 证 码 
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
//7、手 机 号 验 证 码 登 录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
//8、获 取 用 户 信 息 ( 根 据 会 话 )
export const reqUserInfo = () => ajax('/api/userinfo')
//9、用户登出
export const reqLogout = () => ajax('/api/logout')
//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')



