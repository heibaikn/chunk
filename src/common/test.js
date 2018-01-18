const CONST_HEADER = () => ({
  userKey: localStorage.getItem('userKey') || '',
  version: '1.0.0',
  signature: 'rayvision2017',
  platform: localStorage.getItem('platform') || 2,
  channel: 2,
  languageFlag: localStorage.getItem('languageFlag') || 0,
});

// console.log(CONST_HEADER());

var xhr = new XMLHttpRequest();
xhr.open("psot", "/api/rendering/user/loadLanguagePack", true);		//open() 提交数据 
let Headers=CONST_HEADER();
console.log(Headers);
Object.keys(Headers).forEach((v) => {
  xhr.setRequestHeader(v,Headers[v])
  
});

xhr.send();
xhr.onreadystatechange = function () {
  // 保证服务器端响应的数据发送完毕
  if (xhr.readyState == 4) {
    // 保证这次请求必须是成功的
    if (xhr.status == 200) {
      // 接收服务器端的数据
      var json = xhr.responseText;//获取数据 json格式的字符串
      // console.log(json);
      /*
       * 使用eval()函数进行转换
       * * 使用"()"将其包裹,eval()函数强制将其转换为JSON格式(javascript代码)
       * * 不使用"()"将其包裹,eval()函数将其识别为一个空的代码块
       */
      var data = eval("(" + json + ")");//
      console.log(data);
    }
  }
}

console.log(123);