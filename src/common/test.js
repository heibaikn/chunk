// 定义创建XMLHttpRequest对象的函数
function getXhr() {
  // 声明XMLHttpRequest对象
  var xhr;
  // 根据不同浏览器创建
  if (window.XMLHttpRequest) {
    // 其他浏览器
    xhr = new XMLHttpRequest();
  } else {
    // IE浏览器(8及之前)
    xhr = new ActiveXObject("Microsoft.XMLHttp");
  }
  // 返回XMLHttpRequest对象
  return xhr;
}

var xhr = getXhr();
xhr.open("get", "/api/rendering/user/loadLanguagePack", true);		//open() 提交数据 
xhr.send();
xhr.onreadystatechange = function () {
  // 保证服务器端响应的数据发送完毕
  if (xhr.readyState == 4) {
    // 保证这次请求必须是成功的
    if (xhr.status == 200) {
      // 接收服务器端的数据
      var json = xhr.responseText;//获取数据 json格式的字符串
      console.log(json);
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