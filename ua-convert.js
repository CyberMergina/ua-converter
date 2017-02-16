//// テスト対象のサンプルプログラム

//// 引数で受け取った文字列をid="message"のエレメントに挿入する関数


function say(s) {
  var str = userAgentChk.init(s);
  $('#message').text(str);
}

function getOS(s) {
  var str = userAgentChk.os(s);
  $('#message').text(str);
}

function getBrowser(s) {
  var str = userAgentChk.browser(s);
  $('#message').text(str);
}

var userAgentChk = (function(){
    function _pc_chk_win(ua){
      /*if (ua.match(/Media Center PC/)) {
        os = "Media Center PC"; // Media Center PC の処理
      }
      else */if (ua.match(/Win(dows )?NT 10\.0/)) {
        os = "Windows 10"; // Windows 10 の処理
      }
      else if (ua.match(/Win(dows )?NT 6\.3/)) {
        os = "Windows 8.1"; // Windows 8.1 の処理
      }
      else if (ua.match(/Win(dows )?NT 6\.2/)) {
        os = "Windows 8"; // Windows 8 の処理
      }
      else if (ua.match(/Win(dows )?NT 6\.1/)) {
        os = "Windows 7"; // Windows 7 の処理
      }
      else if (ua.match(/Win(dows )?NT 6\.0/)) {
        os = "Windows Vista"; // Windows Vista の処理
      }
      else if (ua.match(/Win(dows )?NT 5\.2/)) {
        os = "Windows Server 2003";  // Windows Server 2003 の処理
      }
      else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
        os = "Windows XP"; // Windows XP の処理
      }
      else if (ua.match(/Win(dows)? (9x 4\.90|ME)/)) {
        os = "Windows ME"; // Windows ME の処理
      }
      else if (ua.match(/Win(dows )?(NT 5\.0|2000)/)) {
        os = "Windows 2000"; // Windows 2000 の処理
      }
      else if (ua.match(/Win(dows )?98/)) {
        os = "Windows 98"; // Windows 98 の処理
      }
      else if (ua.match(/Win(dows )?NT( 4\.0)?/)) {
        os = "Windows NT"; // Windows NT の処理
      }
      else if (ua.match(/Win(dows )?95/)) {
        os = "Windows 95"; // Windows 95 の処理
      }

      return os;
    }

    function _pc_chk(ua){
      var os;
      // http://www9.plala.or.jp/oyoyon/html/script/platform.html
      if (ua.match(/Windows/) && !ua.match(/Phone/) && !ua.match(/Xbox/)){
        return _pc_chk_win(ua); // windows pcの場合
      }
      else if (ua.match(/Windows/) && ua.match(/Phone/)) {
        os = "Windows Phone"; // Windows Phone の処理
      }
      else if (ua.match(/Xbox/)) {
        os = "Xbox"; // Xbox の処理
      }
      else if (ua.match(/^.*\s([A-Za-z]+BSD)/)) {
        os = RegExp.$1; // BSD 系の処理
      }
      else if (ua.match(/SunOS/)) {
        os = "Solaris"; // Solaris の処理
      }
      else if (ua.match(/iPhone/)) {
        os = "iPhone"; // iPhone の処理
        if ( ua.match(/iPhone OS/) ) {
          var myKey = "iPhone OS ", myEnd = " like";
          myStart = ua.indexOf( myKey ) + myKey.length;
          myEnd = ua.indexOf( myEnd, myStart );
          os += " (var." + ua.substring( myStart, myEnd ).replace(/_/g, '.') + ")";
        }
      }
      else if (ua.match(/iPad/)) {
        os = "iPad"; // iPad の処理
        if ( ua.match(/ OS/) ) {
          var myKey = " OS ", myEnd = " like";
          myStart = ua.indexOf( myKey ) + myKey.length;
          myEnd = ua.indexOf( myEnd, myStart );
          os += " (var." + ua.substring( myStart, myEnd ).replace(/_/g, '.') + ")";
        }
      }
      else if (ua.match(/iPod/)) {
        os = "iPod"; // iPod の処理
      }
      else if (ua.match(/Mac|PPC/)) {
        os = "Mac OS"; // Macintosh の処理
      }
      else if (ua.match(/Android/)) {
        // os = "Android" + _get_ver(ua.toLowerCase(), 'android ', ';'); // Android の処理
        os = "Android" + _get_android_ver(ua.toLowerCase()) + _get_android(ua); // Android の処理
      }
      else if (ua.match(/Firefox/) && ua.match(/Mobile/) && !ua.match(/Android/)) {
        os = "FireFox Mobile"; // FireFoxOS の処理
      }
      else if (ua.match(/Firefox/) && ua.match(/Tablet/) && !ua.match(/Android/)) {
        os = "FireFox Tablet"; // FireFoxOS の処理
      }
      else if (ua.match(/BlackBerry/) || ( ua.match(/BB10/) && ua.match(/Mobile/))) {
        os = "BlackBerry"; // BlackBerry の処理
      }
      else if (ua.match(/Ubuntu/)) {
        os = "Ubuntu"; // Ubuntu の処理
      }
      else if (ua.match(/Linux Mint/)) {
        os = "Linux Mint"; // Linux Mint の処理
      }
      else if (ua.match(/Fedora/)) {
        os = "Fedora"; // Fedora の処理
      }
      else if (ua.match(/Gentoo/)) {
        os = "Gentoo"; // Gentoo の処理
      }
      else if (ua.match(/Linux/)) {
        os = "Linux"; // Linux の処理
      }
      else {
        os = "unknown"; // 上記以外 OS の処理
      }
      return os;
    }

    // http://www.red.oit-net.jp/tatsuya/java/indexof.htm
    // http://qiita.com/nightyknite/items/b2590a69f2e0135756dc
    function _get_ver(ua, myKey){
      var reg = new RegExp(myKey + "[0-9.]*", "i");
      var str = String(reg.exec(ua));
      return " (var." + str.replace(myKey, "") + ")";
    }

    function _get_android_ver(ua){
      var myKey = "android", myStart, myEnd;
      myStart = ua.indexOf( myKey ) + myKey.length;
      myEnd = ua.indexOf( "; ", myStart );
      return ua.substring( myStart, myEnd );
    }

    function _get_android(ua){
      var terminal = "";
      if (ua.match(/Build/)) {
        var a = ua.substr(0, ua.indexOf(" Build/"));
        while ( a.indexOf(";") > 0 ) {
          a = a.substr(a.indexOf("; ") + 2);
        }
        terminal = " (" + a + ")";
      }
      return terminal;
    }

    function _browser_chk(ua){
      var name = 'unknown', ua = ua.toLowerCase();

      if (ua.indexOf("msie") != -1 ) {
          name = 'IE' + _get_ver(ua, "msie ");
      } else if ( ua.indexOf('sleipnir') != -1){
          name = 'Sleipnir' + _get_ver(ua, "sleipnir\/");
      } else if ( ua.indexOf('lunascape') != -1){
          name = 'Lunascape' + _get_ver(ua, "lunascape\ ");
      } else if ( ua.indexOf('trident/7') != -1){
          var version_a = _get_ver(ua, "rv\:"),
              version_b = _get_ver(ua, "rv\:"),
              version = (version_a.length < version_b.length) ? version_a : version_b;
          name = 'IE' + version;
      } else if (ua.indexOf('edge') != -1 ) {
          name = 'Edge' + _get_ver(ua, "edge\/");
      } else if (ua.indexOf('opera mini') != -1 ) {
          name = 'Opera Mini' + _get_ver(ua, "opera mini\/");
      } else if (ua.indexOf('opera') != -1 ) {
          name = 'Opera' + _get_ver(ua, "opera\/");
      } else if (ua.indexOf('opr') != -1){
          name = 'Opera' + _get_ver(ua, "opr\/");
      } else if (ua.indexOf('vivaldi') != -1){
          name = 'Vivaldi' + _get_ver(ua, "vivaldi\/");
      } else if (ua.indexOf('firefox') != -1){
          name = 'Firefox' + _get_ver(ua, "firefox\/");
      } else if (ua.indexOf('palemoon') != -1){
          name = 'PaleMoon' + _get_ver(ua, "palemoon\/");
      } else if (ua.indexOf('phantomjs') != -1){
          name = 'PhantomJS' + _get_ver(ua, "phantomjs\/");
      } else if (ua.indexOf('jp.co.yahoo.ipn.appli') != -1) {
          name = 'YahooJapanブラウザ' + _get_ver(ua, "jp.co.yahoo.ipn.appli\/");
      } else if (ua.indexOf('jp.co.yahoo.ymail') != -1) {
          name = 'YahooJapanブラウザ' + _get_ver(ua, "jp.co.yahoo.ymail\/");
      } else if (ua.indexOf('chrome') != -1 && ua.indexOf('samsungbrowser') === -1){
          name = 'Chrome' + _get_ver(ua, "chrome\/");
      } else if (ua.indexOf('crios') != -1 && ua.indexOf('samsungbrowser') === -1){
          name = 'Chrome' + _get_ver(ua, "crios\/");
      } else if (ua.indexOf('blackberry') != -1 || ua.indexOf('bb10') != -1){
          name = '標準ブラウザ' + _get_ver(ua, "version\/");
      } else if (ua.indexOf('safari') != -1 && ua.indexOf('android') != -1){
          name = '標準ブラウザ';
      } else if (ua.indexOf('samsungbrowser') != -1 && ua.indexOf('android') != -1){
          name = '標準ブラウザ';
      } else if (ua.indexOf('safari') != -1 && ua.indexOf('android') === -1){
          name = 'Safari' + _get_ver(ua, "version\/");
      } else if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1){ // ブラウザ情報が無いiPhoneの場合はSafariと表記する
          name = 'Safari';
      }
      return name;
    }

    function _bot_chk(ua){
      var name = "bot";
      if ( ua.indexOf("onpagebot") != -1 ) {
        name = "OnPageBot";
      }
      else if ( ua.indexOf("privacyawarebot") != -1 ) {
        name = "PrivacyAwareBot";
      }
      else if ( ua.indexOf("bingpreview") != -1 ) {
        name = "BingPreview";
      }
      else if ( ua.indexOf("google") != -1 ) {
        name = "Google Bot";
        if ( ua.indexOf("adsbot") != -1 ) {
          name += "(adsbot)";
        }
      }
      else if ( ua.indexOf("applebot") != -1 ) {
        name = "Apple Bot";
      }
      return name;
    }

    return {
      init: function(ua){
        ua = ua + ";";
        var lowUa = ua.toLowerCase();
        // bot
        if ( lowUa.match(/bot/) || lowUa.match(/bingpreview/) ) {
          return _bot_chk(lowUa);
        }
        else {
          return _pc_chk(ua) + ", " + _browser_chk(ua);
        }
      },
      pre: function(ua){
        ua = ua + ";";
        return _pc_chk(ua) + "\n" + _browser_chk(ua);
      },
      os: function(ua){
        ua = ua + ";";
        var lowUa = ua.toLowerCase();
        // bot
        if ( lowUa.match(/bot/) || lowUa.match(/bingpreview/) ) {
          return _bot_chk(lowUa);
        }
        else {
          return _pc_chk(ua);
        }
      },
      browser: function(ua){
        ua = ua + ";";
        var lowUa = ua.toLowerCase();
        // bot
        if ( lowUa.match(/bot/) || lowUa.match(/bingpreview/) ) {
          return "";
        }

        return _browser_chk(ua);
      }
    };

}());
