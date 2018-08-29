# cocos creator+php获取微信用户信息

1、ccc端负责获取get参数，并显示。util.js脚本封装了get参数的方法，在其他脚本中引入并调用即可。
2、php端负责获取微信用户信息，配置好微信公众号环境后，填入公众号的appid和sercet，首先获取code，之后用code获取token和opanid，之后就可以拉取用户信息了
