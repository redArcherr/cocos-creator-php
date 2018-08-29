<?php
/**
 * 微信登陆获取信息.
 * User: 红A
 * Date: 2018/8/28
 * Time: 11:31
 */
header('Access-Control-Allow-Origin: *');
header("Content-type: text/html; charset=utf-8");
$appid='wxfc3e9bc10f9226ea';
$secret='70e1beee32d698127aad4c699552ef33';
$gameUrl='http://wx.bjhci.cn/wx_userinfo/index.html';

if(isset($_GET['code'])){
    $code=$_GET['code'];
    $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$secret.'&code='.$code.'&grant_type=authorization_code';
    $json = file_get_contents($url);
    $arr = json_decode($json,true);
    $access_token = $arr['access_token'];
    $refresh_token =$arr['refresh_token'];
    $openid = $arr['openid'];
    $dataUrl='https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN';
    $dataJson=file_get_contents($dataUrl);
    $arrData = json_decode($dataJson,true);
    $nickName = $arrData['nickname'];
    $headimgurl = $arrData['headimgurl'];
    $sex=$arrData['sex'];
    //echo $openid.'</br>'.$nickName.'</br>'.$headimgurl.'</br>'.$sex;
    header('location:'.$gameUrl.'?openid='.$openid.'&nickName='.$nickName.'&headimgurl='.$headimgurl);
    //header('location:'.$gameUrl);
}else{
    $redirect_uri = 'http://wx.bjhci.cn/wx_openid.php';
    $url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$appid.'&redirect_uri='.$redirect_uri.'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
    header('location:'.$url);
}