$(function() {

//// 初期化
chai.should();    // 他のアサーションを使う場合 var expect = chai.expect; または var assert = chai.assert;
mocha.setup('bdd'); // TDDの場合 mocha.setup('tdd');


///// テスト本体
describe('OSのテスト', function() {
  // PC, Win XP, IE8
  it ("Windows XP", function() {
    getOS("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)");
    $('#message').text().should.equal("Windows XP");
  });

  // PC, Win Vista, IE9
  it ("Windows Vista", function() {
    getOS("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)");
    $('#message').text().should.equal("Windows Vista");
  });

  // PC, Win7, Opera
  it ("Windows 7", function() {
    getOS("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41");
    $('#message').text().should.equal("Windows 7");
  });

  // PC, Win8.1, IE11
  it ("Windows 8.1", function() {
    getOS("Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko");
    $('#message').text().should.equal("Windows 8.1");
  });

  // PC, Win10, Edge
  it ("Windows 10", function() {
    getOS("Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393");
    $('#message').text().should.equal("Windows 10");
  });

  // PC, Ubuntu, Edge
  it ("Ubuntu", function() {
    getOS("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:24.0) Gecko/20100101 Firefox/24.0");
    $('#message').text().should.equal("Ubuntu");
  });

  // PC, Linux Mint
  it ("Linux Mint", function() {
    getOS("Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.1) Gecko/20090716 Linux Mint/7 (Gloria) Firefox/3.5.1");
    $('#message').text().should.equal("Linux Mint");
  });

  // PC, Fedora
  it ("Fedora", function() {
    getOS("Mozilla/5.0 (X11; U; Linux i686; fr; rv:1.9.0.10) Gecko/2009042708 Fedora/3.0.10-1.fc10 Firefox/3.0.10");
    $('#message').text().should.equal("Fedora");
  });

  // PC, Gentoo
  it ("Gentoo", function() {
    getOS("Mozilla/5.0 (X11; U; Linux x86_64; de; rv:1.9.0.11) Gecko/2009070611 Gentoo Firefox/3.0.11");
    $('#message').text().should.equal("Gentoo");
  });

  // PC, Xbox
  it ("Xbox", function() {
    getOS("Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)");
    $('#message').text().should.equal("Xbox");
  });

  // Windows 7
  it ("Media Center PC", function() {
    getOS("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)");
    $('#message').text().should.equal("Windows 7");
    // $('#message').text().should.equal("Media Center PC");
  });

  // PC, Mac OS, Safari
  it ("Mac OS", function() {
    getOS("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25");
    $('#message').text().should.equal("Mac OS");
  });

});

describe('ブラウザのテスト', function() {
  // PC, Win7, Opera
  it ("Opera (var.38.0.2220.41)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41");
    $('#message').text().should.equal("Opera (var.38.0.2220.41)");
  });

  // PC, Win7, Chrome
  it ("Chrome (var.51.0.2704.103)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36");
    $('#message').text().should.equal("Chrome (var.51.0.2704.103)");
  });

  // PC, Win7, Firefox
  it ("Firefox (var.47.0)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0");
    $('#message').text().should.equal("Firefox (var.47.0)");
  });

  // PC, Win7, PhantomJS (var.2.1.1)
  it ("PhantomJS (var.2.1.1)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1");
    $('#message').text().should.equal("PhantomJS (var.2.1.1)");
  });

  // PC, Win XP, IE8
  it ("IE (var.8.0)", function() {
    getBrowser("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)");
    $('#message').text().should.equal("IE (var.8.0)");
  });

  // PC, Win vista, IE9
  it ("IE (var.9.0)", function() {
    getBrowser("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)");
    $('#message').text().should.equal("IE (var.9.0)");
  });

  // PC, Win7, IE10
  it ("IE (var.10.0)", function() {
    getBrowser("Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)");
    $('#message').text().should.equal("IE (var.10.0)");
  });

  // PC, Win8.1, IE11
  it ("IE (var.11.0)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko");
    $('#message').text().should.equal("IE (var.11.0)");
  });

  // PC, Win8.1, IE11
  it ("IE (var.11.0)", function() {
    getBrowser("Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 1320) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537");
    $('#message').text().should.equal("IE (var.11.0)");
  });

  // PC, Win8.1, Edge
  it ("Edge (var.14.14393)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393");
    $('#message').text().should.equal("Edge (var.14.14393)");
  });

  // PC, Mac OS X, Safari
  it ("Safari (var.6.0)", function() {
    getBrowser("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25");
    $('#message').text().should.equal("Safari (var.6.0)");
  });

  // PC, Win8.1, Vivaldi
  it ("Vivaldi (var.1.2.490.43)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36 Vivaldi/1.2.490.43");
    $('#message').text().should.equal("Vivaldi (var.1.2.490.43)");
  });

  // PC, Win8.1, Sleipnir
  it ("Sleipnir (var.4.5.0)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0; Sleipnir/4.5.0) like Gecko");
    $('#message').text().should.equal("Sleipnir (var.4.5.0)");
  });

  // PC, Win8.1, Lunascape
  it ("Lunascape (var.6.14.0.27546)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0; Lunascape 6.14.0.27546) like Gecko");
    $('#message').text().should.equal("Lunascape (var.6.14.0.27546)");
  });

  // PC, Win8.1, PaleMoon
  it ("PaleMoon (var.26.3.3)", function() {
    getBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:2.1) Gecko/20100101 Goanna/20160629 PaleMoon/26.3.3");
    $('#message').text().should.equal("PaleMoon (var.26.3.3)");
  });
});

describe('スマートフォンのテスト', function(){
  // Android 2.3.7 (SonyEricssonSO-03D)
  it ("Android 2.3.7 (SonyEricssonSO-03D)", function() {
    getOS("Mozilla/5.0 (Linux; U; Android 2.3.7; ja-jp; SonyEricssonSO-03D Build/6.0.A.5.12) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1");
    $('#message').text().should.equal("Android 2.3.7 (SonyEricssonSO-03D)");
  });

  // Android 4.0.3 (Sony Tablet S)
  it ("Android 4.0.3 (Sony Tablet S)", function() {
    getOS("Mozilla/5.0 (Linux; U; Android 4.0.3; ja-jp; Sony Tablet S Build/TISU0143) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30");
    $('#message').text().should.equal("Android 4.0.3 (Sony Tablet S)");
  });

  // Android 4.1.2 (SonySOL21)
  it ("Android 4.1.2 (SonySOL21)", function() {
    getOS("Mozilla/5.0 (Linux; U; Android 4.1.2; ja-jp; SonySOL21 Build/9.1.D.0.395) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");
    $('#message').text().should.equal("Android 4.1.2 (SonySOL21)");
  });

  // Android 5.0.2 (LGT01)
  it('Android 5.0.2 (LGT01)', function(){
    getOS("Mozilla/5.0 (Linux; Android 5.0.2; LGT01 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.89 Safari/537.36");
    $('#message').text().should.equal("Android 5.0.2 (LGT01)");
  });

  // Android 5.1 (KYV35)
  it('Android 5.1 (KYV35)', function(){
    getOS("Mozilla/5.0 (Linux; Android 5.1; KYV35 Build/xxxx) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36");
    $('#message').text().should.equal("Android 5.1 (KYV35)");
  });

  // Android 6.0.1 (SC-05G)
  it ("Android 6.0.1 (SC-05G)", function() {
    getOS("Mozilla/5.0 (Linux; Android 6.0.1; SC-05G Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.91 Mobile Safari/537.36");
    $('#message').text().should.equal("Android 6.0.1 (SC-05G)");
  });

  // Firefox Mobile (var.32.0)
  it ("FireFox Mobile", function() {
    getOS("Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0");
    $('#message').text().should.equal("FireFox Mobile");
  });

  // Firefox Tablet
  it ("FireFox Tablet", function() {
    getOS("Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0");
    $('#message').text().should.equal("FireFox Tablet");
  });

  // iPhone
  it ("iPhone", function() {
    getOS("Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3");
    $('#message').text().should.equal("iPhone");
  });

  // iPhone (var.2.0)
  it ("iPhone (var.2.0)", function() {
    getOS("Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; ja-jp) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/52");
    $('#message').text().should.equal("iPhone (var.2.0)");
  });

  // iPhone (var.3.1.3)
  it ("iPhone (var.3.1.3)", function() {
    getOS("Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_3 like Mac OS X; ja-jp) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7E18 Safari/528.16");
    $('#message').text().should.equal("iPhone (var.3.1.3)");
  });

  // iPhone (var.4.2.1)
  it ("iPhone (var.4.2.1)", function() {
    getOS("Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5");
    $('#message').text().should.equal("iPhone (var.4.2.1)");
  });

  // iPhone (var.5.0)
  it ("iPhone (var.5.0)", function() {
    getOS("Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A334 Safari/7534.48.3");
    $('#message').text().should.equal("iPhone (var.5.0)");
  });

  // iPhone (var.6.0)
  it ("iPhone (var.6.0)", function() {
    getOS("Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
    $('#message').text().should.equal("iPhone (var.6.0)");
  });

  // bot:BingPreview
  it ("bot:BingPreview", function() {
    getOS("Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 BingPreview/1.0b");
    $('#message').text().should.equal("BingPreview");
  });

  // iPhone (var.8.3)
  it ("iPhone (var.8.3)", function() {
    getOS("Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/8.0 Mobile/12F70 Safari/600.1.4");
    $('#message').text().should.equal("iPhone (var.8.3)");
  });

  // iPhone (var.9.0)
  it ("iPhone (var.9.0)", function() {
    getOS("Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1");
    $('#message').text().should.equal("iPhone (var.9.0)");
  });

  // iPhone (var.10.1.1)
  it ("iPhone (var.10.1.1)", function() {
    getOS("Mozilla/5.0 (iPhone; CPU iPhone OS 10_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/20.3.136880903 Mobile/14B100 Safari/600.1.4");
    $('#message').text().should.equal("iPhone (var.10.1.1)");
  });

  // iPad (var.8.1.3)
  it ("iPad (var.8.1.3)", function() {
    getOS("Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4");
    $('#message').text().should.equal("iPad (var.8.1.3)");
  });

  // iPad (var.9.0)
  it ("iPad (var.9.0)", function() {
    getOS("Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1");
    $('#message').text().should.equal("iPad (var.9.0)");
  });

  // BlackBerry
  it ("BlackBerry", function() {
    getOS("Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+");
    $('#message').text().should.equal("BlackBerry");
  });
});

describe('Botのテスト', function(){
  // AdsBot-Google
  it ("bot:AdsBot-Google", function() {
    say("AdsBot-Google (+http://www.google.com/adsbot.html)");
    $('#message').text().should.equal("Google Bot(adsbot)");
  });

  // Google Bot
  it ("bot:Google", function() {
    say("Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    $('#message').text().should.equal("Google Bot");
  });

  // PrivacyAwareBot
  it ("PrivacyAwareBot", function() {
    say("Mozilla/5.0 (compatible; PrivacyAwareBot/1.1; +http://www.privacyaware.org)");
    $('#message').text().should.equal("PrivacyAwareBot");
  });

  // bot:Google
  it ("bot:Google", function() {
    say("Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    $('#message').text().should.equal("Google Bot");
  });

  // bot:Google
  it ("bot:Google", function() {
    say("Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    $('#message').text().should.equal("Google Bot");
  });

  // Applebot
  it ("bot:Apple", function() {
    say("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1; +http://www.apple.com/go/applebot)");
    $('#message').text().should.equal("Apple Bot");
  });

  // Googlebot
  it ("bot:Google", function() {
    say("Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview Analytics) Chrome/27.0.1453 Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    $('#message').text().should.equal("Google Bot");
  });

  // OnPageBot
  it ("bot:OnPageBot", function() {
    say("OnPageBot (compatible; Googlebot 2.1; +https://bot.onpage.org/)");
    $('#message').text().should.equal("OnPageBot");
  });

  // bot
  it ("bot:Googlebot", function() {
    say("Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Safari/537.36");
    $('#message').text().should.equal("Google Bot");
  });

  // bot
  it ("bot:BingPreview", function() {
    say("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b");
    $('#message').text().should.equal("BingPreview");
  });
});

describe('組み合わせのテスト', function(){
  // Android 2.3.7 (SonyEricssonSO-03D)
  it ("Android 2.3.7 (SonyEricssonSO-03D)", function() {
    say("Mozilla/5.0 (Linux; U; Android 2.3.7; ja-jp; SonyEricssonSO-03D Build/6.0.A.5.12) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1");
    $('#message').text().should.equal("Android 2.3.7 (SonyEricssonSO-03D), 標準ブラウザ");
  });

  // Windows7, Opera (var.34.0.2036.47)
  it ("Windows 7, Opera (var.34.0.2036.47)", function() {
    say("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 OPR/34.0.2036.47");
    $('#message').text().should.equal("Windows 7, Opera (var.34.0.2036.47)");
  });

  // Windows7, Chrome (var.47.0.2526.111)
  it ("Windows 7, Chrome (var.47.0.2526.111)", function() {
    say("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36");
    $('#message').text().should.equal("Windows 7, Chrome (var.47.0.2526.111)");
  });

  // Windows7, PhantomJS (var.2.1.1)
  it ("Windows 7, PhantomJS (var.2.1.1)", function() {
    say("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1");
    $('#message').text().should.equal("Windows 7, PhantomJS (var.2.1.1)");
  });

  // Windows 10, IE (var.11.0)
  it ("Windows 10, IE (var.11.0)", function() {
    say("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko");
    $('#message').text().should.equal("Windows 10, IE (var.11.0)");
  });

  // Windows 10, Firefox (var.42.0)
  it ("Windows 10, Firefox (var.42.0)", function() {
    say("Mozilla/5.0 (Windows NT 10.0; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0");
    $('#message').text().should.equal("Windows 10, Firefox (var.42.0)");
  });

  // Windows 10, Edge (var.13.10586)
  it ("Windows 10, Edge (var.13.10586)", function() {
    say("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586");
    $('#message').text().should.equal("Windows 10, Edge (var.13.10586)");
  });

  // Mac OS, Chrome (var.41.0.2272.118)
  it ("Mac OS, Chrome (var.41.0.2272.118)", function() {
    say("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36");
    $('#message').text().should.equal("Mac OS, Chrome (var.41.0.2272.118)");
  });

  // iPad (var.9.2.1), Safari (var.9.0)
  it ("iPad (var.9.2.1), Safari (var.9.0)", function() {
    say("Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1");
    $('#message').text().should.equal("iPad (var.9.2.1), Safari (var.9.0)");
  });

  // Windows 8.1, Chrome (var.48.0.2564.97)
  it ("Windows 8.1, Chrome (var.48.0.2564.97)", function() {
    say("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.97 Safari/537.36");
    $('#message').text().should.equal("Windows 8.1, Chrome (var.48.0.2564.97)");
  });

  // iPhone (var.7.0), Safari (var.7.0)
  it ("bot:BingPreview", function() {
    say("Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 BingPreview/1.0b");
    $('#message').text().should.equal("BingPreview");
  });

  // Android 4.4.2 (SH-06F), Chrome (var.30.0.0.0)
  it ("Android 4.4.2 (SH-06F), Chrome (var.30.0.0.0)", function() {
    say("Mozilla/5.0 (Linux; Android 4.4.2; SH-06F Build/S4140) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36");
    $('#message').text().should.equal("Android 4.4.2 (SH-06F), Chrome (var.30.0.0.0)");
  });

  // Android 4.4.2 (SH-06F), Chrome (var.30.0.0.0)
  it ("Android 4.4.2 (SH-06F), Chrome (var.30.0.0.0)", function() {
    say("Mozilla/5.0 (Linux; Android 4.4.2; SH-06F Build/S4140) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36");
    $('#message').text().should.equal("Android 4.4.2 (SH-06F), Chrome (var.30.0.0.0)");
  });

  // Android 6.0.1 (SC-04G), Sleipnir (var.3.5.4)
  it ("Android 6.0.1 (SC-04G), Sleipnir (var.3.5.4)", function() {
    say("Mozilla/5.0 (Linux; Android 6.0.1; SC-04G Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/50.0.2661.86 Mobile Safari/537.36 Sleipnir/3.5.4");
    $('#message').text().should.equal("Android 6.0.1 (SC-04G), Sleipnir (var.3.5.4)");
  });

  // Android 6.0.1 (SC-04G), 標準ブラウザ (var4.0)
  it ("Android 6.0.1 (SC-04G), 標準ブラウザ (var4.0)", function() {
    say("Mozilla/5.0 (Linux; Android 6.0.1; SC-04G Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36");
    $('#message').text().should.equal("Android 6.0.1 (SC-04G), 標準ブラウザ");
  });

  // Windows 7, IE (var.9.0)
  it ("Windows 7, IE (var.9.0)", function() {
    say("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)");
    $('#message').text().should.equal("Windows 7, IE (var.9.0)");
    // $('#message').text().should.equal("Media Center PC, IE (var.9.0)");
  });

  // iPhone (var.9.2.1), YahooJapanブラウザ (var.4.4.4)
  it ("iPhone (var.9.2.1), YahooJapanブラウザ (var.4.4.4)", function() {
    say("Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 YJApp-IOS jp.co.yahoo.ipn.appli/4.4.4");
    $('#message').text().should.equal("iPhone (var.9.2.1), YahooJapanブラウザ (var.4.4.4)");
  });

  // iPhone (var.9.3.2), YahooJapanブラウザ (var.3.8.0)
  it ("iPhone (var.9.3.2), YahooJapanブラウザ (var.3.8.0)", function() {
    say("Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 YJApp-IOS jp.co.yahoo.ymail/3.8.0");
    $('#message').text().should.equal("iPhone (var.9.3.2), YahooJapanブラウザ (var.3.8.0)");
  });

  // iPhone (var.6.1.4), Safari
  it ("iPhone (var.6.1.4), Safari (var.4.4.4)", function() {
    say("Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B350");
    $('#message').text().should.equal("iPhone (var.6.1.4), Safari");
  });

  // iPad (var.9.3.2), Chrome (var.51.0.2704.104)
  it ("iPad (var.9.3.2), Chrome (var.51.0.2704.104)", function() {
    say("Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/51.0.2704.104 Mobile/13F69 Safari/601.1.46");
    $('#message').text().should.equal("iPad (var.9.3.2), Chrome (var.51.0.2704.104)");
  });

  // BlackBerry, 標準ブラウザ (var.7.1.0.74)
  it ("BlackBerry, 標準ブラウザ (var.7.1.0.74)", function() {
    say("Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; ja) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.74 Mobile Safari/534.11+");
    $('#message').text().should.equal("BlackBerry, 標準ブラウザ (var.7.1.0.74)");
  });

  // BlackBerry, Opera Mini (var.6.1.25376/26.958)
  it ("BlackBerry, Opera Mini (var.6.1.25376/26.958)", function() {
    say("Opera/9.80 (BlackBerry; Opera Mini/6.1.25376/26.958; U; en) Presto/2.8.119 Version/10.54");
    $('#message').text().should.equal("BlackBerry, Opera Mini (var.6.1.25376)");
  });

});


//// テストの出力をウィンドウっぽく表示 (不要であればコメントアウト)
$('#mocha')
.css({
  position: 'absolute',
  top: 10,
  right: 20,
  width: 500,
  bottom: 20,
  margin: 0,
  paddingTop: 50,
  overflow: 'scroll',
  backgroundColor: '#ddd',
  boxShadow: '8px 8px 8px rgba(0,0,0,0.3)',
  zIndex: 1000
})
setTimeout(function() {
  $('#mocha-stats')
  .css({
    position: 'absolute',
    top: 5,
    left: 2,
    width: 400,
    height: 40,
    backgroundColor: '#ddd',
    zIndex: 1000
  });
}, 100);

//// テスト実行
mocha.run();

});
