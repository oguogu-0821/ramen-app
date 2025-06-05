// src/App.js

// Reactを使うためのおまじない。アプリの動きを作るのに必要です。
import React from 'react';
// このJSファイルに対応する見た目の設定ファイル（App.css）を読み込みます。
import './App.css';
// 同じフォルダにある路線図の画像ファイルを読み込みます。
import lineImage from './line.png'; // ★画像ファイルをここで読み込む

// src/App.js の中、`import './App.css';` のすぐ下あたりに貼り付けてください。

// src/App.js の中、`import './App.css';` のすぐ下あたりに貼り付けてください。

// ----------------------------------------------------
// ★ここからが、あなたのアプリに表示される駅とラーメン屋さんの情報です★
// ここに駅やラーメン屋さんの情報を追加・編集していきます。
const stationData = [
  // --- 山手線主要駅 ---
  {
    id: 'tokyo',
    name: '東京駅',
    position: { top: '1464px', left: '2275px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: '六厘舎', description: '言わずと知れたつけ麺の名店。', rating: 4.3 }],
  },//fin
  {
    id: 'shinjuku',
    name: '新宿駅',
    position: { top: '1025px', left: '1060px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: '麺屋 武蔵', description: '新宿を代表する行列店。つけ麺が有名。', rating: 4.2 }],
  },//調整完了
  {
    id: 'shibuya',
    name: '渋谷駅',
    position: { top: '1480px', left: '1080px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: 'はやし', description: '魚介豚骨のシンプルながら奥深い一杯。', rating: 4.5 }],
  },//調整完了
  {
    id: 'ikebukuro',
    name: '池袋駅',
    position: { top: '640px', left: '1165px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: '無敵家', description: '豚骨醤油の超濃厚スープが魅力。', rating: 4.3 }],
  },//調整完了
  {
    id: 'ueno',
    name: '上野駅',
    position: { top: '839px', left: '2295px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: '鴨to葱', description: '鴨と葱の旨味が凝縮された上品な一杯。', rating: 4.4 }],
  },//fin
  {
    id: 'shinagawa',
    name: '品川駅',
    position: { top: '2037px', left: '1800px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: 'せたが屋', description: '魚介系の風味豊かなスープ。', rating: 4.0 }],
  },//fin
  {
    id: 'ginza',
    name: '銀座駅',
    position: { top: '1592px', left: '2367px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: '銀座 篝', description: '上品な鶏白湯ラーメンが人気。', rating: 4.6 }],
  },//fin
  {
    id: 'akihabara',
    name: '秋葉原駅',
    position: { top: '1065px', left: '2281px' }, // <<-- ★ここを路線図を見ながら調整してください★
    ramenShops: [{ name: '田中商店', description: '濃厚な博多豚骨ラーメン。替玉必須！', rating: 4.1 }],
  },//fin
  {
    id: 'yurakucho',
    name: '有楽町駅',
    position: { top: '1529px', left: '2221px' },
    ramenShops: [],
  },//fin
  {
    id: 'shimbashi',
    name: '新橋駅',
    position: { top: '1643px', left: '2267px' },
    ramenShops: [],
  },//fin
  {
    id: 'hamamatsucho',
    name: '浜松町駅',
    position: { top: '1842px', left: '2020px' },
    ramenShops: [],
  },//fin
  {
    id: 'tamachi',
    name: '田町(三田)駅',
    position: { top: '1867px', left: '1936px' },
    ramenShops: [],
  },//fin
  {
    id: 'gotanda',
    name: '五反田駅',
    position: { top: '1931px', left: '1300px' },
    ramenShops: [],
  },//fin
  {
    id: 'meguro',
    name: '目黒駅',
    position: { top: '1829px', left: '1209px' },
    ramenShops: [],
  },//fin
  {
    id: 'ebisu',
    name: '恵比寿駅',
    position: { top: '1660px', left: '1100px' },
    ramenShops: [],
  },//fin
  {
    id: 'harajuku',
    name: '原宿(明治神宮前)駅',
    position: { top: '1391px', left: '1100px' },
    ramenShops: [],
  },//fin
  {
    id: 'yoyogi',
    name: '代々木駅',
    position: { top: '1220px', left: '1055px' },
    ramenShops: [],
  },//fin
  {
    id: 'shinjuku-gyoemmae',
    name: '新宿御苑前駅',
    position: { top: '1075px', left: '1316px' },
    ramenShops: [],
  },//fin
  {
    id: 'yotsuya',
    name: '四ツ谷駅',
    position: { top: '1180px', left: '1460px' },
    ramenShops: [],
  },//fin
  {
    id: 'ichigaya',
    name: '市ヶ谷駅',
    position: { top: '1088px', left: '1615px' },
    ramenShops: [],
  },
  {//fin
    id: 'iidabashi',
    name: '飯田橋駅',
    position: { top: '951px', left: '1787px' },
    ramenShops: [],
  },//fin
  {
    id: 'suidobashi',
    name: '水道橋駅',
    position: { top: '1030px', left: '1900px' },
    ramenShops: [],
  },//fin
  {
    id: 'ochanomizu',
    name: '御茶ノ水駅',
    position: { top: '1099px', left: '1980px' },
    ramenShops: [],
  },//fin
  {
    id: 'kanda',
    name: '神田駅',
    position: { top: '1279px', left: '2230px' },
    ramenShops: [],
  },//fin
  {
    id: 'nihonbashi',
    name: '日本橋駅',
    position: { top: '1390px', left: '2590px' },
    ramenShops: [],
  },//fin

  // --- 主要な地下鉄駅・その他（約170駅に再構築） ---
  { id: 'kyobashi', name: '京橋駅', position: { top: '1431px', left: '2587px' }, ramenShops: [] },
  { id: 'shiodome', name: '汐留駅', position: { top: '1735px', left: '2339px' }, ramenShops: [] },
  { id: 'roppongi', name: '六本木駅', position: { top: '1660px', left: '1432px' }, ramenShops: [] },
  { id: 'azabujuban', name: '麻布十番駅', position: { top: '1735px', left: '1669px' }, ramenShops: [] },
  { id: 'daimon', name: '大門駅', position: { top: '1734px', left: '2037px' }, ramenShops: [] },
  { id: 'tocho-mae', name: '都庁前駅', position: { top: '989px', left: '865px' }, ramenShops: [] },
  { id: 'shin-okubo', name: '新大久保駅', position: { top: '782px', left: '1066px' }, ramenShops: [] },
  { id: 'nakano', name: '中野駅', position: { top: '824px', left: '480px' }, ramenShops: [] },
  { id: 'kichijoji', name: '吉祥寺駅', position: { top: '830px', left: '226px' }, ramenShops: [] },
  { id: 'tachikawa', name: '立川駅', position: { top: '830px', left: '70px' }, ramenShops: [] },
  { id: 'kunitachi', name: '国立駅', position: { top: '357px', left: '-25px' }, ramenShops: [] },
  { id: 'kitasenju', name: '北千住駅', position: { top: '424px', left: '2660px' }, ramenShops: [] },
  { id: 'nishi-nippori', name: '西日暮里駅', position: { top: '589px', left: '2153px' }, ramenShops: [] },
  { id: 'nippori', name: '日暮里駅', position: { top: '684px', left: '2268px' }, ramenShops: [] },
 //fin
  { id: 'asakusa',name: '浅草駅',position: { top: '854px', left: '2671px' },ramenShops: [],  },
  { id: 'skytree', name: 'とうきょうスカイツリー駅', position: { top: '845px', left: '2740px' }, ramenShops: [] },
  { id: 'kinshicho', name: '錦糸町駅', position: { top: '1073px', left: '2885px' }, ramenShops: [] },
  { id: 'monzennakacho', name: '門前仲町駅', position: { top: '1392px', left: '2813px' }, ramenShops: [] },
  { id: 'toyosu', name: '豊洲駅', position: { top: '1669px', left: '2878px' }, ramenShops: [] },
  { id: 'shinkiba', name: '新木場駅', position: { top: '1562px', left: '2989px' }, ramenShops: [] },
  { id: 'odaiba', name: 'お台場海浜公園駅', position: { top: '1976px', left: '2521px' }, ramenShops: [] },
  { id: 'ginza-icchome', name: '銀座一丁目駅', position: { top: '1534px', left: '2421px' }, ramenShops: [] },
  //fin
  { id: 'sakuradamon', name: '桜田門駅', position: { top: '1439px', left: '1887px' }, ramenShops: [] },
  { id: 'kasumigaseki', name: '霞ケ関駅', position: { top: '1560px', left: '1911px' }, ramenShops: [] },
  { id: 'nagatacho', name: '永田町駅', position: { top: '1424px', left: '1669px' }, ramenShops: [] },
  { id: 'kokkai-gijidomae', name: '国会議事堂前駅', position: { top: '1529px', left: '1739px' }, ramenShops: [] },
  { id: 'roppongi-itchome', name: '六本木一丁目駅', position: { top: '1693px', left: '1694px' }, ramenShops: [] },
  { id: 'kamiyacho', name: '神谷町駅', position: { top: '1650px', left: '1802px' }, ramenShops: [] },
  { id: 'shiba-koen', name: '芝公園駅', position: { top: '1769px', left: '1955px' }, ramenShops: [] },
  { id: 'okachimachi', name: '御徒町駅', position: { top: '1696px', left: '1993px' }, ramenShops: [] },
  { id: 'ryogoku', name: '両国駅', position: { top: '1058px', left: '2733px' }, ramenShops: [] },
  { id: 'sumiyoshi', name: '住吉駅', position: { top: '1186px', left: '2887px' }, ramenShops: [] },
  { id: 'higashi-ginza', name: '東銀座駅', position: { top: '1661px', left: '2466px' }, ramenShops: [] },
  { id: 'tsukiji', name: '築地駅', position: { top: '1711px', left: '2539px' }, ramenShops: [] },
  { id: 'hatchobori', name: '八丁堀駅', position: { top: '1567px', left: '2712px' }, ramenShops: [] },
  { id: 'kayabacho', name: '茅場町駅', position: { top: '1420px', left: '2702px' }, ramenShops: [] },
  { id: 'suitengumae', name: '水天宮前駅', position: { top: '1352px', left: '2690px' }, ramenShops: [] },
  { id: 'ningyocho', name: '人形町駅', position: { top: '1306px', left: '2605px' }, ramenShops: [] },
  //fin
  { id: 'kodemmacho', name: '小伝馬町駅', position: { top: '1214px', left: '2465px' }, ramenShops: [] },
  { id: 'shin-nihonbashi', name: '新日本橋(三越前)駅', position: { top: '1292px', left: '2458px' }, ramenShops: [] },
  { id: 'jinbocho', name: '神保町駅', position: { top: '1265px', left: '1892px' }, ramenShops: [] },
  { id: 'takebashi', name: '竹橋駅', position: { top: '1358px', left: '1777px' }, ramenShops: [] },
  { id: 'kudanshita', name: '九段下駅', position: { top: '1238px', left: '1780px' }, ramenShops: [] },
  { id: 'hongo-sanchome', name: '本郷三丁目駅', position: { top: '884px', left: '1941px' }, ramenShops: [] },
  { id: 'korakuen', name: '後楽園駅', position: { top: '886px', left: '2049px' }, ramenShops: [] },
  { id: 'kasuga', name: '春日駅', position: { top: '778px', left: '1897px' }, ramenShops: [] },
  { id: 'myogadani', name: '茗荷谷駅', position: { top: '605px', left: '1626px' }, ramenShops: [] },
  { id: 'kanamecho', name: '要町駅', position: { top: '527px', left: '1028px' }, ramenShops: [] },
  { id: 'senkawa', name: '千川駅', position: { top: '471px', left: '974px' }, ramenShops: [] },
  { id: 'kotake-mukaihara', name: '小竹向原駅', position: { top: '408px', left: '854px' }, ramenShops: [] },
  { id: 'nerima', name: '練馬駅', position: { top: '515px', left: '611px' }, ramenShops: [] },
  { id: 'ekoda', name: '江古田駅', position: { top: '519px', left: '846px' }, ramenShops: [] },
  { id: 'takadanobaba', name: '高田馬場駅', position: { top: '735px', left: '1012px' }, ramenShops: [] },
  { id: 'waseda', name: '早稲田駅', position: { top: '849px', left: '1456px' }, ramenShops: [] },
  { id: 'kagurazaka', name: '神楽坂駅', position: { top: '849px', left: '1565px' }, ramenShops: [] },
  { id: 'higashi-nakano', name: '東中野駅', position: { top: '846px', left: '610px' }, ramenShops: [] },
  { id: 'nakano-sakaue', name: '中野坂上駅', position: { top: '942px', left: '666px' }, ramenShops: [] },
  { id: 'nishishinjuku-gochome', name: '西新宿五丁目駅', position: { top: '992px', left: '783px' }, ramenShops: [] },
  { id: 'hatagaya', name: '幡ヶ谷駅', position: { top: '1161px', left: '851px' }, ramenShops: [] },
  { id: 'sasazuka', name: '笹塚駅', position: { top: '1183px', left: '720px' }, ramenShops: [] },
  { id: 'meidaimae', name: '明大前駅', position: { top: '1198px', left: '570px' }, ramenShops: [] },
  { id: 'shimo-kitazawa', name: '下北沢駅', position: { top: '1365px', left: '560px' }, ramenShops: [] },
  { id: 'naka-meguro', name: '中目黒駅', position: { top: '1660px', left: '920px' }, ramenShops: [] },
  { id: 'jiyugaoka', name: '自由が丘駅', position: { top: '1862px', left: '693px' }, ramenShops: [] },
  { id: 'okayama', name: '大岡山駅', position: { top: '1893px', left: '855px' }, ramenShops: [] },
  { id: 'musashi-kosugi', name: '武蔵小杉駅', position: { top:'2085px',left:'412px' }, ramenShops: [] },
  { id: 'musashi-kosugi-jr', name: 'JR武蔵小杉駅', position: { top: '2194px', left: '375px'}, ramenShops: [] },//駅でidを分けていることに注意

  { id: 'den-en-chofu', name: '田園調布駅', position: { top: '1951px', left: '644px' }, ramenShops: [] },
  { id: 'futako-tamagawa', name: '二子玉川駅', position: { top: '1661px', left: '312px' }, ramenShops: [] },
  { id: 'setagaya-daita', name: '世田谷代田駅', position: { top: '1362px', left: '485px' }, ramenShops: [] },
  { id: 'kugayama', name: '久我山駅', position: { top: '967px', left: '347px' }, ramenShops: [] },
  { id: 'ogikubo', name: '荻窪駅', position: { top: '825px', left: '335px' }, ramenShops: [] },
  //fin
  { id: 'minami-senju', name: '南千住駅', position: { top: '653px', left: '2655px' }, ramenShops: [] },
  { id: 'machiya', name: '町屋駅', position: { top: '417px', left: '2489px' }, ramenShops: [] },
  { id: 'itabashi', name: '板橋駅', position: { top: '491px', left: '1307px' }, ramenShops: [] },
  { id: 'mukojima', name: '東向島駅', position: { top: '711px', left: '2869px' }, ramenShops: [] },
  { id: 'higashi-jujo', name: '東十条駅', position: { top: '245px', left: '1515px' }, ramenShops: [] },
  { id: 'oji-kamiya', name: '王子神谷駅', position: { top: '224px', left: '1712px' }, ramenShops: [] },
  { id: 'shin-itabashi', name: '新板橋駅', position: { top: '346px', left: '1286px' }, ramenShops: [] },
  { id: 'sugamo', name: '巣鴨駅', position: { top: '526px', left: '1652px' }, ramenShops: [] },
  { id: 'komagome', name: '駒込駅', position: { top: '530px', left: '1866px' }, ramenShops: [] },
  { id: 'tabata', name: '田端駅', position: { top: '603px', left: '1993px' }, ramenShops: [] },
  { id: 'oshima', name: '大島駅', position: { top: '1186px', left: '3002px' }, ramenShops: [] },
  { id: 'nishi-ojima', name: '西大島駅', position: { top: '1184px', left: '2953px' }, ramenShops: [] },
  { id: 'higashi-ojima', name: '東大島駅', position: { top: '1184px', left: '3046px' }, ramenShops: [] },
  { id: 'funabori', name: '船堀駅', position: { top: '1183px', left: '3093px' }, ramenShops: [] },
  { id: 'ichinoe', name: '一之江駅', position: { top: '1185px', left: '3137px' }, ramenShops: [] },
  { id: 'mizue', name: '瑞江駅', position: { top: '1186px', left: '3186px' }, ramenShops: [] },
  { id: 'shinozaki', name: '篠崎駅', position: { top: '1185px', left: '3229px' }, ramenShops: [] },
  { id: 'motoyawata', name: '本八幡駅', position: { top: '1170px', left: '3304px' }, ramenShops: [] },
  { id: 'koenji', name: '高円寺駅', position: { top: '830px', left: '425px' }, ramenShops: [] },
  { id: 'asagaya', name: '阿佐ケ谷駅', position: { top: '828px', left: '382px' }, ramenShops: [] },
  { id: 'nishi-ogikubo', name: '西荻窪駅', position: { top: '828px', left: '279px' }, ramenShops: [] },
  { id: 'mitaka', name: '三鷹駅', position: { top: '828px', left: '30px' }, ramenShops: [] },
  { id: 'musashisakai', name: '武蔵境駅', position: { top: '682px', left: '164px' }, ramenShops: [] },
  { id: 'takaido', name: '高井戸駅', position: { top: '1039px', left: '417px' }, ramenShops: [] },
  { id: 'kugayama-keio', name: '久我山駅(京王)', position: { top: '969px', left: '346px' }, ramenShops: [] },
  { id: 'inokashira-koen', name: '井の頭公園駅', position: { top: '895px', left: '274px' }, ramenShops: [] },
  { id: 'shimo-takaido', name: '下高井戸駅', position: { top: '1204px', left: '375px' }, ramenShops: [] },
  { id: 'sakurajosui', name: '桜上水駅', position: { top: '1199px', left: '286px' }, ramenShops: [] },
  { id: 'chitose-karasuyama', name: '千歳烏山駅', position: { top: '1367px', left: '283px' }, ramenShops: [] },
  { id: 'shinjuku-sanchome', name: '新宿三丁目駅', position: { top: '1022px', left: '1246px' }, ramenShops: [] },
  { id: 'higashi-shinjuku', name: '東新宿駅', position: { top: '925px', left: '1243px' }, ramenShops: [] },
  { id: 'nishi-waseda', name: '西早稲田駅', position: { top: '883px', left: '1257px' }, ramenShops: [] },
  { id: 'zoshigaya', name: '雑司が谷駅', position: { top: '769px', left: '1250px' }, ramenShops: [] },
  { id: 'gokokuji', name: '護国寺駅', position: { top: '731px', left: '1587px' }, ramenShops: [] },
  { id: 'edogawabashi', name: '江戸川橋駅', position: { top: '769px', left: '1587px' }, ramenShops: [] },
 //fin
  { id: 'akabane', name: '赤羽駅', position: { top: '198px', left: '1366px' }, ramenShops: [] },
  { id: 'kita-akabane', name: '北赤羽駅', position: { top: '168px', left: '1288px' }, ramenShops: [] },
  { id: 'arakawa-kosen', name: '荒川区役所前', position: { top: '571px', left: '2532px' }, ramenShops: [] },
  { id: 'hiken-koen', name: '飛鳥山', position: { top: '288px', left: '1735px' }, ramenShops: [] },
  { id: 'kasai', name: '葛西駅', position: { top: '1383px', left: '3087px' }, ramenShops: [] },
  { id: 'urayasu', name: '浦安駅', position: { top: '1384px', left: '3133px' }, ramenShops: [] },
  { id: 'gyotoku', name: '行徳駅', position: { top: '1386px', left: '3217px' }, ramenShops: [] },
  { id: 'myoden', name: '妙典駅', position: { top: '1389px', left: '3261px' }, ramenShops: [] },
  { id: 'nishi-funabashi', name: '西船橋駅', position: { top: '1378px', left: '3358px' }, ramenShops: [] },
//fin
  // --- 全駅網羅に向けて追加（残り約150駅 → 約200駅程度に再構築） ---
  { id: 'akabane-iwabuchi', name: '赤羽岩淵駅', position: { top: '178px', left: '1613px' }, ramenShops: [] },
  { id: 'hongo-sanchome-oedo', name: '本郷三丁目駅(大江戸線)', position: { top: '881px', left: '1941px' }, ramenShops: [] },
  { id: 'oimachi', name: '大井町駅', position: { top: '2201px', left: '1654px' }, ramenShops: [] },
  { id: 'keikyu-kamata', name: '蒲田駅', position: { top: '2344px', left: '1439px' }, ramenShops: [] },
  { id: 'monorail-hamamatsucho', name: 'モノレール浜松町駅', position: { top: '1837px', left: '2019px' }, ramenShops: [] },
  { id: 'tennozu-isle', name: '天王洲アイル駅', position: { top: '2056px', left: '2079px' }, ramenShops: [] },
  { id: 'tokyo-teleport', name: '東京テレポート駅', position: { top: '2053px', left: '2662px' }, ramenShops: [] },
  { id: 'kokusai-tenjijo', name: '国際展示場駅', position: { top: '1990px', left: '2758px' }, ramenShops: [] },
  { id: 'ariake', name: '有明駅', position: { top: '2102px', left: '2758px' }, ramenShops: [] },
  { id: 'shin-toyosu', name: '新豊洲駅', position: { top: '1861px', left: '2879px' }, ramenShops: [] },
  { id: 'shibaura-futo', name: '芝浦ふ頭駅', position: { top: '1866px', left: '2343px' }, ramenShops: [] },
  { id: 'takeshiba', name: '竹芝駅', position: { top: '1780px', left: '2340px' }, ramenShops: [] },
  { id: 'hinode', name: '日の出駅', position: { top: '1830px', left: '2341px' }, ramenShops: [] },
  { id: 'tsukishima', name: '月島駅', position: { top: '1656px', left: '2789px' }, ramenShops: [] },
  { id: 'kiyosumi-shirakawa', name: '清澄白河駅', position: { top: '1354px', left: '2813px' }, ramenShops: [] },
  { id: 'morishita', name: '森下駅', position: { top: '1186px', left: '2793px' }, ramenShops: [] },
  { id: 'kikukawa', name: '菊川駅', position: { top: '1186px', left: '2839px' }, ramenShops: [] },
  { id: 'ogawamachi', name: '小川町駅', position: { top: '1229px', left: '2102px' }, ramenShops: [] },
  { id: 'suehirocho', name: '末広町駅', position: { top: '1123px', left: '2177px' }, ramenShops: [] },
  { id: 'wakamatsu-kawada', name: '若松河田駅', position: { top: '927px', left: '1345px' }, ramenShops: [] },
  { id: 'ushigome-yanagicho', name: '牛込柳町駅', position: { top: '927px', left: '1467px' }, ramenShops: [] },
  { id: 'ushigome-kagurazaka', name: '牛込神楽坂駅', position: { top: '928px', left: '1605px' }, ramenShops: [] },
  { id: 'tameike-sanno', name: '溜池山王駅', position: { top: '1618px', left: '1653px' }, ramenShops: [] },
  { id: 'onamon', name: '御成門駅', position: { top: '1697px', left: '1992px' }, ramenShops: [] },
  { id: 'akabanebashi', name: '赤羽橋駅', position: { top: '1734px', left: '1805px' }, ramenShops: [] },
  { id: 'mita', name: '三田駅', position: { top: '1842px', left: '1909px' }, ramenShops: [] },
  { id: 'shirokane-takanawa', name: '白金高輪駅', position: { top: '1827px', left: '1587px' }, ramenShops: [] },
  //fin
  { id: 'shirokane-dai', name: '白金台駅', position: { top: '1812px', left: '1424px' }, ramenShops: [] },
  { id: 'takanawadai', name: '高輪台駅', position: { top: '1895px', left: '1497px' }, ramenShops: [] },
  { id: 'sengakuji', name: '泉岳寺駅', position: { top: '1911px', left: '1802px' }, ramenShops: [] },
  { id: 'nishi-magome', name: '西馬込駅', position: { top: '2230px', left: '1041px' }, ramenShops: [] },
  { id: 'magome', name: '馬込駅', position: { top: '1122px', left: '2145px' }, ramenShops: [] },
  { id: 'ginza-g-line', name: '銀座駅(銀座線)', position: { top: '1591px', left: '2366px' }, ramenShops: [] },
  { id: 'tawara-machi', name: '田原町駅', position: { top: '834px', left: '2553px' }, ramenShops: [] },
  { id: 'minowa', name: '三ノ輪駅', position: { top: '755px', left: '2544px' }, ramenShops: [] },
  { id: 'nishi-shinjuku', name: '西新宿駅', position: { top: '890px', left: '1029px' }, ramenShops: [] },
  { id: 'nijubashimae', name: '二重橋前駅', position: { top: '1413px', left: '2028px' }, ramenShops: [] },
  { id: 'shin-ochanomizu', name: '新御茶ノ水駅', position: { top: '1198px', left: '1979px' }, ramenShops: [] },
  { id: 'yushima', name: '湯島駅', position: { top: '989px', left: '2027px' }, ramenShops: [] },
  { id: 'nezu', name: '根津駅', position: { top: '789px', left: '2027px' }, ramenShops: [] },
 
  { id: 'shin-otsuka', name: '新大塚駅', position: { top: '606px', left: '1538px' }, ramenShops: [] },
  { id: 'shimo-maruko', name: '下丸子', position: { top: '2308px', left: '927px' }, ramenShops: []}, // 多摩川線
  { id: 'musashi-nitta', name: '武蔵新田駅', position: { top: '2308px', left: '1096px' }, ramenShops: []}, // 多摩川線
  { id: 'yaguchinowatashi', name: '矢口渡', position: { top: '2307px', left: '1273px' }, ramenShops: []}, // 多摩川線
  { id: 'numabe', name: '沼部', position: { top: '2115px', left: '565px' }, ramenShops: []}, // 多摩川線
  { id: 'okayama-meguro', name: '大岡山', position: { top: '1889px', left: '853px' }, ramenShops: [] }, // 目黒線
  { id: 'senzoku', name: '洗足', position: { top: '1837px', left: '897px' }, ramenShops: [] }, // 目黒線
  { id: 'musashi-koyama-meguro', name: '武蔵小山', position: { top: '1827px', left: '1034px' }, ramenShops: [] }, // 目黒線
 
  { id: 'hibarigaoka', name: 'ひばりヶ丘', position: { top: '520px', left: '208px' }, ramenShops: [] }, // 地図外
  { id: 'heiwadai', name: '平和台', position: { top: '197px', left: '558px' }, ramenShops: [] }, // 重複だがマップに存在
  { id: 'wakoshi', name: '和光市', position: { top: '151px', left: '290px' }, ramenShops: [] }, // 地図外
  { id: 'asaka', name: '朝霞', position: { top: '139px', left: '195px' }, ramenShops: [] }, // 地図外
  { id: 'ukimafunado-jr', name: '浮間舟渡駅', position: { top: '127px', left: '1248px' }, ramenShops: [] },
  { id: 'itabashihoncho-jr', name: '板橋本町駅', position: { top: '265px', left: '1202px' }, ramenShops: [] },
  { id: 'otsuka-jr-yamanote', name: '大塚駅', position: { top: '524px', left: '1402px' }, ramenShops: [] },
  { id: 'mejiro-jr-yamanote', name: '目白駅', position: { top: '685px', left: '1095px' }, ramenShops: [] },
  //fin
  { id: 'okachimachi-jr-yamanote', name: '御徒町駅', position: { top: '988px', left: '2237px' }, ramenShops: [] },
  { id: 'gaien-mae', name: '外苑前駅', position: { top: '1484px', left: '1341px' }, ramenShops: [] },
  //fin
  { id: 'korakuen-m', name: '後楽園駅', position: { top: '864px', left: '1866px' }, ramenShops: [] },
  { id: 'otemachi-m', name: '大手町駅', position: { top: '1369px', left: '2037px' }, ramenShops: [] },
  { id: 'naka-okachimachi-h', name: '仲御徒町駅(日比谷線)', position: { top: '992px', left: '2372px' }, ramenShops: [] },
  { id: 'tatsumi-y', name: '辰巳駅(有楽町線)', position: { top: '1656px', left: '2953px' }, ramenShops: [] },
  { id: 'nogizaka', name: '乃木坂駅', position: { top: '1529px', left: '1281px' }, ramenShops: [] },
  { id: 'akase', name: '赤坂駅', position: { top: '1559px', left: '1374px' }, ramenShops: [] },
  //check
  { id: 'keisei-takasago', name: '京成高砂駅', position: { top: '506px', left: '3080px' }, ramenShops: [] },
  { id: 'keisei-koiwa', name: '京成小岩駅', position: { top: '498px', left: '3143px' }, ramenShops: [] },
  { id: 'tokyu-fudomae', name: '不動前駅', position: { top: '1829px', left: '1081px' }, ramenShops: [] },
  { id: 'maihama-jr', name: '舞浜駅', position: { top: '1564px', left: '3264px' }, ramenShops: [] },
   { id: 'kokusai-tenjijo-rinkai', name: '国際展示場駅', position: { top: '1990px', left: '2759px' }, ramenShops: [] },
  { id: 'kachidoki', name: '勝どき駅', position: { top: '1767px', left: '2737px' }, ramenShops: [] },
  { id: 'odakyu-seijogakuen-mae', name: '成城学園前駅', position: { top: '1363px', left: '199px' }, ramenShops: [] },
  { id: 'uchisaiwaicho', name: '内幸町駅', position: { top: '1607px', left: '1991px' }, ramenShops: [] },
  {id:'tamagawa',name:'多摩川',position:{top:'1959px',left:'568px'},ramenShops:[]},
  {id:'motosumiyosi',name:'元住吉',position:{top:'2077px',left:'301px'},ramenShops:[]},
  {id:'unoki',name:'鵜の木',position:{top:'2311px',left:'732px'},ramenShops:[]},
  {id:'kugahara',name:'久が原',position:{top:'2295px',left:'764px'},ramenShops:[]},
  {id:'ontakeyama',name:'御嶽山',position:{top:'2066px',left:'682px'},ramenShops:[]},
 {id:'yukigawaootuka',name:'雪が谷大塚',position:{top:'1994px',left:'723px'},ramenShops:[]},
 {id:'isikawadai',name:'石川台',position:{top:'1994px',left:'775px'},ramenShops:[]},
 {id:'senzokuike',name:'洗足池',position:{top:'1994px',left:'827px'},ramenShops:[]},
 {id:'nagahara',name:'長原',position:{top:'1994px',left:'875px'},ramenShops:[]},
 {id:'hatanodai',name:'旗の台',position:{top:'1982px',left:'973px'},ramenShops:[]},
 {id:'ebaranakanobu',name:'荏原中延',position:{top:'1925px',left:'1067px'},ramenShops:[]},
 {id:'togosiginza',name:'戸越銀座',position:{top:'1925px',left:'1106px'},ramenShops:[]},
 {id:'oosakihirokouji',name:'大崎広小路',position:{top:'1925px',left:'1145px'},ramenShops:[]},
 {id:'tidorimati',name:'千鳥町',position:{top:'2291px',left:'1066px'},ramenShops:[]},
 {id:'ikegami',name:'池上',position:{top:'2291px',left:'1211px'},ramenShops:[]},
 {id:'hasunuma',name:'蓮沼',position:{top:'2291px',left:'1358px'},ramenShops:[]},
 {id:'oomori',name:'大森',position:{top:'2311px',left:'1610px'},ramenShops:[]},
 {id:'kaminakazato',name:'上中里',position:{top:'484px',left:'1905px'},ramenShops:[]},
{id:'oji',name:'王子',position:{top:'237px',left:'1795px'},ramenShops:[]},
{id:'takatu',name:'高津',position:{top:'1665px',left:'166px'},ramenShops:[]},
{id:'hutakosinti',name:'二子新地',position:{top:'1665px',left:'202px'},ramenShops:[]},
{id:'kaminoge',name:'上野毛',position:{top:'1707px',left:'415px'},ramenShops:[]},
{id:'todoroki',name:'等々力',position:{top:'1744px',left:'455px'},ramenShops:[]},
{id:'oyamadai',name:'尾山台',position:{top:'1783px',left:'499px'},ramenShops:[]},
{id:'kuhonbutu',name:'九品仏',position:{top:'1824px',left:'541px'},ramenShops:[]},
{id:'midorigaoka',name:'緑ヶ丘',position:{top:'1864px',left:'784px'},ramenShops:[]},
{id:'kamitisato',name:'北千束',position:{top:'1932px',left:'919px'},ramenShops:[]},
{id:'ebaramati',name:'荏原町',position:{top:'2074px',left:'1064px'},ramenShops:[]},
{id:'nakanobu',name:'中延',position:{top:'2074px',left:'1064px'},ramenShops:[]},
{id:'togosiginza',name:'戸越公園',position:{top:'2102px',left:'1345px'},ramenShops:[]},
{id:'simokamiaki',name:'下神明',position:{top:'2101px',left:'1586px'},ramenShops:[]},
{id:'nisiooi',name:'西大井',position:{top:'2188px',left:'1489px'},ramenShops:[]},
{id:'oosaki',name:'大崎',position:{top:'1986px',left:'1498px'},ramenShops:[]},
{id:'daikanyama',name:'代官山',position:{top:'1538px',left:'1024px'},ramenShops:[]},
{id:'yutenji',name:'祐天寺',position:{top:'1724px',left:'851px'},ramenShops:[]},
{id:'gakugeidaigaku',name:'学芸大学',position:{top:'1775px',left:'799px'},ramenShops:[]},
{id:'toritudaigaku',name:'都立大学',position:{top:'1818px',left:'756px'},ramenShops:[]},
{id:'sinmaruko',name:'新丸子',position:{top:'1957px',left:'495px'},ramenShops:[]},
{id:'magome',name:'馬込',position:{top:'2145px',left:'1122px'},ramenShops:[]},
{id:'togosi',name:'戸越',position:{top:'2004px',left:'1266px'},ramenShops:[]},
{id:'takaramati',name:'宝町',position:{top:'1516px',left:'2622px'},ramenShops:[]},
{id:'nhigasinihonbasi',name:'東日本橋',position:{top:'1145px',left:'2673px'},ramenShops:[]},
{id:'asakusabasi',name:'浅草橋',position:{top:'1060px',left:'2626px'},ramenShops:[]},
{id:'kuramae',name:'蔵前',position:{top:'956px',left:'2630px'},ramenShops:[]},
{id:'honjoagatumabasi',name:'本所我妻橋',position:{top:'876px',left:'2724px'},ramenShops:[]},
{id:'osiage',name:'押上',position:{top:'879px',left:'2859px'},ramenShops:[]},
{id:'keiseihunabiki',name:'京成船曳',position:{top:'745px',left:'2974px'},ramenShops:[]},
{id:'yahiro',name:'八広',position:{top:'701px',left:'2975px'},ramenShops:[]},
{id:'yotugi',name:'四ツ木',position:{top:'654px',left:'2975px'},ramenShops:[]},
{id:'keiseitateisi',name:'京成立石',position:{top:'607px',left:'2975px'},ramenShops:[]},
{id:'aoto',name:'青砥',position:{top:'482px',left:'2975px'},ramenShops:[]},
{id:'keiseihatiman',name:'京成八幡',position:{top:'1006px',left:'3319px'},ramenShops:[]},
{id:'sugano',name:'菅野',position:{top:'946px',left:'3274px'},ramenShops:[]},
{id:'itikawamama',name:'市川真間',position:{top:'832px',left:'3274px'},ramenShops:[]},
{id:'kokuhudai',name:'国府台',position:{top:'720px',left:'3274px'},ramenShops:[]},
{id:'edogawa',name:'江戸川',position:{top:'605px',left:'3274px'},ramenShops:[]},
{id:'ohanajaya',name:'お花茶屋',position:{top:'496px',left:'2939px'},ramenShops:[]},
{id:'horikirisyoubuen',name:'堀切菖蒲園',position:{top:'498px',left:'2898px'},ramenShops:[]},
{id:'keiseisekiya',name:'京成関屋',position:{top:'536px',left:'2776px'},ramenShops:[]},
{id:'senjuoohasi',name:'千住大橋',position:{top:'494px',left:'2588px'},ramenShops:[]},
{id:'sinmikawajima',name:'新三河島',position:{top:'555px',left:'2303px'},ramenShops:[]},
{id:'mikawajima',name:'三河島',position:{top:'683px',left:'2404px'},ramenShops:[]},
{id:'sintomityo',name:'新富町',position:{top:'1624px',left:'2554px'},ramenShops:[]},
{id:'kojimati',name:'麹町',position:{top:'1227px',left:'1655px'},ramenShops:[]},
{id:'hikawadai',name:'氷川台',position:{top:'289px',left:'654px'},ramenShops:[]},
{id:'heiwadai',name:'平和台',position:{top:'195px',left:'559px'},ramenShops:[]},
{id:'tikatetuakatuka',name:'地下鉄赤塚',position:{top:'170px',left:'428px'},ramenShops:[]},
{id:'tikatetunarimasu',name:'地下鉄成増',position:{top:'174px',left:'354px'},ramenShops:[]},
{id:'narimasu',name:'成増',position:{top:'138px',left:'352px'},ramenShops:[]},
{id:'simoakatuka',name:'下赤塚',position:{top:'141px',left:'460px'},ramenShops:[]},
{id:'tobunerima',name:'東武練馬',position:{top:'304px',left:'708px'},ramenShops:[]},
{id:'kamiitabasi',name:'上板橋',position:{top:'351px',left:'756px'},ramenShops:[]},
{id:'tokiwadai',name:'ときわ台',position:{top:'369px',left:'856px'},ramenShops:[]},
{id:'nakaitabasi',name:'中板橋',position:{top:'369px',left:'963px'},ramenShops:[]},
{id:'kitaikebukuro',name:'北池袋',position:{top:'581px',left:'1176px'},ramenShops:[]},
{id:'simoitabasi',name:'下板橋',position:{top:'486px',left:'1149px'},ramenShops:[]},
{id:'oyama',name:'大山',position:{top:'395px',left:'1055px'},ramenShops:[]},
{id:'siinamati',name:'椎名町',position:{top:'579px',left:'937px'},ramenShops:[]},
{id:'higasinagasaki',name:'東長崎',position:{top:'538px',left:'898px'},ramenShops:[]},
{id:'sakuradai',name:'桜台',position:{top:'517px',left:'804px'},ramenShops:[]},
{id:'sinsakuradai',name:'新桜台',position:{top:'443px',left:'746px'},ramenShops:[]},
{id:'nakamurabasi',name:'中村橋',position:{top:'519px',left:'476px'},ramenShops:[]},
{id:'hujimidai',name:'富士見台',position:{top:'519px',left:'431px'},ramenShops:[]},
{id:'nerimatakanodai',name:'練馬高野台',position:{top:'519px',left:'386px'},ramenShops:[]},
{id:'syakujikouen',name:'石神井公園',position:{top:'519px',left:'341px'},ramenShops:[]},
{id:'ooizumigakuen',name:'大泉学園',position:{top:'519px',left:'297px'},ramenShops:[]},
{id:'hoya',name:'保谷',position:{top:'519px',left:'252px'},ramenShops:[]},
{id:'higasikurume',name:'東久留米',position:{top:'519px',left:'163px'},ramenShops:[]},
{id:'kamisyakujii',name:'上石神井',position:{top:'682px',left:'207px'},ramenShops:[]},
{id:'kamiigusa',name:'上井草',position:{top:'682px',left:'249px'},ramenShops:[]},
{id:'ihagi',name:'井萩',position:{top:'682px',left:'291px'},ramenShops:[]},
{id:'simoigusa',name:'下井草',position:{top:'682px',left:'332px'},ramenShops:[]},
{id:'saginomiya',name:'鷺ノ宮',position:{top:'682px',left:'374px'},ramenShops:[]},
{id:'toritukasei',name:'都立家政',position:{top:'682px',left:'414px'},ramenShops:[]},
{id:'nokata',name:'野方',position:{top:'682px',left:'456px'},ramenShops:[]},
{id:'numabukuro',name:'沼袋',position:{top:'682px',left:'498px'},ramenShops:[]},
{id:'araiyakusimae',name:'新井薬師前',position:{top:'682px',left:'539px'},ramenShops:[]},
{id:'nakai',name:'中井',position:{top:'682px',left:'624px'},ramenShops:[]},
{id:'simootiai',name:'下落合',position:{top:'722px',left:'797px'},ramenShops:[]},
{id:'otiai',name:'落合',position:{top:'759px',left:'669px'},ramenShops:[]},
{id:'okubo',name:'大久保',position:{top:'841px',left:'750px'},ramenShops:[]},
{id:'sendagaya',name:'千駄ヶ谷',position:{top:'1189px',left:'1159px'},ramenShops:[]},
{id:'sinanomati',name:'信濃町',position:{top:'1188px',left:'1303px'},ramenShops:[]},
{id:'kameido',name:'亀戸',position:{top:'1041px',left:'3092px'},ramenShops:[]},
{id:'hirai',name:'平井',position:{top:'1067px',left:'3143px'},ramenShops:[]},
{id:'sinkoiwa',name:'新小岩',position:{top:'1068px',left:'3178px'},ramenShops:[]},
{id:'koiwa',name:'小岩',position:{top:'1068px',left:'3212px'},ramenShops:[]},
{id:'itikawa',name:'市川',position:{top:'1068px',left:'3248px'},ramenShops:[]},
{id:'simousanakayama',name:'下総中山',position:{top:'1299px',left:'3298px'},ramenShops:[]},
{id:'genbokunakayama',name:'原木中山',position:{top:'1385px',left:'3302px'},ramenShops:[]},
{id:'minamigyoutoku',name:'南行徳',position:{top:'1385px',left:'3173px'},ramenShops:[]},
{id:'nisikasai',name:'西葛西',position:{top:'1385px',left:'3045px'},ramenShops:[]},
{id:'minamisunamati',name:'南砂町',position:{top:'1385px',left:'3002px'},ramenShops:[]},
{id:'toyotyo',name:'東陽町',position:{top:'1387px',left:'2960px'},ramenShops:[]},
{id:'kiba',name:'木場',position:{top:'1385px',left:'2918px'},ramenShops:[]},
{id:'mitakadai',name:'三鷹台',position:{top:'933px',left:'312px'},ramenShops:[]},
{id:'hujimigaoka',name:'富士見ヶ丘',position:{top:'1004px',left:'382px'},ramenShops:[]},
{id:'hamadayama',name:'浜田山',position:{top:'1069px',left:'448px'},ramenShops:[]},
{id:'nisieihuku',name:'西永福',position:{top:'1104px',left:'483px'},ramenShops:[]},
{id:'eihukutyo',name:'永福町',position:{top:'1134px',left:'513px'},ramenShops:[]},
{id:'higasimatubara',name:'東松原',position:{top:'1248px',left:'559px'},ramenShops:[]},
{id:'sindaita',name:'新代田',position:{top:'1311px',left:'559px'},ramenShops:[]},
{id:'ikenoue',name:'池ノ上',position:{top:'1445px',left:'618px'},ramenShops:[]},
{id:'komabatodaimae',name:'駒場東大前',position:{top:'1469px',left:'815px'},ramenShops:[]},
{id:'sinsen',name:'神泉',position:{top:'1469px',left:'959px'},ramenShops:[]},
{id:'ikejiriohasi',name:'池尻大橋',position:{top:'1485px',left:'896px'},ramenShops:[]},
{id:'sangendyaya',name:'三軒茶屋',position:{top:'1609px',left:'742px'},ramenShops:[]},
{id:'komazawadaigaku',name:'駒澤大学',position:{top:'1657px',left:'620px'},ramenShops:[]},
{id:'sakurasinmati',name:'桜新町',position:{top:'1657px',left:'551px'},ramenShops:[]},
{id:'yoga',name:'用賀',position:{top:'1657px',left:'471px'},ramenShops:[]},
{id:'nisitaisidou',name:'西太子堂',position:{top:'1607px',left:'692px'},ramenShops:[]},
{id:'wakabayasi',name:'若林',position:{top:'1607px',left:'636px'},ramenShops:[]},
{id:'syoinjinjamae',name:'松陰神社前',position:{top:'1607px',left:'576px'},ramenShops:[]},
{id:'setagaya',name:'世田谷',position:{top:'1607px',left:'511px'},ramenShops:[]},
{id:'kamimati',name:'上町',position:{top:'1607px',left:'439px'},ramenShops:[]},
{id:'miyanozaka',name:'宮野坂',position:{top:'1516px',left:'357px'},ramenShops:[]},
{id:'yamasita',name:'山下',position:{top:'1301px',left:'366px'},ramenShops:[]},
{id:'matubara',name:'松原',position:{top:'1243px',left:'358px'},ramenShops:[]},
{id:'kitami',name:'喜多見',position:{top:'1363px',left:'159px'},ramenShops:[]},
{id:'sosigayaookura',name:'祖師ヶ谷大蔵',position:{top:'1363px',left:'241px'},ramenShops:[]},
{id:'gotokuji',name:'豪徳寺',position:{top:'1386px',left:'390px'},ramenShops:[]},
{id:'umegaoka',name:'梅が丘',position:{top:'1364px',left:'443px'},ramenShops:[]},
{id:'higasikitazawa',name:'東北沢',position:{top:'1363px',left:'639px'},ramenShops:[]},
{id:'yoyogihatiman',name:'代々木八幡',position:{top:'1264px',left:'794px'},ramenShops:[]},
{id:'sangubasi',name:'参宮橋',position:{top:'1151px',left:'906px'},ramenShops:[]},
{id:'minamisinjuku',name:'南新宿',position:{top:'1112px',left:'946px'},ramenShops:[]},
{id:'rokakouen',name:'芦花公園',position:{top:'1200px',left:'176px'},ramenShops:[]},
{id:'hatimanyama',name:'八幡山',position:{top:'1201px',left:'213px'},ramenShops:[]},
{id:'kamikitazawa',name:'上北沢',position:{top:'1201px',left:'249px'},ramenShops:[]},
{id:'daitabasi',name:'代田橋',position:{top:'1201px',left:'673px'},ramenShops:[]},
{id:'hatudai',name:'初台',position:{top:'1117px',left:'893px'},ramenShops:[]},

{id:'minamiasagaya',name:'南阿佐ヶ谷',position:{top:'881px',left:'349px'},ramenShops:[]},
{id:'sinkouenji',name:'新高円寺',position:{top:'916px',left:'391px'},ramenShops:[]},
{id:'higasikouenji',name:'東高円寺',position:{top:'944px',left:'474px'},ramenShops:[]},
{id:'sinakano ',name:'新中野',position:{top:'946px',left:'527px'},ramenShops:[]},
{id:'honantyo',name:'方南町',position:{top:'1093px',left:'568px'},ramenShops:[]},
{id:'nakanohujimityo',name:'中野富士見町',position:{top:'1046px',left:'568px'},ramenShops:[]},
{id:'nakanosinbasi',name:'中野新橋',position:{top:'1003px',left:'567px'},ramenShops:[]},
{id:'nisisinjuku',name:'西新宿',position:{top:'946px',left:'801px'},ramenShops:[]},
{id:'yotuyasantyome',name:'四谷三丁目',position:{top:'1118px',left:'1361px'},ramenShops:[]},
{id:'akasakamituke',name:'赤坂見附',position:{top:'1510px',left:'1609px'},ramenShops:[]},

{id:'awajityo',name:'淡路町',position:{top:'1312px',left:'2090px'},ramenShops:[]},
{id:'omotesando',name:'表参道',position:{top:'1478px',left:'1243px'},ramenShops:[]},
{id:'aoyamaityoume',name:'青山一丁目',position:{top:'1499px',left:'1430px'},ramenShops:[]},
{id:'hanzomon',name:'半蔵門',position:{top:'1253px',left:'1723px'},ramenShops:[]},
{id:'toranomon',name:'虎ノ門',position:{top:'1632px',left:'1915px'},ramenShops:[]},
{id:'uenohirokouji',name:'上野広小路',position:{top:'1009px',left:'2107px'},ramenShops:[]},
{id:'inarimati',name:'稲荷町',position:{top:'832px',left:'2439px'},ramenShops:[]},
{id:'omorikaigan',name:'大森海岸',position:{top:'2326px',left:'1798px'},ramenShops:[]},
{id:'tatiaigawa',name:'立会川',position:{top:'2291px',left:'1798px'},ramenShops:[]},
{id:'samesu',name:'鮫洲',position:{top:'2252px',left:'1798px'},ramenShops:[]},
{id:'aomonoyokotyo',name:'青物横丁',position:{top:'2186px',left:'1798px'},ramenShops:[]},
{id:'sinbaba',name:'新馬場',position:{top:'2145px',left:'1798px'},ramenShops:[]},
{id:'kitasinagawa',name:'北品川',position:{top:'2102px',left:'1798px'},ramenShops:[]},
{id:'tukijisijo',name:'築地市場',position:{top:'1766px',left:'2526px'},ramenShops:[]},
{id:'kasairinkaikoen',name:'葛西臨海公園',position:{top:'1565px',left:'3054px'},ramenShops:[]},
{id:'siomi',name:'潮見',position:{top:'1575px',left:'2925px'},ramenShops:[]},
{id:'etyuujima',name:'越中島',position:{top:'1575px',left:'2846px'},ramenShops:[]},
{id:'akebonobasi',name:'曙橋',position:{top:'1016px',left:'1428px'},ramenShops:[]},
{id:'iwamototyo',name:'岩本町',position:{top:'1187px',left:'2339px'},ramenShops:[]},
{id:'bakuroyokoyama',name:'馬喰横山',position:{top:'1171px',left:'2575px'},ramenShops:[]},
{id:'hamatyo',name:'浜町',position:{top:'1186px',left:'2726px'},ramenShops:[]},
{id:'nisitakasimadaira',name:'西高島平',position:{top:'158px',left:'842px'},ramenShops:[]},
{id:'sintakasimadaira',name:'新高島平',position:{top:'158px',left:'909px'},ramenShops:[]},
{id:'takasimadaira',name:'高島平',position:{top:'158px',left:'961px'},ramenShops:[]},
{id:'nisidai',name:'西台',position:{top:'158px',left:'1000px'},ramenShops:[]},
{id:'hasune',name:'蓮根',position:{top:'158px',left:'1053px'},ramenShops:[]},
{id:'simurasantyome',name:'志村三丁目',position:{top:'158px',left:'1094px'},ramenShops:[]},
{id:'simurasakaue',name:'志村坂上',position:{top:'202px',left:'1136px'},ramenShops:[]},
{id:'motohasunuma',name:'本蓮沼',position:{top:'233px',left:'1168px'},ramenShops:[]},
{id:'itabasikuyakusyomae',name:'板橋区役所前',position:{top:'295px',left:'1233px'},ramenShops:[]},
{id:'nisisugamo',name:'西巣鴨',position:{top:'355px',left:'1405px'},ramenShops:[]},
{id:'sengoku',name:'千石',position:{top:'593px',left:'1682px'},ramenShops:[]},
{id:'sirayama',name:'白山',position:{top:'638px',left:'1682px'},ramenShops:[]},
{id:'hibiya',name:'日比谷',position:{top:'1507px',left:'2018px'},ramenShops:[]},
{id:'hiro',name:'広尾',position:{top:'1663px',left:'1320px'},ramenShops:[]},
{id:'iriya',name:'入谷',position:{top:'753px',left:'2450px'},ramenShops:[]},
{id:'kitaayase',name:'北綾瀬',position:{top:'268px',left:'2812px'},ramenShops:[]},
{id:'ayase',name:'綾瀬',position:{top:'303px',left:'2752px'},ramenShops:[]},
{id:'sendagi',name:'千駄木',position:{top:'737px',left:'2027px'},ramenShops:[]},
{id:'yoyogikoekn',name:'代々木公園',position:{top:'1332px',left:'944px'},ramenShops:[]},
{id:'kitasando',name:'北参道',position:{top:'1288px',left:'1257px'},ramenShops:[]},
{id:'hikarigaoka',name:'光が丘',position:{top:'335px',left:'545px'},ramenShops:[]},
{id:'nerimakasugatyou',name:'練馬春日町',position:{top:'368px',left:'578px'},ramenShops:[]},
{id:'tosimaen',name:'豊島園',position:{top:'410px',left:'609px'},ramenShops:[]},
{id:'sinegota',name:'新江古田',position:{top:'561px',left:'622px'},ramenShops:[]},
{id:'otiaihigasinagasaki',name:'落合東長崎',position:{top:'633px',left:'622px'},ramenShops:[]},
{id:'uenookatimati',name:'上野御徒町',position:{top:'927px',left:'2141px'},ramenShops:[]},
{id:'sinokatimati',name:'新御徒町',position:{top:'909px',left:'2464px'},ramenShops:[]},
{id:'kokuritukyougijou',name:'国立競技場',position:{top:'1311px',left:'1313px'},ramenShops:[]},
{id:'jujo',name:'十条',position:{top:'287px',left:'1334px'},ramenShops:[]},
{id:'ogu',name:'尾久',position:{top:'410px',left:'1947px'},ramenShops:[]},
{id:'kyodo',name:'経堂',position:{top:'1363px',left:'323px'},ramenShops:[]},
{id:'simo',name:'志茂',position:{top:'228px',left:'1655px'},ramenShops:[]},
{id:'nisigahara',name:'西ヶ原',position:{top:'313px',left:'1871px'},ramenShops:[]},
{id:'honkomagome',name:'本駒込',position:{top:'600px',left:'1873px'},ramenShops:[]},
{id:'todaimae',name:'東大前',position:{top:'646px',left:'1873px'},ramenShops:[]},
{id:'kameidosuijin',name:'亀戸水神',position:{top:'909px',left:'3091px'},ramenShops:[]},
{id:'higasiazuma',name:'東あずま',position:{top:'823px',left:'3056px'},ramenShops:[]},
{id:'komurai',name:'小村井',position:{top:'818px',left:'3014px'},ramenShops:[]},
{id:'hunabiki',name:'船曳',position:{top:'817px',left:'2868px'},ramenShops:[]},
{id:'kanigahuti',name:'鐘ヶ淵',position:{top:'645px',left:'2873px'},ramenShops:[]},
{id:'horikiri',name:'堀切',position:{top:'563px',left:'2872px'},ramenShops:[]},
{id:'usita',name:'牛田',position:{top:'446px',left:'2773px'},ramenShops:[]},
{id:'kosuga',name:'小菅',position:{top:'385px',left:'2695px'},ramenShops:[]},
{id:'gotanno',name:'五反野',position:{top:'314px',left:'2586px'},ramenShops:[]},
{id:'umejima',name:'梅島',position:{top:'287px',left:'2558px'},ramenShops:[]},
{id:'nisiarai',name:'西新井',position:{top:'220px',left:'2497px'},ramenShops:[]},
{id:'daisimae',name:'大師前',position:{top:'175px',left:'2408px'},ramenShops:[]},
{id:'takenotuka',name:'竹ノ塚',position:{top:'189px',left:'2496px'},ramenShops:[]},
{id:'tanituka',name:'谷塚',position:{top:'154px',left:'2497px'},ramenShops:[]},
{id:'souka',name:'草加',position:{top:'115px',left:'2498px'},ramenShops:[]},
{id:'sibamata',name:'柴又',position:{top:'426px',left:'3075px'},ramenShops:[]},
{id:'kanemati',name:'金町（京成金町）',position:{top:'339px',left:'3021px'},ramenShops:[]},
{id:'kameari',name:'亀有',position:{top:'313px',left:'2946px'},ramenShops:[]},
{id:'sijoumae',name:'市場前',position:{top:'1962px',left:'2879px'},ramenShops:[]},
{id:'ariaketenisunomori',name:'有明テニスの森',position:{top:'2017px',left:'2839px'},ramenShops:[]},
{id:'kokusaitenjijoumae',name:'国際展示場前',position:{top:'2089px',left:'2708px'},ramenShops:[]},
{id:'oumi',name:'青海',position:{top:'2092px',left:'2669px'},ramenShops:[]},
{id:'terekomusenta-',name:'テレコムセンター',position:{top:'2092px',left:'2624px'},ramenShops:[]},
{id:'hunenokagakukan',name:'船の科学館',position:{top:'2091px',left:'2582px'},ramenShops:[]},
{id:'daiba',name:'台場',position:{top:'2018px',left:'2519px'},ramenShops:[]},
{id:'waseda-toden',name:'早稲田（都電）',position:{top:'825px',left:'1356px'},ramenShops:[]},
{id:'omokagebasi',name:'面影橋',position:{top:'787px',left:'1320px'},ramenShops:[]},
{id:'gakusyuinsita',name:'学習院下',position:{top:'748px',left:'1321px'},ramenShops:[]},
{id:'tukumogamimae',name:'鬼子母神前',position:{top:'713px',left:'1372px'},ramenShops:[]},
{id:'todenzousigaya',name:'都電雑司ヶ谷',position:{top:'680px',left:'1319px'},ramenShops:[]},
{id:'mukoubara',name:'向原',position:{top:'585px',left:'1404px'},ramenShops:[]},
{id:'sigasiikebukuroyontyo-me',name:'東池袋四丁目',position:{top:'634px',left:'1395px'},ramenShops:[]},
{id:'sugamosinden',name:'巣鴨新田',position:{top:'460px',left:'1504px'},ramenShops:[]},
{id:'kosinduka',name:'庚申塚',position:{top:'428px',left:'1503px'},ramenShops:[]},
{id:'sinkosinduka',name:'新庚申塚',position:{top:'402px',left:'1503px'},ramenShops:[]},
{id:'nisigararayontyome',name:'西ヶ原四丁目',position:{top:'365px',left:'1583px'},ramenShops:[]},
{id:'sakaemati',name:'栄町',position:{top:'199px',left:'1869px'},ramenShops:[]},
{id:'kajiwara',name:'梶原',position:{top:'200px',left:'1907px'},ramenShops:[]},
{id:'arakawasyakomae',name:'荒川車庫前',position:{top:'239px',left:'1950px'},ramenShops:[]},
{id:'arakawayuentimae',name:'荒川遊園地前',position:{top:'284px',left:'1994px'},ramenShops:[]},
{id:'odai',name:'小台',position:{top:'311px',left:'2023px'},ramenShops:[]},
{id:'miyanomae',name:'宮ノ前',position:{top:'346px',left:'2059px'},ramenShops:[]},
{id:'kumanomae',name:'熊野前',position:{top:'365px',left:'2158px'},ramenShops:[]},
{id:'higasiogusantyome',name:'東尾久三丁目',position:{top:'368px',left:'2311px'},ramenShops:[]},
{id:'matiyanityome',name:'町屋二丁目',position:{top:'368px',left:'2429px'},ramenShops:[]},
{id:'arakawananatyome',name:'荒川七丁目',position:{top:'494px',left:'2532px'},ramenShops:[]},
{id:'arakawanityome',name:'荒川二丁目',position:{top:'531px',left:'2532px'},ramenShops:[]},
{id:'arakawaityumae',name:'荒川一中前',position:{top:'607px',left:'2532px'},ramenShops:[]},
{id:'minowabasi',name:'三ノ輪橋',position:{top:'644px',left:'2532px'},ramenShops:[]},
{id:'uguisudani',name:'鶯谷',position:{top:'762px',left:'2241px'},ramenShops:[]},
{id:'nisiarakawataisinisi',name:'西荒川大師西',position:{top:'168px',left:'2150px'},ramenShops:[]},
{id:'ekita',name:'江北',position:{top:'203px',left:'2150px'},ramenShops:[]},
{id:'takano',name:'高野',position:{top:'241px',left:'2150px'},ramenShops:[]},
{id:'ougioohasi',name:'扇大橋',position:{top:'278px',left:'2150px'},ramenShops:[]},
{id:'adatiodai',name:'足立小台',position:{top:'316px',left:'2151px'},ramenShops:[]},
{id:'akatutisyogakkoumae',name:'赤土小学校前',position:{top:'411px',left:'2149px'},ramenShops:[]},
{id:'sinonome',name:'東雲',position:{top:'1934px',left:'2991px'},ramenShops:[]},
{id:'sinagawasi-saido',name:'品川シーサイド',position:{top:'2167px',left:'1946px'},ramenShops:[]},
{id:'ooikeibajoumae',name:'大井競馬場前',position:{top:'2103px',left:'2019px'},ramenShops:[]},
{id:'ryutu-senta-',name:'流通センター',position:{top:'2136px',left:'2020px'},ramenShops:[]},
{id:'syowajima',name:'昭和島',position:{top:'2165px',left:'2020px'},ramenShops:[]},
{id:'seibijo',name:'整備場',position:{top:'2195px',left:'2020px'},ramenShops:[]},
{id:'tenkubasi',name:'天空橋',position:{top:'2275px',left:'2020px'},ramenShops:[]},
{id:'takinogawaittyoume',name:'滝野川一丁目',position:{top:'318px',left:'1735px'},ramenShops:[]},
{id:'nisikoyama',name:'西小山',position:{top:'1826px',left:'974px'},ramenShops:[]},
{id:'okusawa',name:'奥沢',position:{top:'1967px',left:'722px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},
{id:'',name:'',position:{top:'px',left:'px'},ramenShops:[]},





];



// アプリのメインの部分。ここに書かれた内容がウェブサイトに表示されます。
function App() {
  // `selectedStation` は、今、どの駅のラーメン情報が表示されているかを記憶する箱です。
  // `setSelectedStation` は、その箱の中身を変更するための命令です。
  // 最初は何も表示されていないので `null`（空っぽ）です。
  const [selectedStation, setSelectedStation] = React.useState(null);

  // 駅のボタンがクリックされたときに動く命令です。
  // クリックされた駅の情報を `selectedStation` に記憶させます。
  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  // ラーメン情報が表示されているポップアップ（モーダル）の「閉じる」ボタンがクリックされたときに動く命令です。
  // `selectedStation` を空っぽにして、ポップアップを閉じます。
  const handleCloseModal = () => {
    setSelectedStation(null);
  };

  return (
    // アプリ全体の入れ物となる一番外側の箱
    <div className="App">
      {/* 路線図を表示するエリア。CSSで背景画像を設定します。 */}
      <div className="map-container">
        {/* この img タグは、CSSで背景画像を設定するためにも必要です。 */}
        <img src={lineImage} alt="東京路線図" className="line-map-image" />

        {/*
          stationDataの各駅の情報を使って、一つずつボタンを作ります。
          map() は、リストの項目を一つずつ取り出して何かをするための命令です。
        */}
        {stationData.map((station) => (
          // 駅のボタン
          <button
            key={station.id} // それぞれのボタンを区別するための名前（重要！）
            className="station-button" // CSSで見た目を設定するための名前
            // ボタンの位置を、stationDataで設定したtopとleftに合わせて決めます
            style={{ top: station.position.top, left: station.position.left }}
            // このボタンがクリックされたら、handleStationClickの命令を実行します
            onClick={() => handleStationClick(station)}
          >
            {station.name} {/* ボタンに表示される駅の名前 */}
          </button>
        ))}
      </div>

      {/*
        ラーメン屋さんの情報が表示されるポップアップ（モーダル）の部分。
        `selectedStation && (...)` は、「もしselectedStationに何か情報が入っていたら(...)の中身を表示する」という意味です。
        つまり、駅のボタンがクリックされた時だけ表示されます。
      */}
      {selectedStation && (
        <div className="modal-overlay"> {/* ポップアップの背景（半透明の黒い部分） */}
          <div className="modal-content"> {/* ポップアップの中身 */}
            <h2>{selectedStation.name} のラーメン屋さん</h2> {/* クリックされた駅の名前を表示 */}
            {selectedStation.ramenShops.length > 0 ? ( // ラーメン情報がある場合
              <ul> {/* ラーメン屋さんのリスト */}
                {/*
                  選択された駅のramenShops（ラーメン屋さんリスト）を一つずつ取り出して表示します。
                */}
                {selectedStation.ramenShops.map((shop, index) => (
                  <li key={index}> {/* リストの項目一つ一つ */}
                    <h3>{shop.name}</h3> {/* ラーメン屋さんの名前 */}
                    <p>{shop.description}</p> {/* ラーメン屋さんの説明 */}
                    <p>評価: {shop.rating} / 5</p> {/* ラーメン屋さんの評価 */}
                  </li>
                ))}
              </ul>
            ) : ( // ラーメン情報がない場合
              <p>この駅には現在、おすすめのラーメン情報がありません。</p>
            )}
            {/* ポップアップを閉じるボタン */}
            <button onClick={handleCloseModal} className="close-button">閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}

// このAppコンポーネントを他のファイルでも使えるようにするおまじない
export default App;