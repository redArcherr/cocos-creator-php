//var global=require('./util')//命名空间方式
cc.Class({
    extends: cc.Component,

    properties: {
        openidTxt: {
            default: null,
            type: cc.Label
        },
        nickNameTxt:{
            default:null,
            type:cc.Label
        },
        head:{
            default:null,
            type:cc.Sprite
        }   
    },

    // use this for initialization
    onLoad: function () {
        //定义方法模式
        var GetParam = require('util');
        var openid = GetParam.getQueryString('openid');
        var nickName = GetParam.getQueryString('nickName');
        var headimgurl = GetParam.getQueryString('headimgurl')+'?aa=aa.jpg';
        this.openidTxt.string = '欢迎登录，你的openid是:' + openid;
        this.loadhead(this.head,headimgurl);
        this.nickNameTxt.string=nickName;
        //命名空间模式
        // let name=global.getQueryString('name');
        // this.label.string=name;
    },

    loadhead:function(head,url){
        cc.loader.load(url,function(err,texture){
            if(err){
                cc.log(err);
            }else{
                let spriteFrame=new cc.SpriteFrame(texture);
                head.spriteFrame=spriteFrame;
            }
        });
    }
});
