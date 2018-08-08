(function () {
  function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }
  var urlWebview = getQueryString('_webHeader_')
  // var ssWebview = sessionStorage.getItem('_webHeader_')
  // var urlWebview = true,
  //   ssWebview = true
  if (urlWebview === null || urlWebview === '0') {
    var pageTitle = document.title
    var docBody = document.body
    var headWrap = document.createElement('div')
    headWrap.innerHTML = '<header class="bar bar-nav"> \
      <a href="javascript:history.back()" class="icon icon-back"> \
      <i class="iconfont">&#xe608;</i> \
      </a> \
      <a href="javascript:close1()" class="icon icon-close"> \
      <i class="iconfont">&#xe644;</i> \
      </a> \
      <h1 class="title">' + pageTitle + '</h1></header>'

    docBody.insertBefore(headWrap.lastElementChild, docBody.childNodes[0])
  }
})()
function close1 () {
  callNative('exit', '', function (resp) {})
}
