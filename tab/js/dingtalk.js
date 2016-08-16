/**
 * Created by liqiao on 12/28/15.
 */
(function(win) {
  'use strict';
  /*瀹㈡埛绔簨浠� */ var EVENTS = [
    'backbutton',
    'online',
    'offline',
    'pause',
    'resume',
    'swipeRefresh' //0.0.5
];
  //鏂规硶鍒楄〃
  var METHODS = [
    'device.notification.alert',
    'device.notification.confirm',
    'device.notification.prompt',
    'device.notification.vibrate',
    'device.accelerometer.watchShake',
    'device.accelerometer.clearShake',
    'biz.util.open',
    'biz.util.openLink',
    'biz.util.share',
    'biz.util.ut',
    'biz.util.datepicker', //android
    'biz.util.timepicker', //android
    'biz.user.get',
    'biz.navigation.setLeft',
    'biz.navigation.setRight',
    'biz.navigation.setTitle',
    'biz.navigation.back',
    // v0.0.1
    'device.notification.toast',
    'device.notification.showPreloader',
    'device.notification.hidePreloader',
    'device.geolocation.get',
    'biz.util.uploadImage',
    'biz.util.previewImage',
    //v0.0.2
  /**
   * ios鏃ユ湡閫夋嫨鍣�   * 'biz.util.textarea' 鏀逛负 ui.input.plain
   **/
    'ui.input.plain',
    'device.notification.actionSheet',
    'biz.util.qrcode',
    'device.connection.getNetworkType',
    'runtime.info',
    //v0.0.3
  /**
   * 鍙戦拤 biz.ding.post
   * 鎵撶數璇�biz.telephone.call
   * 閫夌兢缁�biz.chat.chooseConversation
   **/
    'biz.ding.post',
    'biz.telephone.call',
    'biz.chat.chooseConversation',
    //v0.0.4
  /**
   * 鎷夎捣鑱旂郴浜烘坊鍔犻〉闈�biz.util.open  contactAdd
   * 娑堟伅浼氳瘽+鍙蜂紒涓氱兢鑱婂ぉ biz.contact.createGroup
   * select缁勪欢 biz.util.chosen
   * 鏃ユ湡+鏃堕棿 biz.util.datetimepicker
   **/
    'biz.contact.createGroup',
    //'biz.util.chosen', //鏈塨ug锛�.0.5鐗堝紑鍚�    'biz.util.datetimepicker',
    //v0.0.5
  /**
   * 涓嬫媺缁勪欢iOS bugfix锛屼笂涓�増搴熷純
   * 鑾峰彇閫氱敤鍞竴璇嗗埆鐮�   * 鑾峰彇鐑偣鎺ュ叆淇℃伅
   * 妫�祴搴旂敤鏄惁瀹夎
   * 鍚姩绗笁鏂筧pp
   * 璁剧疆瀵艰埅杩涘害鏉￠鑹�   * 鏂板浜嬩欢 swipeRefresh
   * 璇锋眰鎺堟潈鐮侊紝鍏嶇櫥鏀归�鐢�   * 鍚敤涓嬫媺鍒锋柊鍔熻兘
   * 鏀惰捣涓嬫媺鍒锋柊鎺т欢
   * 绂佺敤涓嬫媺鍒锋柊鍔熻兘
   * 鍚敤webview涓嬫媺寮规�鏁堟灉
   * 绂佺敤webview涓嬫媺寮规�鏁堟灉
   **/
    'biz.util.chosen', //涓嬫媺缁勪欢
    'device.base.getUUID', //鑾峰彇閫氱敤鍞竴璇嗗埆鐮�    'device.base.getInterface', //鑾峰彇鐑偣鎺ュ叆淇℃伅
    'device.launcher.checkInstalledApps', //妫�祴搴旂敤鏄惁瀹夎
    'device.launcher.launchApp', //鍚姩绗笁鏂筧pp

    'ui.progressBar.setColors', //璁剧疆椤堕儴杩涘害鏉￠鑹�    'runtime.permission.requestAuthCode', //璇锋眰鎺堟潈鐮侊紝鍏嶇櫥鏀归�鐢�    'runtime.permission.requestJsApis', //杞昏交jsapi锛岄殣钘忔柟娉曪紝鍙檺sdk鍐呴儴璋冪敤锛孴ODO: 涓婄嚎鏃舵敞閲婃帀

    'ui.pullToRefresh.enable', //鍚敤涓嬫媺鍒锋柊鍔熻兘
    'ui.pullToRefresh.stop', //鏀惰捣涓嬫媺鍒锋柊鎺т欢
    'ui.pullToRefresh.disable', //绂佺敤涓嬫媺鍒锋柊鍔熻兘
    'ui.webViewBounce.enable', //鍚敤webview涓嬫媺寮规�鏁堟灉
    'ui.webViewBounce.disable', //绂佺敤webview涓嬫媺寮规�鏁堟灉

    //v0.0.6
  /**
   * 鑾峰彇浼氳瘽淇℃伅
   * 鍦板浘鎼滅储
   * 鍦板浘瀹氫綅
   * 鎵爜
   * 淇敼浼佷笟閫氳褰曢�浜�   * 浼佷笟閫氳褰曞悓鏃堕�浜猴紝閫夐儴闂�   **/
    'biz.chat.getConversationInfo', //鑾峰彇浼氳瘽淇℃伅
    'biz.map.search', //鍦板浘鎼滅储
    'biz.map.locate', //鍦板浘瀹氫綅
    'biz.util.scan', //鎵爜
    'biz.contact.choose', //淇敼浼佷笟閫氳褰曢�浜�    'biz.contact.complexChoose', //浼佷笟閫氳褰曞悓鏃堕�浜猴紝閫夐儴闂�    'util.localStorage.getItem', //鏈湴瀛樺偍璇�    'util.localStorage.setItem', //鏈湴瀛樺偍鍐�    'util.localStorage.removeItem', //鏈湴瀛樺偍绉婚櫎鎿嶄綔
    'biz.navigation.createEditor', //鍒涘缓閫氱敤缁勪欢
    'biz.navigation.finishEditor', //閿�瘉閫氱敤缁勪欢

    //v0.0.7
  /**
   **/
    'biz.chat.pickConversation', //閫夌兢缁�
    //0.0.8
    'device.notification.modal', //寮规诞灞�    'biz.navigation.setIcon', //璁剧疆瀵艰埅icon
    'biz.navigation.close', //鍏抽棴webview
    'biz.util.uploadImageFromCamera',

    //0.0.9
    'internal.lwp.call',//lwp鎺ュ彛
    //0.1.0
    'device.geolocation.openGps',//鎵撳紑璁剧疆锛屽彧鏈塧ndroid鏈夋晥
    'biz.util.test', //娴嬭瘯鎺ュ彛
    'internal.microapp.checkInstalled',//妫�祴寰簲鐢ㄦ槸鍚﹀畨瑁�    'internal.user.getRole', //鑾峰彇瑙掕壊

    //0.1.1
    'device.notification.extendModal', //璋堝眰锛屾敮鎸佸寮犲浘鐗�    'internal.request.lwp', //lwp閫氶亾
    'biz.user.secretID', //鑾峰彇鐢ㄦ埛鐧诲綍鍞竴鏍囪瘑
    'internal.util.encryData', //鍙傛暟鍔犲瘑鐢熸垚key
    'biz.customContact.choose', //鑷畾涔夐�浜虹粍浠�    'biz.customContact.multipleChoose', //鑷畾涔夐�浜虹粍浠讹紙澶氶�锛�    'biz.util.pageClick', //椤甸潰鎵撶偣

    //0.1.2
    'biz.chat.chooseConversationByCorpId', //閫夋嫨浼佷笟浼氳瘽v2.6鏂板
    'biz.chat.toConversation', //璺宠浆鑷冲搴旂殑浼氳瘽v2.6鏂板
    'biz.chat.open',//鏍规嵁pickConversation鑾峰彇鐨刢id鎵撳紑瀵瑰簲鐨勮亰澶╀細璇�    'device.base.getSettings', //鑾峰彇鎵嬫満璁剧疆寰呭畾
    'internal.log.upload', //涓婁紶鏃ュ織v2.6鏂板

    'biz.navigation.goBack',//nav鍥為�

    //nav瀵艰埅
    'ui.nav.preload',
    'ui.nav.go',
    'ui.nav.recycle',
    'ui.nav.close',
    'ui.nav.getCurrentId',

    //娑堟伅
    'runtime.message.post',
    'runtime.message.fetch',

    'biz.navigation.setMenu',//璁剧疆瀵艰埅鑿滃崟鎸夐挳

    //渚ф媺闈㈡澘
    'ui.drawer.init',
    'ui.drawer.config',
    'ui.drawer.enable',
    'ui.drawer.disable',
    'ui.drawer.open',
    'ui.drawer.close',

    'biz.util.uploadAttachment',
    'biz.cspace.preview',
    'internal.hpm.get',
    'internal.hpm.update',
    'preRelease.appLink.open',
    'internal.request.getSecurityToken', //lwp閫氶亾
    'biz.clipboardData.setData',

    'ui.tab.init',
    'ui.tab.start',
    'ui.tab.select',
    'ui.tab.config'
  ];
  var JSSDK_VERSION = "1.0.0";
  var ua = win.navigator.userAgent;
  var matches = ua.match(/AliApp\(\w+\/([a-zA-Z0-9.-]+)\)/);
  //android鍏煎澶勭悊
  if (matches === null) {
    matches = ua.match(/DingTalk\/([a-zA-Z0-9.-]+)/);
  }
  var version = matches && matches[1];
  var authorised = false; //鏄惁宸叉牎楠岄�杩�  var already = false; //鏄惁宸插垵濮嬪寲
  var config = null; //缂撳瓨config鍙傛暟
  var authMethod = 'runtime.permission.requestJsApis'; //鏉冮檺鏍￠獙鏂规硶鍚�  var errorHandle = null; //缂撳瓨error鍥炶皟
  var bridgeReady = false;
  var dd = {
    ios: (/iPhone|iPad|iPod/i).test(ua),
    android: (/Android/i).test(ua),
    version: version,
    support: version === '1.2.2' || version === '1.3.2',
    ability: '', //绌轰负鍒濆鍊硷紝鍏蜂綋鍊间粠瀹㈡埛绔鍙栵紝鏍煎紡涓簒.x.x
    config: function(obj) {
      //杩欓噷瀵圭敤鎴蜂紶杩涙潵鐨勫弬鏁拌繘琛岃繃婊�  
    	if (!obj) {
        return;
      }
      //TODO: 鍙傛暟鍚嶅緟纭
      config = {
        corpId: obj.corpId,
        appId:obj.appId||-1,
        timeStamp: obj.timeStamp,
        nonceStr: obj.nonceStr,
        signature: obj.signature,
        jsApiList: obj.jsApiList
      };
      if(obj.agentId){
        config.agentId = obj.agentId;
      }
    },
    error: function(fn) {
      errorHandle = fn;
    },
    ready: function(callback) {
      //鎬绘帶
      var fn = function(bridge) {
        if (!bridge) {
          return console.log("bridge鍒濆鍖栧け璐�");
        }
        //callback(bridge);
        //TODO: 鍒ゆ柇config锛岃繘琛屾潈闄愭牎楠�       
        if (config === null||!config.signature) {
          //console.log('娌℃湁閰嶇疆dd.config')
          callback(bridge);
        } else {
          //console.log('閰嶇疆浜哾d.config', config)
          //鏉冮檺鏍￠獙
          if (dd.ios) {
            bridge.callHandler(authMethod, config, function(response) {
              var data = response || {};
              var code = data.errorCode;
              var msg = data.errorMessage || '';
              var result = data.result;
              if (code === '0') {
                callback(bridge);
              } else {
                setTimeout(function() {
                  errorHandle && errorHandle({
                    message: '鏉冮檺鏍￠獙澶辫触 ' + msg,
                    errorCode: 3
                  });
                });
              }
            });
          } else if (dd.android) {
            var arr = authMethod.split('.');
            var suff = arr.pop();
            var pre = arr.join('.');
            bridge(function() {
              callback(bridge);
            }, function(err) {
              setTimeout(function() {
                var msg = err&&err.errorMessage || '';
                errorHandle && errorHandle({
                  message: '鏉冮檺鏍￠獙澶辫触 ' + msg,
                  errorCode: 3
                });
              });
            }, pre, suff, config);
          }
        }
        //callback(bridge);
        //绗竴娆″垵濮嬪寲鍚庤鍋氱殑浜嬫儏
        if (already === false) {
          already = true;
          //鑷畾涔変簨浠�      
          EVENTS.forEach(function(evt) {
            if (dd.ios) {
              bridge.registerHandler(evt, function(data, responseCallback) {
                //console.log('娉ㄥ唽浜嬩欢榛樿鍥炶皟', data, responseCallback);
                var e = document.createEvent('HTMLEvents');
                e.data = data;
                e.initEvent(evt);
                document.dispatchEvent(e);
                responseCallback && responseCallback({
                  errorCode: '0',
                  errorMessage: '鎴愬姛'
                })
              });
            }
          });

          if (config === null) {
            var conf = {
              url: encodeURIComponent(window.location.href),
              js: JSSDK_VERSION,
              cid: config && config.corpId || ''
            };
            //鎵撶偣
            dd.biz.util.ut({
              key: 'dd_open_js_monitor',
              value: JSON.stringify(conf),
              onSuccess: function(res) {
                //console.log('dd_open_js_monitor ut鎵撶偣鎴愬姛', res);
              }
            });
          }
        }
      };
      //宸茬粡瀹屾垚鍒濆鍖栫殑鎯呭喌
      if (dd.ios && win.WebViewJavascriptBridge) {
        //闃叉ready寤惰繜瀵艰嚧鐨勯棶棰�        //init鍚庯紝register鐨勬柟娉曟墠鑳芥敹鍒板洖璋冿紝閲嶇幇鏂规硶锛氶娆¤Е鍙慸d.ready寤舵椂
        try {
          WebViewJavascriptBridge.init(function(data, responseCallback) {
            //瀹㈡埛绔痵end
            //console.log('WebViewJavascriptBridge init: ', data, responseCallback);
          });
        } catch (e) {
          console.log(e.message);
        }
        return fn(WebViewJavascriptBridge);
      } else if (dd.android && win.WebViewJavascriptBridgeAndroid) {
        return fn(WebViewJavascriptBridgeAndroid);
      }
      //鍒濆鍖栦富娴佺▼
      if (dd.ios) {
        //console.log('寮�鐩戝惉WebViewJavascriptBridgeReady浜嬩欢');
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
          if (typeof WebViewJavascriptBridge === 'undefined') {
            return console.log('WebViewJavascriptBridge 鏈畾涔�');
          }
          try {
            WebViewJavascriptBridge.init(function(data, responseCallback) {
              //瀹㈡埛绔痵end
              //console.log('WebViewJavascriptBridge init: ', data, responseCallback);
            });
          } catch (e) {
            console.log(e.message);
          }
          bridgeReady = true;
          fn(WebViewJavascriptBridge);

        }, false);
      } else if (dd.android) {
        var _run = function() {
          try {
            win.WebViewJavascriptBridgeAndroid = win.nuva.require();
            bridgeReady = true;
            fn(WebViewJavascriptBridgeAndroid);
          } catch (e) {
            console.log('window.nuva.require鍑洪敊', e.message);
            fn(null);
          }
        };
        //鍏煎
        if (win.nuva) {
          _run();
        } else {
          document.addEventListener('runtimeready', function() {
            _run();
          }, false);
        }
        //
      } else {
        return console.log('寰堟姳姝夛紝灏氭湭鏀寔鎮ㄦ墍鎸佽澶�');
      }
    },
    type:function(obj){
      //"Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window" ,"Constructor"
      return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];
    },
    //鐗堟湰鍙峰姣旀柟娉曪紝姣斿鍒ゆ柇1.5.0鍜�.11.0鐨勫ぇ灏�  
    /**
     * oldVersion 鑰佺増鏈�     * newVersion 鏂扮増鏈�     * containEqual 鏄惁鍖呭惈鐩哥瓑鐨勬儏鍐�     * result: newVersion >[=] oldVersion
     **/
    compareVersion: function(oldVersion, newVersion, containEqual) {
      if (typeof oldVersion !== 'string' || typeof newVersion !== 'string') {
        return false;
      }
      //鍒嗗壊瀛楃涓蹭负['1', '0', '1']鏍煎紡
      var oldArray = oldVersion.split('.');
      var newArray = newVersion.split('.');
      var o, n;
      //浠庡乏鍚戝彸瀵规瘮鍊硷紝鍊肩浉鍚屽垯璺宠繃锛屼笉鍚屽垯杩斿洖涓嶅悓鐨勫�
      while (o === n && newArray.length > 0) {
        o = oldArray.shift();
        n = newArray.shift();
      }
      //杩斿洖涓嶅悓鍊肩殑姣旇緝缁撴灉
      if (containEqual) {
        return (n | 0) >= (o | 0);
      } else {
        return (n | 0) > (o | 0);
      }
    }
  };
  //娉ㄥ唽鍛藉悕绌洪棿,"device.notification.alert"鐢熸垚dd.device.notification.alert
  var ns = function(method, fn) {
    var arr = method.split('.');
    var namespace = dd;
    for (var i = 0, k = arr.length; i < k; i++) {
      if (i === k - 1) {
        namespace[arr[i]] = fn;
      }
      if (typeof namespace[arr[i]] === 'undefined') {
        namespace[arr[i]] = {};
      }
      namespace = namespace[arr[i]];
    }
  };
  //璁剧疆榛樿灞炴�
  function setDefaultValue(obj, defaults,flag) {
    for (var i in defaults) {
      if(flag){
        obj[i] = defaults[i];
      }else{
        obj[i] = obj[i] !== undefined ? obj[i] : defaults[i];
      }
    }
  }
  //鐢熸垚鍣紝澶勭悊浼犲弬銆佸洖璋冧互鍙婂鐗瑰畾鏂规硶鐗规畩澶勭悊
  function generator(method, param) {
    //闂ㄧ浣嶇疆
    if (typeof WebViewJavascriptBridge === 'undefined') {
      return console.log('WebViewJavascriptBridge鏈畾涔夛紝璇峰湪閽夐拤app鎵撳紑璇ラ〉闈�');
    }
    //寮�骞叉椿
    //console.log('璋冪敤鏂规硶锛�, method, '浼犲弬锛�, param);
    var p = param || {};
    var successCallback = function(res) {
      console.log('榛樿鎴愬姛鍥炶皟', method, res);
    };
    var failCallback = function(err) {
      console.log('榛樿澶辫触鍥炶皟', method, err)
    };
    var cancelCallback = function() {};
    if (p.onSuccess) {
      successCallback = p.onSuccess;
      delete p.onSuccess;
    }
    if (p.onFail) {
      failCallback = p.onFail;
      delete p.onFail;
    }
    if (p.onCancel) {
      cancelCallback = p.onCancel;
      delete p.onCancel;
    }
    //缁熶竴鍥炶皟澶勭悊
    var callback = function(response) {
      //console.log('缁熶竴鍝嶅簲锛�, response);
      var data = response || {};
      var code = data.errorCode;
      var result = data.result;
      if (code === '0') {
        successCallback && successCallback.call(null, result);
      } else if (code === '-1') {
        cancelCallback && cancelCallback.call(null, result);
      } else {
        failCallback && failCallback.call(null, result,code);
      }
    };
    var watch = false; //鏄惁涓虹洃鍚搷浣滐紝 濡傛灉鏄洃鍚搷浣滐紝鍚庨潰瑕佹敞鍐屼簨浠�    //鍓嶇鍖呰
    switch (method) {
      case 'device.notification.alert':
        setDefaultValue(p, {
          title: '',
          buttonName: '纭畾'
        });
        break;
      case 'device.notification.confirm':
      case 'device.notification.prompt':
        setDefaultValue(p, {
          title: '',
          buttonLabels: ['纭畾', '鍙栨秷']
        });
        break;
      case 'device.notification.vibrate':
        setDefaultValue(p, {
          duration: 300
        });
        break;
      //鐩戝惉绫绘柟娉曞姞watch鏍囪锛屽拰iOS瀹㈡埛绔害瀹氶�杩噅s娉ㄥ唽浜嬩欢鐨勬柟寮忓疄鐜�      case 'device.accelerometer.watchShake':
        if (dd.ios) {
          watch = true;
          p.sensitivity = 3.2; //ios璁＄畻鐨勫�鏈夊亸宸紝鐗规畩澶勭悊
        }
        break;
      case 'biz.util.openLink':
        setDefaultValue(p, {
          credible: true,
          showMenuBar: true
        });
        break;
      case 'biz.contact.choose':
        setDefaultValue(p, {
          multiple: true,
          startWithDepartmentId: 0,
          users: [],
          corpId: (config && config.corpId) || ''
        });
        break;
      case 'biz.contact.complexChoose':
        setDefaultValue(p, {
          startWithDepartmentId: 0,
          selectedUsers: [],
          selectedDepartments: [],
          corpId: (config && config.corpId) || ''
        });
        break;
      case 'biz.navigation.setLeft':
      case 'biz.navigation.setRight':
        if (dd.ios) {
          watch = true;
        }
        //榛樿鍊�       
        setDefaultValue(p, {
          show: true,
          control: false,
          showIcon: true,
          text: ''
        });
        break;
      case 'ui.pullToRefresh.enable':
        if (dd.ios) {
          watch = true;
        }
        break;
      case 'device.notification.toast':
        setDefaultValue(p, {
          text: 'toast',
          duration: (dd.android ? ((dd.duration - 3 > 0) + 0) : 3), //android璁惧鍙湁澶т簬3s鍜屽皬浜庣瓑浜�s涓ょ閫夋嫨; iOS榛樿3s
          delay: 0
        });
        break;
      case 'device.notification.showPreloader':
        setDefaultValue(p, {
          text: '鍔犺浇涓�..',
          showIcon: true
        });
        break;
      case 'biz.util.uploadImage':
        setDefaultValue(p, {
          multiple: false
        });
        break;
      case 'biz.util.scan':
        setDefaultValue(p, {
          type: 'qrCode'
        });
        break;
      case 'biz.map.search':
        setDefaultValue(p, {
          scope: 500,
        });
        break;
      case 'biz.util.ut':
        var tempValue = p.value;
        var tempStr=[];
        if(tempValue&&dd.type(tempValue)=='Object'&&window.JSON){
          if(dd.ios){
            tempValue = JSON.stringify(tempValue);
          }else if(dd.android){
            for(var i in tempValue){
              tempStr.push(i+"="+tempValue[i]);
            }
            tempValue = tempStr.join(',');
          }
        }else if(!window.JSON){
          tempValue = '';
        }


        setDefaultValue(p, {
          value: tempValue
        },true);
        break;
      case 'internal.util.encryData':
        var str = p.data;
        var tempStr=[];
        if(dd.type(str)=='Object'){
          for(var i in str){
            tempStr.push(i+"="+str[i]);
          }
          str = tempStr.join('&');
        }
        setDefaultValue(p, {
          data: str
        },true);
        break;
      case 'internal.request.lwp':
        var str = p.body;
        str = JSON.stringify(str);

        setDefaultValue(p, {
          body: str
        },true);
        break;
      case 'biz.navigation.setIcon':
        if (dd.ios) {
          watch = true;
        }
        //榛樿鍊�        
        setDefaultValue(p, {
          showIcon: true,
          iconIndex:'1'
        });
        break;
      case 'biz.customContact.multipleChoose':
      case 'biz.customContact.choose':
        //榛樿鍊�       
setDefaultValue(p, {
          isShowCompanyName: false
        });
        break;
      case 'biz.navigation.setMenu':
        if (dd.ios) {
          watch = true;
        }
        break;
    }

    //娑堟伅鎺ュ叆锛歛ndroid鍜宨OS鍖哄垎澶勭悊
    if (dd.android) {
      var arr = method.split('.');
      var suff = arr.pop();
      var pre = arr.join('.');
      //console.log('Android瀵规帴锛�, pre, suff, p);
      //WebViewJavascriptBridgeAndroid(successCallback, failCallback, pre, suff, p);
      //console.log(successCallback, failCallback, pre, suff, p);

      var params = p || {};
      params.onSuccess = successCallback;
      params.onFail = failCallback;
      try {
        window.nuva.require(pre)[suff](params);
      } catch (e) {
        console.log(e);
      }
    } else if (dd.ios) {
      //console.log(method, p, callback)
      if (watch) {
        WebViewJavascriptBridge.registerHandler(method, function(data, responseCallback) {
          callback({
            errorCode: '0',
            errorMessage: '鎴愬姛',
            result: data
          });
          //鍥炰紶缁欏鎴风锛屽彲閫�        
          responseCallback && responseCallback({
            errorCode: '0',
            errorMessage: '鎴愬姛'
          });
        });
        WebViewJavascriptBridge.callHandler(method, p);
      } else {
        WebViewJavascriptBridge.callHandler(method, p, callback);
      }
    }
  }
  //鍔ㄦ�鐢熸垚api
  METHODS.forEach(function(method) {
    ns(method, function(param) {
      generator(method, param);
    });
  });

  dd.__ns = ns;

  dd.biz.util.pageClick = function(obj){
    var k = 'open_micro_log_record_client';
    var visitTime = +new Date();
    var corpId = obj.corpId;
    var agentId = obj.agentId;
    if(!corpId){
      corpId = (config&&config.corpId)||'';
    }
    if (!agentId) {
      agentId = (config&&config.agentId)||'';
    };

    var defaultObj = {
      visitTime:visitTime,
      clickType:2,
      clickButton:obj.clickButton||'',
      url:location.href,
      corpId:corpId,
      agentId:agentId
    };
    dd.biz.util.ut({
      key:k,
      value:defaultObj
    });
  }

  win.dd = dd;

  //鍥介檯鑼冨効
  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    module.exports = dd;
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function() {
      return dd;
    })
  }
}(this));