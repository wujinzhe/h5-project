function callNative (methodName, paramMap, cb, flag) {
  var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') !== -1
  // android js bridge
  !(function (undefined) {
    var NAMESPACE = 'iBoxpay'
    var API_NAMESPACE = '__JSBridge__'
    var context = window[NAMESPACE] = {}
    var api = window[API_NAMESPACE] || null
    if (!api) {
      return
    }
    context.require = function (cmd, params, callback) {
      params = params || '{}'
      var result = api.require(cmd, JSON.stringify(params))
    }
  }())
  var callbackName = 'cb' + (new Date().getTime())
  // TODO 閸旂姳绗倀oken
  paramMap == null ? paramMap = {} : paramMap = paramMap
  paramMap['callbackName'] = callbackName
  // paramMap["myCallback"]=cb;
  var strJsonParam = JSON.stringify(paramMap)
  var jsonResp = {}
  window[callbackName] = function (strResp) {
    try {
      jsonResp = typeof strResp === 'string' ? eval(strResp) : strResp
    } catch (err) {}
    cb(jsonResp)
    if (isAndroid) {
      if (flag) {

      } else {
        delete window[callbackName]
      }
    } else {
      document.getElementById('iframe_' + callbackName).remove()
          // $('#iframe_' + callbackName).remove();
    }
  }
  if (isAndroid) {
    try {
      iBoxpay.require(methodName, paramMap, window[callbackName])
    } catch (err) {
      console.log(err)
    }
  } else {
    var src = 'callfunction://' + methodName + '?callback=' + callbackName + '&params=' + strJsonParam
    var ifreame = document.createElement('iframe')
    ifreame.id = 'iframe_' + callbackName
    ifreame.src = src
    ifreame.style.display = 'none'
    document.body.appendChild(ifreame)
    console.log(ifreame)
      // $('<iframe id="iframe_' + callbackName + '"></iframe>').attr('src', src).hide().appendTo(document.body);
  }
}
