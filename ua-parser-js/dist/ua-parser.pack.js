/*!
 * UAParser.js v0.7.23
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!(function (i, s) {
  'use strict'
  var e = '0.7.23',
    o = '',
    r = '?',
    a = 'function',
    n = 'undefined',
    d = 'object',
    t = 'string',
    w = 'major',
    l = 'model',
    u = 'name',
    c = 'type',
    b = 'vendor',
    m = 'version',
    p = 'architecture',
    f = 'console',
    g = 'mobile',
    h = 'tablet',
    v = 'smarttv',
    x = 'wearable',
    k = 'embedded',
    y = {
      extend: function (i, s) {
        var e = {}
        for (var o in i)
          s[o] && s[o].length % 2 === 0
            ? (e[o] = s[o].concat(i[o]))
            : (e[o] = i[o])
        return e
      },
      has: function (i, s) {
        return (
          'string' == typeof i &&
          s.toLowerCase().indexOf(i.toLowerCase()) !== -1
        )
      },
      lowerize: function (i) {
        return i.toLowerCase()
      },
      major: function (i) {
        return typeof i === t
          ? i.replace(/[^\d\.]/g, '').split('.')[0]
          : s
      },
      trim: function (i) {
        return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      },
    },
    T = {
      rgx: function (i, e) {
        for (var o, r, n, t, w, l, u = 0; u < e.length && !w; ) {
          var c = e[u],
            b = e[u + 1]
          for (o = r = 0; o < c.length && !w; )
            if ((w = c[o++].exec(i)))
              for (n = 0; n < b.length; n++)
                (l = w[++r]),
                  (t = b[n]),
                  typeof t === d && t.length > 0
                    ? 2 == t.length
                      ? typeof t[1] == a
                        ? (this[t[0]] = t[1].call(this, l))
                        : (this[t[0]] = t[1])
                      : 3 == t.length
                      ? typeof t[1] !== a || (t[1].exec && t[1].test)
                        ? (this[t[0]] = l ? l.replace(t[1], t[2]) : s)
                        : (this[t[0]] = l
                            ? t[1].call(this, l, t[2])
                            : s)
                      : 4 == t.length &&
                        (this[t[0]] = l
                          ? t[3].call(this, l.replace(t[1], t[2]))
                          : s)
                    : (this[t] = l ? l : s)
          u += 2
        }
      },
      str: function (i, e) {
        for (var o in e)
          if (typeof e[o] === d && e[o].length > 0) {
            for (var a = 0; a < e[o].length; a++)
              if (y.has(e[o][a], i)) return o === r ? s : o
          } else if (y.has(e[o], i)) return o === r ? s : o
        return i
      },
    },
    A = {
      browser: {
        oldsafari: {
          version: {
            '1.0': '/8',
            1.2: '/1',
            1.3: '/3',
            '2.0': '/412',
            '2.0.2': '/416',
            '2.0.3': '/417',
            '2.0.4': '/419',
            '?': '/',
          },
        },
      },
      device: {
        amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
        sprint: {
          model: { 'Evo Shift 4G': '7373KT' },
          vendor: { HTC: 'APA', Sprint: 'Sprint' },
        },
      },
      os: {
        windows: {
          version: {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2000: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM',
          },
        },
      },
    },
    S = {
      browser: [
        [
          /(opera\smini)\/([\w\.-]+)/i,
          /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,
          /(opera).+version\/([\w\.]+)/i,
          /(opera)[\/\s]+([\w\.]+)/i,
        ],
        [u, m],
        [/(opios)[\/\s]+([\w\.]+)/i],
        [[u, 'Opera Mini'], m],
        [/\s(opr)\/([\w\.]+)/i],
        [[u, 'Opera'], m],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
          /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
          /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
          /(?:ms|\()(ie)\s([\w\.]+)/i,
          /(rekonq)\/([\w\.]*)/i,
          /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
        ],
        [u, m],
        [/(konqueror)\/([\w\.]+)/i],
        [[u, 'Konqueror'], m],
        [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
        [[u, 'IE'], m],
        [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
        [[u, 'Edge'], m],
        [/(yabrowser)\/([\w\.]+)/i],
        [[u, 'Yandex'], m],
        [/(Avast)\/([\w\.]+)/i],
        [[u, 'Avast Secure Browser'], m],
        [/(AVG)\/([\w\.]+)/i],
        [[u, 'AVG Secure Browser'], m],
        [/(puffin)\/([\w\.]+)/i],
        [[u, 'Puffin'], m],
        [/(focus)\/([\w\.]+)/i],
        [[u, 'Firefox Focus'], m],
        [/(opt)\/([\w\.]+)/i],
        [[u, 'Opera Touch'], m],
        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
        [[u, 'UCBrowser'], m],
        [/(comodo_dragon)\/([\w\.]+)/i],
        [[u, /_/g, ' '], m],
        [/(windowswechat qbcore)\/([\w\.]+)/i],
        [[u, 'WeChat(Win) Desktop'], m],
        [/(micromessenger)\/([\w\.]+)/i],
        [[u, 'WeChat'], m],
        [/(brave)\/([\w\.]+)/i],
        [[u, 'Brave'], m],
        [/(whale)\/([\w\.]+)/i],
        [[u, 'Whale'], m],
        [/(qqbrowserlite)\/([\w\.]+)/i],
        [u, m],
        [/(QQ)\/([\d\.]+)/i],
        [u, m],
        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
        [u, m],
        [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
        [u, m],
        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
        [u, m],
        [/(MetaSr)[\/\s]?([\w\.]+)/i],
        [u],
        [/(LBBROWSER)/i],
        [u],
        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
        [m, [u, 'MIUI Browser']],
        [/;fbav\/([\w\.]+);/i],
        [m, [u, 'Facebook']],
        [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
        [[u, 'Facebook']],
        [
          /safari\s(line)\/([\w\.]+)/i,
          /android.+(line)\/([\w\.]+)\/iab/i,
        ],
        [u, m],
        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
        [m, [u, 'Chrome Headless']],
        [/\swv\).+(chrome)\/([\w\.]+)/i],
        [[u, /(.+)/, '$1 WebView'], m],
        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
        [[u, /(.+(?:g|us))(.+)/, '$1 $2'], m],
        [
          /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i,
        ],
        [m, [u, 'Android Browser']],
        [/(sailfishbrowser)\/([\w\.]+)/i],
        [[u, 'Sailfish Browser'], m],
        [
          /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
        ],
        [u, m],
        [/(dolfin)\/([\w\.]+)/i],
        [[u, 'Dolphin'], m],
        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
        [[u, '360 Browser']],
        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
        [[u, 'Chrome'], m],
        [/(coast)\/([\w\.]+)/i],
        [[u, 'Opera Coast'], m],
        [/fxios\/([\w\.-]+)/i],
        [m, [u, 'Firefox']],
        [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
        [m, [u, 'Mobile Safari']],
        [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
        [m, u],
        [
          /webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i,
        ],
        [[u, 'GSA'], m],
        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [u, [m, T.str, A.browser.oldsafari.version]],
        [/(webkit|khtml)\/([\w\.]+)/i],
        [u, m],
        [/(navigator|netscape)\/([\w\.-]+)/i],
        [[u, 'Netscape'], m],
        [
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
          /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
          /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
          /(links)\s\(([\w\.]+)/i,
          /(gobrowser)\/?([\w\.]*)/i,
          /(ice\s?browser)\/v?([\w\._]+)/i,
          /(mosaic)[\/\s]([\w\.]+)/i,
        ],
        [u, m],
      ],
      cpu: [
        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
        [[p, 'amd64']],
        [/(ia32(?=;))/i],
        [[p, y.lowerize]],
        [/((?:i[346]|x)86)[;\)]/i],
        [[p, 'ia32']],
        [/windows\s(ce|mobile);\sppc;/i],
        [[p, 'arm']],
        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
        [[p, /ower/, '', y.lowerize]],
        [/(sun4\w)[;\)]/i],
        [[p, 'sparc']],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
        ],
        [[p, y.lowerize]],
      ],
      device: [
        [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
        [l, b, [c, h]],
        [/applecoremedia\/[\w\.]+ \((ipad)/],
        [l, [b, 'Apple'], [c, h]],
        [/(apple\s{0,1}tv)/i],
        [
          [l, 'Apple TV'],
          [b, 'Apple'],
          [c, v],
        ],
        [
          /(archos)\s(gamepad2?)/i,
          /(hp).+(touchpad)/i,
          /(hp).+(tablet)/i,
          /(kindle)\/([\w\.]+)/i,
          /\s(nook)[\w\s]+build\/(\w+)/i,
          /(dell)\s(strea[kpr\s\d]*[\dko])/i,
        ],
        [b, l, [c, h]],
        [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
        [l, [b, 'Amazon'], [c, h]],
        [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
        [
          [l, T.str, A.device.amazon.model],
          [b, 'Amazon'],
          [c, g],
        ],
        [/android.+aft([bms])\sbuild/i],
        [l, [b, 'Amazon'], [c, v]],
        [/\((ip[honed|\s\w*]+);.+(apple)/i],
        [l, b, [c, g]],
        [/\((ip[honed|\s\w*]+);/i],
        [l, [b, 'Apple'], [c, g]],
        [
          /(blackberry)[\s-]?(\w+)/i,
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
          /(hp)\s([\w\s]+\w)/i,
          /(asus)-?(\w+)/i,
        ],
        [b, l, [c, g]],
        [/\(bb10;\s(\w+)/i],
        [l, [b, 'BlackBerry'], [c, g]],
        [
          /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
        ],
        [l, [b, 'Asus'], [c, h]],
        [
          /(sony)\s(tablet\s[ps])\sbuild\//i,
          /(sony)?(?:sgp.+)\sbuild\//i,
        ],
        [
          [b, 'Sony'],
          [l, 'Xperia Tablet'],
          [c, h],
        ],
        [
          /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
        ],
        [l, [b, 'Sony'], [c, g]],
        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
        [b, l, [c, f]],
        [/android.+;\s(shield)\sbuild/i],
        [l, [b, 'Nvidia'], [c, f]],
        [/(playstation\s[34portablevi]+)/i],
        [l, [b, 'Sony'], [c, f]],
        [/(sprint\s(\w+))/i],
        [
          [b, T.str, A.device.sprint.vendor],
          [l, T.str, A.device.sprint.model],
          [c, g],
        ],
        [
          /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
          /(zte)-(\w*)/i,
          /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
        ],
        [b, [l, /_/g, ' '], [c, g]],
        [/(nexus\s9)/i],
        [l, [b, 'HTC'], [c, h]],
        [
          /d\/huawei([\w\s-]+)[;\)]/i,
          /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i,
        ],
        [l, [b, 'Huawei'], [c, g]],
        [/android.+(bah2?-a?[lw]\d{2})/i],
        [l, [b, 'Huawei'], [c, h]],
        [/(microsoft);\s(lumia[\s\w]+)/i],
        [b, l, [c, g]],
        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
        [l, [b, 'Microsoft'], [c, f]],
        [/(kin\.[onetw]{3})/i],
        [
          [l, /\./g, ' '],
          [b, 'Microsoft'],
          [c, g],
        ],
        [
          /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
          /mot[\s-]?(\w*)/i,
          /(XT\d{3,4}) build\//i,
          /(nexus\s6)/i,
        ],
        [l, [b, 'Motorola'], [c, g]],
        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
        [l, [b, 'Motorola'], [c, h]],
        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
        [
          [b, y.trim],
          [l, y.trim],
          [c, v],
        ],
        [/hbbtv.+maple;(\d+)/i],
        [
          [l, /^/, 'SmartTV'],
          [b, 'Samsung'],
          [c, v],
        ],
        [/\(dtv[\);].+(aquos)/i],
        [l, [b, 'Sharp'], [c, v]],
        [
          /android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
          /((SM-T\w+))/i,
        ],
        [[b, 'Samsung'], l, [c, h]],
        [/smart-tv.+(samsung)/i],
        [b, [c, v], l],
        [
          /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
          /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
          /sec-((sgh\w+))/i,
        ],
        [[b, 'Samsung'], l, [c, g]],
        [/sie-(\w*)/i],
        [l, [b, 'Siemens'], [c, g]],
        [
          /(maemo|nokia).*(n900|lumia\s\d+)/i,
          /(nokia)[\s_-]?([\w-]*)/i,
        ],
        [[b, 'Nokia'], l, [c, g]],
        [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
        [l, [b, 'Acer'], [c, h]],
        [/android.+([vl]k\-?\d{3})\s+build/i],
        [l, [b, 'LG'], [c, h]],
        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
        [[b, 'LG'], l, [c, h]],
        [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
        [[b, 'LG'], l, [c, v]],
        [
          /(nexus\s[45])/i,
          /lg[e;\s\/-]+(\w*)/i,
          /android.+lg(\-?[\d\w]+)\s+build/i,
        ],
        [l, [b, 'LG'], [c, g]],
        [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
        [b, l, [c, h]],
        [/android.+(ideatab[a-z0-9\-\s]+)/i],
        [l, [b, 'Lenovo'], [c, h]],
        [/(lenovo)[_\s-]?([\w-]+)/i],
        [b, l, [c, g]],
        [/linux;.+((jolla));/i],
        [b, l, [c, g]],
        [/((pebble))app\/[\d\.]+\s/i],
        [b, l, [c, x]],
        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
        [b, l, [c, g]],
        [/crkey/i],
        [
          [l, 'Chromecast'],
          [b, 'Google'],
          [c, v],
        ],
        [/android.+;\s(glass)\s\d/i],
        [l, [b, 'Google'], [c, x]],
        [/android.+;\s(pixel c)[\s)]/i],
        [l, [b, 'Google'], [c, h]],
        [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
        [l, [b, 'Google'], [c, g]],
        [
          /android.+;\s(\w+)\s+build\/hm\1/i,
          /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
          /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,
          /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
        ],
        [
          [l, /_/g, ' '],
          [b, 'Xiaomi'],
          [c, g],
        ],
        [
          /android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,
        ],
        [
          [l, /_/g, ' '],
          [b, 'Xiaomi'],
          [c, h],
        ],
        [/android.+;\s(m[1-5]\snote)\sbuild/i],
        [l, [b, 'Meizu'], [c, g]],
        [/(mz)-([\w-]{2,})/i],
        [[b, 'Meizu'], l, [c, g]],
        [
          /android.+a000(1)\s+build/i,
          /android.+oneplus\s(a\d{4})[\s)]/i,
        ],
        [l, [b, 'OnePlus'], [c, g]],
        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
        [l, [b, 'RCA'], [c, h]],
        [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
        [l, [b, 'Dell'], [c, h]],
        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
        [l, [b, 'Verizon'], [c, h]],
        [
          /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i,
        ],
        [[b, 'Barnes & Noble'], l, [c, h]],
        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
        [l, [b, 'NuVision'], [c, h]],
        [/android.+;\s(k88)\sbuild/i],
        [l, [b, 'ZTE'], [c, h]],
        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
        [l, [b, 'Swiss'], [c, g]],
        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
        [l, [b, 'Swiss'], [c, h]],
        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
        [l, [b, 'Zeki'], [c, h]],
        [
          /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
          /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
        ],
        [[b, 'Dragon Touch'], l, [c, h]],
        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
        [l, [b, 'Insignia'], [c, h]],
        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
        [l, [b, 'NextBook'], [c, h]],
        [
          /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
        ],
        [[b, 'Voice'], l, [c, g]],
        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
        [[b, 'LvTel'], l, [c, g]],
        [/android.+;\s(PH-1)\s/i],
        [l, [b, 'Essential'], [c, g]],
        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
        [l, [b, 'Envizen'], [c, h]],
        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
        [b, l, [c, h]],
        [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
        [l, [b, 'MachSpeed'], [c, h]],
        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
        [b, l, [c, h]],
        [/android.+[;\/]\s*TU_(1491)\s+build/i],
        [l, [b, 'Rotor'], [c, h]],
        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
        [b, l, [c, h]],
        [
          /android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i,
        ],
        [l, [c, g]],
        [
          /android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i,
        ],
        [l, [c, h]],
        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
        [[c, y.lowerize], b, l],
        [/[\s\/\(](smart-?tv)[;\)]/i],
        [[c, v]],
        [/(android[\w\.\s\-]{0,9});.+build/i],
        [l, [b, 'Generic']],
      ],
      engine: [
        [/windows.+\sedge\/([\w\.]+)/i],
        [m, [u, 'EdgeHTML']],
        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
        [m, [u, 'Blink']],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
          /(icab)[\/\s]([23]\.[\d\.]+)/i,
        ],
        [u, m],
        [/rv\:([\w\.]{1,9}).+(gecko)/i],
        [m, u],
      ],
      os: [
        [/microsoft\s(windows)\s(vista|xp)/i],
        [u, m],
        [
          /(windows)\snt\s6\.2;\s(arm)/i,
          /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
          /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
        ],
        [u, [m, T.str, A.os.windows.version]],
        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
        [
          [u, 'Windows'],
          [m, T.str, A.os.windows.version],
        ],
        [/\((bb)(10);/i],
        [[u, 'BlackBerry'], m],
        [
          /(blackberry)\w*\/?([\w\.]*)/i,
          /(tizen|kaios)[\/\s]([\w\.]+)/i,
          /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
        ],
        [u, m],
        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
        [[u, 'Symbian'], m],
        [/\((series40);/i],
        [u],
        [/mozilla.+\(mobile;.+gecko.+firefox/i],
        [[u, 'Firefox OS'], m],
        [/crkey\/([\d\.]+)/i],
        [m, [u, 'Chromecast']],
        [
          /(nintendo|playstation)\s([wids34portablevu]+)/i,
          /(mint)[\/\s\(]?(\w*)/i,
          /(mageia|vectorlinux)[;\s]/i,
          /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
          /(hurd|linux)\s?([\w\.]*)/i,
          /(gnu)\s?([\w\.]*)/i,
        ],
        [u, m],
        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
        [[u, 'Chromium OS'], m],
        [/(sunos)\s?([\w\.\d]*)/i],
        [[u, 'Solaris'], m],
        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
        [u, m],
        [/(haiku)\s(\w+)/i],
        [u, m],
        [
          /cfnetwork\/.+darwin/i,
          /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
        ],
        [
          [m, /_/g, '.'],
          [u, 'iOS'],
        ],
        [
          /(mac\sos\sx)\s?([\w\s\.]*)/i,
          /(macintosh|mac(?=_powerpc)\s)/i,
        ],
        [
          [u, 'Mac OS'],
          [m, /_/g, '.'],
        ],
        [
          /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
          /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
          /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
          /(unix)\s?([\w\.]*)/i,
        ],
        [u, m],
      ],
    },
    E = function (e, r) {
      if (
        ('object' == typeof e && ((r = e), (e = s)),
        !(this instanceof E))
      )
        return new E(e, r).getResult()
      var a =
          e ||
          (i && i.navigator && i.navigator.userAgent
            ? i.navigator.userAgent
            : o),
        n = r ? y.extend(S, r) : S
      return (
        (this.getBrowser = function () {
          var i = { name: s, version: s }
          return (
            T.rgx.call(i, a, n.browser),
            (i.major = y.major(i.version)),
            i
          )
        }),
        (this.getCPU = function () {
          var i = { architecture: s }
          return T.rgx.call(i, a, n.cpu), i
        }),
        (this.getDevice = function () {
          var i = { vendor: s, model: s, type: s }
          return T.rgx.call(i, a, n.device), i
        }),
        (this.getEngine = function () {
          var i = { name: s, version: s }
          return T.rgx.call(i, a, n.engine), i
        }),
        (this.getOS = function () {
          var i = { name: s, version: s }
          return T.rgx.call(i, a, n.os), i
        }),
        (this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU(),
          }
        }),
        (this.getUA = function () {
          return a
        }),
        (this.setUA = function (i) {
          return (a = i), this
        }),
        this
      )
    }
  ;(E.VERSION = e),
    (E.BROWSER = { NAME: u, MAJOR: w, VERSION: m }),
    (E.CPU = { ARCHITECTURE: p }),
    (E.DEVICE = {
      MODEL: l,
      VENDOR: b,
      TYPE: c,
      CONSOLE: f,
      MOBILE: g,
      SMARTTV: v,
      TABLET: h,
      WEARABLE: x,
      EMBEDDED: k,
    }),
    (E.ENGINE = { NAME: u, VERSION: m }),
    (E.OS = { NAME: u, VERSION: m }),
    typeof exports !== n
      ? (typeof module !== n &&
          module.exports &&
          (exports = module.exports = E),
        (exports.UAParser = E))
      : 'function' == typeof define && define.amd
      ? define(function () {
          return E
        })
      : i && (i.UAParser = E)
  var N = i && (i.jQuery || i.Zepto)
  if (N && !N.ua) {
    var B = new E()
    ;(N.ua = B.getResult()),
      (N.ua.get = function () {
        return B.getUA()
      }),
      (N.ua.set = function (i) {
        B.setUA(i)
        var s = B.getResult()
        for (var e in s) N.ua[e] = s[e]
      })
  }
})('object' == typeof window ? window : this)
