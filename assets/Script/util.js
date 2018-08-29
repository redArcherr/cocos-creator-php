/**
 * 根据键名获取url里面的参数
 * 参数中有中文的时候就会出现乱码的问题。浏览器默认使用的是 encodeURI 对汉字进行的编码 
 * 所以在解码的时候就需要使用decodeURI  而不是 unescape
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

module.exports = {
    getQueryString: getQueryString
}

//改造命名空间方式
// const global={};
// global.getQueryString=function(name){
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) {
//         return decodeURI(r[2]);
//     }
//     return null;
// }
// export default global;