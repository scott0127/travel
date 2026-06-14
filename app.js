const images = {
  airport:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Gimhae_International_Airport.jpg/960px-Gimhae_International_Airport.jpg",
  seomyeon:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Seomyeon%2C_Busan.jpg/960px-Seomyeon%2C_Busan.jpg",
  gamcheon:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Colorful_houses_in_Gamcheon_Culture_Village_at_sunset_in_Busan_South_Korea.jpg/960px-Colorful_houses_in_Gamcheon_Culture_Village_at_sunset_in_Busan_South_Korea.jpg",
  huinnyeoul:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Huinnyeoul_Culture_Village.jpg/960px-Huinnyeoul_Culture_Village.jpg",
  songdo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Songdo_Beach_Area_and_Namhang_Bridge_in_Busan.jpg/960px-Songdo_Beach_Area_and_Namhang_Bridge_in_Busan.jpg",
  songdoSkywalk:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Songdo_Cloud_Trails_Skywalk_Songdo_Beach_Busan_%2845749115681%29.jpg/960px-Songdo_Cloud_Trails_Skywalk_Songdo_Beach_Busan_%2845749115681%29.jpg",
  blueline:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sky_Capsule_train_at_Haeundae_Blueline_Park%2C_Busan.jpg/960px-Sky_Capsule_train_at_Haeundae_Blueline_Park%2C_Busan.jpg",
  xsky:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Haeundae_Beach_20200522_005.jpg/960px-Haeundae_Beach_20200522_005.jpg",
  haeundaeMarket:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Haeundae_market_%28%ED%95%B4%EC%9A%B4%EB%8C%80%EC%8B%9C%EC%9E%A5%29.JPG/960px-Haeundae_market_%28%ED%95%B4%EC%9A%B4%EB%8C%80%EC%8B%9C%EC%9E%A5%29.JPG",
  yonggungsa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Haedong_Yonggungsa_Temple%2C_Busan%2C_South_Korea.jpg/960px-Haedong_Yonggungsa_Temple%2C_Busan%2C_South_Korea.jpg",
  haeundaeBeach:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Haeundae_Beach_NightView.jpg/960px-Haeundae_Beach_NightView.jpg",
  gwangalli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Busan_Gwangalli_Night.jpg/960px-Busan_Gwangalli_Night.jpg",
  shinsegae:
    "https://upload.wikimedia.org/wikipedia/commons/2/22/Shinsegae_in_Busan-_Guinness_World_Record.jpg",
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  breakfast:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
  pasta:
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
  coffee:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  bakery:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
  oceanCafe:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  marketFood:
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80",
  beauty:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  spa:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  portrait:
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
  unagi:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
};

const exactImages = new Set([
  images.airport,
  images.seomyeon,
  images.gamcheon,
  images.huinnyeoul,
  images.songdo,
  images.songdoSkywalk,
  images.blueline,
  images.xsky,
  images.haeundaeMarket,
  images.yonggungsa,
  images.haeundaeBeach,
  images.gwangalli,
  images.shinsegae,
]);

const photoPools = {
  airport: [images.airport, images.seomyeon, images.hotel],
  hotel: [images.hotel, images.seomyeon, images.haeundaeBeach],
  breakfast: [images.breakfast, images.bakery, images.coffee],
  culture: [images.gamcheon, images.huinnyeoul, images.seomyeon],
  food: [images.restaurant, images.marketFood, images.breakfast],
  cafe: [images.coffee, images.oceanCafe, images.bakery],
  ocean: [images.oceanCafe, images.haeundaeBeach, images.gwangalli],
  songdo: [images.songdo, images.songdoSkywalk, images.gwangalli],
  blueline: [images.blueline, images.haeundaeBeach, images.oceanCafe],
  market: [images.haeundaeMarket, images.marketFood, images.haeundaeBeach],
  temple: [images.yonggungsa, images.haeundaeBeach, images.oceanCafe],
  shopping: [images.shinsegae, images.beauty, images.seomyeon],
  beach: [images.haeundaeBeach, images.gwangalli, images.oceanCafe],
  beauty: [images.beauty, images.shinsegae, images.portrait],
  default: [images.seomyeon, images.haeundaeBeach, images.coffee],
};

function photo(url, source, sourceUrl) {
  return { url, source, sourceUrl };
}

const sourcePages = {
  tripleAirport: "https://triple.guide/attractions/7887e0b4-3bb8-47da-859d-8fabe7d172bf",
  tripleAirportInfo: "https://triple.guide/articles/8d154912-00c3-4d17-b91b-dc3ca2eac643",
  hotel: "https://urban-groove-seomyeon.busan-hotel.com/en/",
  eggdrop: "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=46417",
  gamcheon: "https://triple.guide/attractions/09ee4020-dc43-4f27-b9a6-c2ec34684764",
  huinnyeoul: "https://triple.guide/attractions/7ac80a45-4df8-4d81-a31a-fe8321910051",
  merci: "https://triple.guide/restaurants/daf695c3-e0dc-4d45-9ace-f0296954dcee",
  momos: "https://triple.guide/restaurants/4bfbb5db-2df4-4e18-9a13-708dd20b5139",
  momosMapstr: "https://mapstr.com/place/C75O3UBn8L",
  thrill: "https://triple.guide/restaurants/37055731-95e3-4c84-b48e-7ae64b589ee2",
  songdoCable: "https://triple.guide/attractions/664a4797-1a14-4d60-b251-2b72d262fd7a",
  songdoBridge: "https://triple.guide/attractions/449ea3c3-69d3-4c1d-a202-9c962b2fb7eb",
  haechi: "https://www.bigfang.tw/blog/post/83haechi-bbq-seomyeon",
  haechiPolle: "https://polle.com/place/37Wx9a/83%20%ED%95%B4%EC%B9%98",
  oliveYoung: "https://www.studioconte.net/landscape-1/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%EC%84%9C%EB%A9%B4%ED%83%80%EC%9A%B4%EC%A0%90",
  oliveNews: "https://corp.oliveyoung.com/ko/news/22?category=&pg=1",
  lasoop: "https://rudalsfprh.tistory.com/48",
  cove: "https://triple.guide/hotels/bc71e54e-2169-450a-bc00-e78111dd1186",
  codSoup: "https://triple.guide/restaurants/daf695c3-e0dc-4d45-9ace-f0296954dcee",
  mumu: "https://triple.guide/restaurants/4515688b-01f5-4aa6-8b33-23e4f4f1eae5",
  bluelineMipo: "https://triple.guide/attractions/9da754a8-6789-46d4-8abe-b7966eccb4f0",
  bluelineCheongsapo: "https://triple.guide/attractions/ef11bb82-5aee-41f6-a01a-73a5c36713a9",
  cheongsapoBridge: "https://triple.guide/attractions/9add2a10-4fad-4146-8b58-a576fe768e44",
  diart: "https://triple.guide/restaurants/71fda8d7-cf5b-4e25-8a7a-ef9cd5d4a0e0",
  xSky: "https://triple.guide/attractions/91b00bef-56f1-4fd8-8931-3afc4033f9ce",
  haemok: "https://triple.guide/restaurants/dd317d9b-9d03-445e-9db4-354f7e8f87d8",
  haeundaeMarket: "https://triple.guide/attractions/4c6f4e97-f43a-472e-afc4-46459d55db1f",
  yonggungsa: "https://triple.guide/attractions/1264eccd-3031-448c-b3e9-fdac7a1e161a",
  luge: "https://triple.guide/attractions/a8627a16-69ea-455c-bca4-6544862fe9c6",
  jeonpo: "https://triple.guide/attractions/a5bc0d88-f5c2-46d7-a294-c4081da2a7fd",
  spaLand: "https://triple.guide/attractions/6d5b9203-b513-4967-8610-582e27db1ccb",
  shinsegae: "https://triple.guide/attractions/e8cac020-e22e-49c6-a88d-cb2c8c7c9925",
  nohong: "https://triple.guide/restaurants/aea32d1e-0497-48b1-8952-904c3302ecb6",
  porkSoup: "https://triple.guide/restaurants/a90626a8-e89a-46cd-bd86-19aa2a5d9b8c",
  delight: "https://corp.oliveyoung.com/ko/news/58?category=OYN&pg=1",
  delightNewsroom: "https://newsroom.cj.net/a-new-must-visit-in-busan-olive-youngs-first-korean-snacks-store/",
};

const verifiedPhotos = {
  "BUSAN 釜山 PUS Terminal I": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/0eaa3808-a606-447c-bdfa-59c8d427db98.jpeg", "Triple 김해 국제공항", sourcePages.tripleAirport),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/68096d97-2257-41ed-bc8e-9d169543dbb1.jpeg", "Triple 김해 국제공항", sourcePages.tripleAirport),
    photo(images.airport, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Gimhae_International_Airport.jpg"),
  ],
  "Urban Groove Hotel": [
    photo("https://urban-groove-seomyeon.busan-hotel.com/data/Imgs/1080x700w/16339/1633931/1633931582/img-urban-groove-hotel-seomyeon-busan-1.JPEG", "Urban Groove hotel gallery", sourcePages.hotel),
    photo("https://urban-groove-seomyeon.busan-hotel.com/data/Imgs/450x450w/16339/1633931/1633931411/img-urban-groove-hotel-seomyeon-busan-2.JPEG", "Urban Groove hotel gallery", sourcePages.hotel),
    photo("https://urban-groove-seomyeon.busan-hotel.com/data/Imgs/450x450w/16339/1633931/1633931419/img-urban-groove-hotel-seomyeon-busan-3.JPEG", "Urban Groove hotel gallery", sourcePages.hotel),
    photo("https://urban-groove-seomyeon.busan-hotel.com/data/Imgs/450x450w/16339/1633931/1633931431/img-urban-groove-hotel-seomyeon-busan-4.JPEG", "Urban Groove hotel gallery", sourcePages.hotel),
  ],
  "EGGDROP 西面店": [
    photo("https://tong.visitkorea.or.kr/cms/resource/61/3109061_image2_1.jpg", "Visit Korea EGGDROP Seomyeon Lotte Back Gate", sourcePages.eggdrop),
    photo("https://tong.visitkorea.or.kr/cms/resource/62/3109062_image2_1.jpg", "Visit Korea EGGDROP Seomyeon Lotte Back Gate", sourcePages.eggdrop),
    photo("https://tong.visitkorea.or.kr/cms/resource/63/3109063_image2_1.jpg", "Visit Korea EGGDROP Seomyeon Lotte Back Gate", sourcePages.eggdrop),
    photo("https://tong.visitkorea.or.kr/cms/resource/64/3109064_image2_1.jpg", "Visit Korea EGGDROP Seomyeon Lotte Back Gate", sourcePages.eggdrop),
  ],
  甘川洞文化村: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/8963246c-2f7d-4d6b-8a02-2ef38909de75.jpg", "Triple 감천 문화 마을", sourcePages.gamcheon),
    photo(images.gamcheon, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Colorful_houses_in_Gamcheon_Culture_Village_at_sunset_in_Busan_South_Korea.jpg"),
  ],
  "merci nook": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/aadb7fa5-ab03-4ba6-9d8f-26516c6f8488.jpeg", "Triple 메르시누크", sourcePages.merci),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/76eb293a-5473-4763-be36-4f8b445e625b.jpeg", "Triple 메르시누크", sourcePages.merci),
  ],
  白淺灘文化村步道: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/dad0039e-3fe7-4648-b972-2e5a8aeb7e00.jpeg", "Triple 흰여울 문화 마을", sourcePages.huinnyeoul),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e834d5a8-70c4-4677-899c-2b483a2d8b4f.jpeg", "Triple 흰여울 문화 마을", sourcePages.huinnyeoul),
    photo(images.huinnyeoul, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Huinnyeoul_Culture_Village.jpg"),
  ],
  "Momos Coffee 影島店": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/74ae9deb-df25-4fa4-9311-a10ead80079c.jpeg", "Triple 모모스 커피 영도 로스터리 앤 커피 바", sourcePages.momos),
    photo("https://images.mapstr.com/e936fe829914c79077e5602ef3271709_profilePhoto.jpg", "Mapstr Momos Coffee Yeongdo", sourcePages.momosMapstr),
    photo("https://images.mapstr.com/1c02e0a9f84a11141ca0584feef60b9b_mamieboude.jpg", "Mapstr Momos Coffee Yeongdo", sourcePages.momosMapstr),
  ],
  "THRILL ON THE MUG": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e2a40356-0880-4ee5-b5ea-242956bfe181.jpeg", "Triple 스릴 온 더 머그", sourcePages.thrill),
  ],
  松島海上纜車站: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/9c781c1e-6694-448b-b70e-bb6007af2bb2.jpeg", "Triple 송도해상케이블카", sourcePages.songdoCable),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/35988a77-22e7-44b0-ba4e-41c43e43122e.jpeg", "Triple 송도해상케이블카", sourcePages.songdoCable),
    photo(images.songdo, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Songdo_Beach_Area_and_Namhang_Bridge_in_Busan.jpg"),
  ],
  "松島纜車 + 龍宮雲橋": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/fe0c294a-c0eb-41dc-947c-b9c494d2c2ac.jpeg", "Triple 송도 용궁 구름다리", sourcePages.songdoBridge),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/36c71359-8493-48b9-b899-3141f8727d58.jpeg", "Triple 송도 용궁 구름다리", sourcePages.songdoBridge),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/5fd3e293-60b4-4d72-b15b-05a11b7d9593.jpeg", "Triple 송도 용궁 구름다리", sourcePages.songdoBridge),
  ],
  "83獬豸": [
    photo("https://img.bigfang.tw/2024/09/1727089211-4efdd2f969559e8b1c92e99f32ded48e.jpg", "樂活的大方 83 Haechi 西面店", sourcePages.haechi),
    photo("https://d2uja84sd90jmv.cloudfront.net/posts/SG4DhcvoAgg699uh_7QcEg/ms.jpg?updated=-62167392000", "Polle 83 해치", sourcePages.haechiPolle),
    photo("https://d2uja84sd90jmv.cloudfront.net/posts/6S6E_eq6bewVstoOUZvIjw/ms.jpg?updated=-62167392000", "Polle 83 해치", sourcePages.haechiPolle),
  ],
  "OLIVE YOUNG 西面 Town 店": [
    photo("https://static.wixstatic.com/media/ea1beb_88b8df3264ec4be5a0208b78807c9cfa~mv2.jpg/v1/fill/w_1302,h_864,q_90,enc_avif,quality_auto/ea1beb_88b8df3264ec4be5a0208b78807c9cfa~mv2.jpg", "Studio Conte OLIVE YOUNG Seomyeon-town", sourcePages.oliveYoung),
    photo("https://static.wixstatic.com/media/ea1beb_35a55fe60f5442c9a9427141db54f001~mv2.jpg/v1/fill/w_638,h_864,q_90,enc_avif,quality_auto/ea1beb_35a55fe60f5442c9a9427141db54f001~mv2.jpg", "Studio Conte OLIVE YOUNG Seomyeon-town", sourcePages.oliveYoung),
    photo("https://d10yximrhdxai4.cloudfront.net/news/73bdf4083f72442596280d779e25ea12.jpg", "CJ Olive Young news", sourcePages.oliveNews),
  ],
  LASOOP: [
    photo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbfJVV5%2FdJMcaiQOLMn%2FAAAAAAAAAAAAAAAAAAAAAAMqc47NscJkB0JbFmT-c068rHCc8mWY0XZXbgJVX0Uj%2Fimg.png", "Tistory LASOOP Busan Seomyeon", sourcePages.lasoop),
    photo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcEuPPI%2FdJMcaiQOLMl%2FAAAAAAAAAAAAAAAAAAAAAIqVI_3l2WTVz_s34r0lOnEOayYVgN5soA-L4hBzVntU%2Fimg.png", "Tistory LASOOP Busan Seomyeon", sourcePages.lasoop),
    photo("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FPSuAT%2FdJMcajoBByf%2FAAAAAAAAAAAAAAAAAAAAAOBahftp-RKbyhU8ruuKuRsvtupdZa8B_8mlyDGYOk0g%2Fimg.png", "Tistory LASOOP Busan Seomyeon", sourcePages.lasoop),
  ],
  "Cove Stay Haeundae": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/39a6d231-9ae7-46dc-8e0f-0e2f47b23d6b", "Triple 코브스테이 해운대", sourcePages.cove),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/ab85eb46-3fac-4330-ae77-430c20d99976", "Triple 코브스테이 해운대", sourcePages.cove),
  ],
  瓦房鱈魚湯: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/aadb7fa5-ab03-4ba6-9d8f-26516c6f8488.jpeg", "Triple 해운대 기와집 대구탕", sourcePages.codSoup),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/76eb293a-5473-4763-be36-4f8b445e625b.jpeg", "Triple 해운대 기와집 대구탕", sourcePages.codSoup),
  ],
  "Who's Who MUMU Bakery": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/5b47cdbc-a11e-4ea3-9b9a-b138e28c0781.jpeg", "Triple 후스 후 무무", sourcePages.mumu),
  ],
  "海雲台藍線公園 尾浦站": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/c1df1d40-6470-409c-bc55-decc5209947b.jpeg", "Triple 해운대블루라인파크 미포정거장", sourcePages.bluelineMipo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/4b498fa9-b01d-4ff4-a20b-462db3102755.jpeg", "Triple 해운대블루라인파크 미포정거장", sourcePages.bluelineMipo),
    photo(images.blueline, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sky_Capsule_train_at_Haeundae_Blueline_Park,_Busan.jpg"),
  ],
  膠囊列車到青沙浦站: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e4206afd-39ef-4203-80c5-ec661bb77f74.jpeg", "Triple 해운대블루라인파크 청사포정거장", sourcePages.bluelineCheongsapo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a0d88aea-425e-4892-b93c-86c353ead2b3.jpeg", "Triple 해운대블루라인파크 청사포정거장", sourcePages.bluelineCheongsapo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/6c786206-99de-4298-ad28-fbaafdae3aef.jpeg", "Triple 해운대블루라인파크 청사포정거장", sourcePages.bluelineCheongsapo),
  ],
  青沙浦平交道拍照點: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/42d7e9df-90e2-4229-b8f8-633fe6dca476.jpg", "Triple 청사포 다릿돌 전망대", sourcePages.cheongsapoBridge),
    photo(images.blueline, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Sky_Capsule_train_at_Haeundae_Blueline_Park,_Busan.jpg"),
  ],
  "DIART coffee 青沙浦店": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/58cf7e3d-e80d-4991-b169-71fee24b78af.jpg", "Triple 디아트 커피", sourcePages.diart),
    photo("https://d3eojyj97pe1ag.cloudfront.net/1465/16346330092297285.jpg", "LOYQU DIART coffee", "https://en.loyqu.com/korea/busan/place/5ad86340-44ef-11f0-8844-0ad70370206b"),
  ],
  "釜山 X the SKY": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/710292bb-7962-424b-a4ec-573a10f16461.jpeg", "Triple 부산엑스더스카이", sourcePages.xSky),
    photo(images.xsky, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_20200522_005.jpg"),
  ],
  "海木 鰻魚飯": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a088460f-046a-492f-bf8d-ecab0cd77335.jpeg", "Triple 해목", sourcePages.haemok),
  ],
  海雲台傳統市場: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b301c3b8-b23e-44a2-adde-8ef3da5b5d93.jpeg", "Triple 해운대 시장", sourcePages.haeundaeMarket),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/c783a06b-fb66-40c5-898f-5dd0b97e4174.jpg", "Triple 해운대 시장", sourcePages.haeundaeMarket),
    photo(images.haeundaeMarket, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haeundae_market_(%ED%95%B4%EC%9A%B4%EB%8C%80%EC%8B%9C%EC%9E%A5).JPG"),
  ],
  海東龍宮寺: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/446fed06-c23d-44c5-aa93-86f61bb67406.jpeg", "Triple 해동 용궁사", sourcePages.yonggungsa),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/34325e45-4a87-45b6-b16b-2561057df8a8.jpeg", "Triple 해동 용궁사", sourcePages.yonggungsa),
    photo(images.yonggungsa, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple,_Busan,_South_Korea.jpg"),
  ],
  "Skyline Luge Busan": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/58a126d1-d2c5-4225-ae3f-590473f489fc.jpeg", "Triple 스카이라인 루지", sourcePages.luge),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f46532af-a08e-4ca3-aea2-93f07fc89c7a.jpeg", "Triple 스카이라인 루지", sourcePages.luge),
  ],
  海雲台傳統市場吃中餐: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/b301c3b8-b23e-44a2-adde-8ef3da5b5d93.jpeg", "Triple 해운대 시장", sourcePages.haeundaeMarket),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/c783a06b-fb66-40c5-898f-5dd0b97e4174.jpg", "Triple 해운대 시장", sourcePages.haeundaeMarket),
    photo(images.haeundaeMarket, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haeundae_market_(%ED%95%B4%EC%9A%B4%EB%8C%80%EC%8B%9C%EC%9E%A5).JPG"),
  ],
  海雲台海邊: [
    photo(images.haeundaeBeach, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_NightView.jpg"),
    photo(images.xsky, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_20200522_005.jpg"),
  ],
  "廣安里 M 無人機燈光秀": [
    photo(images.gwangalli, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Busan_Gwangalli_Night.jpg"),
  ],
  海雲台傳統市場晚餐: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/73196ecc-d9e2-4cd7-8151-4e4c0232c7a2.jpeg", "Triple 노홍 만두", sourcePages.nohong),
  ],
  田浦咖啡街: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/c0cc0c4b-656a-492b-a55b-b30c1849fef9.jpeg", "Triple 전포 카페 거리", sourcePages.jeonpo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/78ea3582-b7c4-4b5e-96e4-08bad36fb743.jpeg", "Triple 전포 카페 거리", sourcePages.jeonpo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/732ab7f7-b0f3-4db8-af40-aef4b2613c93.jpeg", "Triple 전포 카페 거리", sourcePages.jeonpo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/3f14a22e-3db5-4512-b254-225a5bacfad9.jpeg", "Triple 전포 카페 거리", sourcePages.jeonpo),
  ],
  "新世界百貨 Centum City 汗蒸幕": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/9663312b-0910-4682-92bb-6e2deee35110.jpeg", "Triple 스파랜드 신세계 백화점 센텀시티 점", sourcePages.spaLand),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/9308063a-57d2-4290-b040-a5894f9e9987.jpeg", "Triple 스파랜드 신세계 백화점 센텀시티 점", sourcePages.spaLand),
  ],
  "新世界 B1/B2 伴手禮": [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/8852283a-fc04-4874-bbc1-13a069bbb611.jpeg", "Triple 신세계 백화점 센텀시티 점", sourcePages.shinsegae),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d087f6e2-3de6-4e62-a1c4-70d883923c45.jpeg", "Triple 신세계 백화점 센텀시티 점", sourcePages.shinsegae),
    photo(images.shinsegae, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Shinsegae_in_Busan-_Guinness_World_Record.jpg"),
  ],
  水邊最高豬肉湯飯: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/ca9fe85f-062e-49c4-bb49-0d34ca591a87.jpeg", "Triple 수변 최고 돼지국밥 해운대 점", sourcePages.porkSoup),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a916ee20-341a-4c88-b17f-5a85068ade95.jpeg", "Triple 수변 최고 돼지국밥 미포 점", "https://triple.guide/restaurants/e1e6c43d-e0fe-43d0-948e-e4cb7e57916b"),
  ],
  "Delight Project": [
    photo("https://d10yximrhdxai4.cloudfront.net/editor/2797cb7a3ae9422b99ddc3564d4f99c2.jpg", "CJ Olive Young Delight Project news", sourcePages.delight),
    photo("https://d10yximrhdxai4.cloudfront.net/news/f4dbc88156554b37b2e44ff0b01c1dce.png", "CJ Olive Young Delight Project news", sourcePages.delight),
    photo("https://img.newsroom.cj.net/wp-content/uploads/2025/12/CJ-Newsroom-Olive-Youngs-First-Korean-Snacks-Store-1.jpg", "CJ Newsroom Delight Project", sourcePages.delightNewsroom),
  ],
  海雲台前往機場: [
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/137a4427-2509-4780-8c1c-80bf1150eb4f.jpeg", "Triple 김해 국제공항 안내", sourcePages.tripleAirportInfo),
    photo("https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/0eaa3808-a606-447c-bdfa-59c8d427db98.jpeg", "Triple 김해 국제공항", sourcePages.tripleAirport),
    photo(images.airport, "Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Gimhae_International_Airport.jpg"),
  ],
};

const stops = [
  {
    day: "DAY1",
    area: "抵達釜山",
    time: "19:00",
    title: "BUSAN 釜山 PUS Terminal I",
    korean: "김해국제공항 국제선청사",
    transit: "入境",
    note: "晚上入境通常人少，表格備註說流程很順。",
    query: "Gimhae International Airport International Terminal Busan",
    image: images.airport,
  },
  {
    day: "DAY1",
    area: "抵達釜山",
    time: "20:00",
    title: "Urban Groove Hotel",
    korean: "Busan Seomyeon Urban Groove Hotel",
    transit: "機場包車約 30 分",
    note: "西面住宿點，房間大、有洗衣機、微波爐與頂樓開放空間。",
    query: "Busan Seomyeon Urban Groove Hotel",
    image: images.hotel,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "08:00",
    title: "EGGDROP 西面店",
    korean: "에그드랍 서면점",
    transit: "計程車 5 分",
    note: "平板點餐，有中文。表格推薦點有蛋的品項與蒜蓉黃油麵包。",
    query: "에그드랍 서면점 Busan",
    image: images.breakfast,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "09:10",
    title: "甘川洞文化村",
    korean: "감천문화마을",
    transit: "計程車 20 分",
    note: "建議 9:30 抵達，小王子拍照點十點後人潮會明顯變多。",
    query: "Gamcheon Culture Village Busan",
    image: images.gamcheon,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "12:00",
    title: "merci nook",
    korean: "메르시누크",
    transit: "計程車 20 分",
    note: "影島熱門義大利麵店；表格備註特別推薦法式培根吐司。",
    query: "메르시누크 Busan",
    image: images.pasta,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "14:00",
    title: "白淺灘文化村步道",
    korean: "흰여울문화마을",
    transit: "步行約 5 分",
    note: "海邊文化村步道，適合接在影島午餐後散步拍照。",
    query: "Huinnyeoul Culture Village Busan",
    image: images.huinnyeoul,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "15:00",
    title: "Momos Coffee 影島店",
    korean: "모모스커피 영도점",
    transit: "計程車 8 分",
    note: "釜山知名精品咖啡品牌，表格推薦手沖咖啡 Momos Candy。",
    query: "모모스커피 영도점 Busan",
    image: images.coffee,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "15:00",
    title: "THRILL ON THE MUG",
    korean: "스릴온더머그",
    transit: "計程車 7 分",
    note: "海景第一排咖啡廳；原表註記 2026/6/6 起暫停營業。",
    query: "스릴온더머그 Busan",
    image: images.oceanCafe,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "16:45",
    title: "松島海上纜車站",
    korean: "송도해상케이블카",
    transit: "計程車 15 分",
    note: "使用 Klook Pass 需到 1F 實體售票處兌換；可選一般或水晶車廂。",
    query: "Songdo Marine Cable Car Busan",
    image: images.songdo,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "17:00",
    title: "松島纜車 + 龍宮雲橋",
    korean: "송도용궁구름다리",
    transit: "纜車 + 步行",
    note: "龍宮雲橋要留意 Google Maps 與現場最後入場時間，表格提醒多數時候到 17:30。",
    query: "Songdo Yonggung Suspension Bridge Busan",
    image: images.songdoSkywalk,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "19:00",
    title: "83獬豸",
    korean: "83 해치",
    transit: "計程車 20 分",
    note: "建議用 Catchtable 預訂；原表提到廣安里分店可能比較不用等。",
    query: "83 해치 Busan",
    image: images.restaurant,
  },
  {
    day: "DAY2",
    area: "西面 + 影島",
    time: "22:00",
    title: "OLIVE YOUNG 西面 Town 店",
    korean: "올리브영 서면타운",
    transit: "計程車 8 分",
    note: "兩層樓旗艦門市，營業到 23:00，可現場即時退稅。",
    query: "OLIVE YOUNG Seomyeon Town Busan",
    image: images.beauty,
  },
  {
    day: "DAY3",
    area: "影島 + 海雲台",
    time: "09:50",
    title: "LASOOP",
    korean: "라숲",
    transit: "計程車 5 分",
    note: "表格列為 THRILL ON THE MUG 暫停營業時的替代咖啡廳。",
    query: "라숲 Busan cafe",
    image: images.oceanCafe,
  },
  {
    day: "DAY3",
    area: "影島 + 海雲台",
    time: "11:45",
    title: "Cove Stay Haeundae",
    korean: "코브스테이",
    transit: "計程車 45 分",
    note: "海雲台第一排平價住宿；表格備註隔音與打掃頻率普通。",
    query: "코브스테이 Haeundae Busan",
    image: images.hotel,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "12:40",
    title: "瓦房鱈魚湯",
    korean: "해운대 기와집 대구탕",
    transit: "步行 5 分",
    note: "海雲台午餐點，適合寄放行李後步行前往。",
    query: "해운대 기와집 대구탕 Busan",
    image: images.restaurant,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "14:00",
    title: "Who's Who MUMU Bakery",
    korean: "후스후무무",
    transit: "步行 3 分",
    note: "地下室質感烘焙店，表格推薦佛卡夏，可外帶也能內用。",
    query: "후스후무무 Busan",
    image: images.bakery,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "14:00",
    title: "海雲台藍線公園 尾浦站",
    korean: "해운대블루라인파크 미포정거장",
    transit: "步行 5 分",
    note: "可先在尾浦站旁步道拍膠囊列車與海岸列車。",
    query: "Haeundae Blueline Park Mipo Station Busan",
    image: images.blueline,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "15:30",
    title: "膠囊列車到青沙浦站",
    korean: "청사포정거장",
    transit: "30-40 分",
    note: "需提前排隊，熱門時段人潮明顯；原表提醒官網搶票。",
    query: "Haeundae Sky Capsule Cheongsapo Station Busan",
    image: images.blueline,
  },
  {
    day: "DAY3",
    area: "青沙浦",
    time: "16:40",
    title: "青沙浦平交道拍照點",
    korean: "청사포 철길 건널목",
    transit: "步行",
    note: "釜山代表性的海邊鐵道拍照場景，常被形容像韓版灌籃高手。",
    query: "Cheongsapo railroad crossing Busan",
    image: images.blueline,
  },
  {
    day: "DAY3",
    area: "青沙浦",
    time: "17:00",
    title: "Orb Coffee Salon",
    korean: "오브커피살롱",
    transit: "步行 7 分",
    note: "表格推薦草莓千層與荔枝冰茶，海景第一排下午很美。",
    query: "오브커피살롱 Busan",
    image: images.coffee,
  },
  {
    day: "DAY3",
    area: "青沙浦",
    time: "17:00",
    title: "DIART coffee 青沙浦店",
    korean: "디아트커피 청사포점",
    transit: "步行 7 分",
    note: "表格備註評價普通，可作為附近備案。",
    query: "디아트커피 청사포점 Busan",
    image: images.coffee,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "18:00",
    title: "釜山 X the SKY",
    korean: "부산 엑스 더 스카이",
    transit: "計程車 11 分",
    note: "使用 Klook Pass 在 1F 換票上 100 樓，99 樓有高空星巴克。",
    query: "Busan X the SKY",
    image: images.xsky,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "20:30",
    title: "海木 鰻魚飯",
    korean: "해목",
    transit: "計程車 6 分",
    note: "米其林推薦餐廳，晚餐排隊時間可能較長。",
    query: "해목 Haeundae Busan",
    image: images.unagi,
  },
  {
    day: "DAY3",
    area: "海雲台",
    time: "21:30",
    title: "海雲台傳統市場",
    korean: "해운대 전통시장",
    transit: "步行 5 分",
    note: "可買草莓與小吃，價格差異大，建議多比較。",
    query: "Haeundae Traditional Market Busan",
    image: images.haeundaeMarket,
  },
  {
    day: "DAY4",
    area: "海雲台 + 機張",
    time: "09:00",
    title: "海東龍宮寺",
    korean: "해동용궁사",
    transit: "計程車 20 分",
    note: "海邊寺廟景點；原表提醒部分步道曾維修，出發前再確認開放狀態。",
    query: "Haedong Yonggungsa Temple Busan",
    image: images.yonggungsa,
  },
  {
    day: "DAY4",
    area: "機張",
    time: "10:00",
    title: "Skyline Luge Busan",
    korean: "스카이라인 루지 부산",
    transit: "走 12 分或搭車 3 分",
    note: "Klook Pass 可換票，原表推薦平日早上去比較不用排。",
    query: "Skyline Luge Busan",
    image: images.oceanCafe,
  },
  {
    day: "DAY4",
    area: "海雲台",
    time: "14:00",
    title: "海雲台傳統市場吃中餐",
    korean: "해운대 전통시장",
    transit: "計程車 20 分",
    note: "尚國家辣炒年糕、名品糖餅、31cm 刀削麵與海鮮煎餅都在同一條街。",
    query: "Haeundae Traditional Market Busan",
    image: images.haeundaeMarket,
  },
  {
    day: "DAY4",
    area: "海雲台",
    time: "15:00",
    title: "海雲台海邊",
    korean: "해운대해수욕장",
    transit: "步行 5 分",
    note: "下午散步拍照，能接海雲台市場或飯店周邊行程。",
    query: "Haeundae Beach Busan",
    image: images.haeundaeBeach,
  },
  {
    day: "DAY4",
    area: "廣安里",
    time: "15:00",
    title: "廣安里 M 無人機燈光秀",
    korean: "광안리 M 드론라이트쇼",
    transit: "車程 30-40 分",
    note: "固定週六晚上有兩場，適合改排夜間行程。",
    query: "Gwangalli M Drone Light Show Busan",
    image: images.gwangalli,
  },
  {
    day: "DAY4",
    area: "海雲台",
    time: "17:00",
    title: "海雲台似顏繪",
    korean: "도토리캐리커쳐 부산해운대점",
    transit: "步行 10 分",
    note: "一人韓幣 7000，可畫寵物；表格備註只能付現金。",
    query: "도토리캐리커쳐 부산해운대점",
    image: images.portrait,
  },
  {
    day: "DAY4",
    area: "海雲台",
    time: "18:00",
    title: "海雲台傳統市場晚餐",
    korean: "노홍만두",
    transit: "市場內",
    note: "可以試 31cm 刀削麵、海鮮煎餅與餃子類小吃。",
    query: "노홍만두 Haeundae Busan",
    image: images.marketFood,
  },
  {
    day: "DAY5",
    area: "田浦 + Centum City",
    time: "09:00",
    title: "Your Type Jeonpo",
    korean: "유어타입 전포점",
    transit: "計程車 25 分",
    note: "表格推薦培根可麗餅與法式吐司，建議 10 點前或下午三點後避開人潮。",
    query: "유어타입 전포점 Busan",
    image: images.breakfast,
  },
  {
    day: "DAY5",
    area: "田浦",
    time: "11:30",
    title: "田浦咖啡街",
    korean: "전포카페거리",
    transit: "步行",
    note: "田浦一帶咖啡、選物與巷弄散步區，可安排彈性逛街時間。",
    query: "Jeonpo Cafe Street Busan",
    image: images.seomyeon,
  },
  {
    day: "DAY5",
    area: "Centum City",
    time: "12:30",
    title: "新世界百貨 Centum City 汗蒸幕",
    korean: "신세계백화점 센텀시티점",
    transit: "計程車 20 分",
    note: "使用 Klook Pass 到 1F 實體售票處換票；表格提醒泡澡前需卸妝。",
    query: "Shinsegae Centum City Spa Land Busan",
    image: images.shinsegae,
  },
  {
    day: "DAY5",
    area: "Centum City",
    time: "17:00",
    title: "新世界 B1/B2 伴手禮",
    korean: "신세계백화점 센텀시티점",
    transit: "百貨內",
    note: "可逛釜山名產與韓國甜點，原表評價是可逛但未必最好買。",
    query: "Shinsegae Centum City Busan food hall",
    image: images.shinsegae,
  },
  {
    day: "DAY5",
    area: "海雲台",
    time: "20:00",
    title: "水邊最高豬肉湯飯",
    korean: "수변최고돼지국밥",
    transit: "步行 5 分",
    note: "多人推薦但也有人覺得有豬腥味；可依 Google Maps 找近的分店。",
    query: "수변최고돼지국밥 Haeundae Busan",
    image: images.restaurant,
  },
  {
    day: "DAY5",
    area: "海雲台",
    time: "21:00",
    title: "Delight Project",
    korean: "딜라이트 프로젝트",
    transit: "步行 3 分",
    note: "Olive Young 旗下低卡零食品牌專賣店，有釜山限定商品，可當場退稅。",
    query: "Delight Project Haeundae Busan",
    image: images.beauty,
  },
  {
    day: "DAY6",
    area: "返程",
    time: "06:45",
    title: "海雲台前往機場",
    korean: "김해국제공항",
    transit: "包車約 40 分",
    note: "有退稅記得去 Gate 4；早上出境人潮較少，仍建議預留時間。",
    query: "Gimhae International Airport Busan",
    image: images.airport,
  },
].map((stop, index) => {
  const normalizedQuery = stop.query || `${stop.korean || stop.title} Busan South Korea`;
  const photos = verifiedPhotos[stop.title] || [];
  return {
    ...stop,
    id: `stop-${index + 1}`,
    photos,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(normalizedQuery)}`,
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(normalizedQuery)}&output=embed`,
    imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${normalizedQuery} photos`)}`,
    exactImage: photos.length > 0,
  };
});

const timeline = document.querySelector("#timeline");
const visibleCount = document.querySelector("#visibleCount");
const searchInput = document.querySelector("#searchInput");
const dayButtons = document.querySelectorAll(".day-button");
const selectedMapTop = document.querySelector("#selectedMapTop");

const preview = {
  image: document.querySelector("#previewImage"),
  media: document.querySelector(".preview-media"),
  placeholder: document.querySelector("#photoPlaceholder"),
  badge: document.querySelector("#previewBadge"),
  counter: document.querySelector("#photoCounter"),
  prevPhoto: document.querySelector("#prevPhoto"),
  nextPhoto: document.querySelector("#nextPhoto"),
  thumbs: document.querySelector("#galleryThumbs"),
  day: document.querySelector("#previewDay"),
  title: document.querySelector("#previewTitle"),
  korean: document.querySelector("#previewKorean"),
  meta: document.querySelector("#previewMeta"),
  note: document.querySelector("#previewNote"),
  map: document.querySelector("#previewMap"),
  imageSearch: document.querySelector("#previewImageSearch"),
  mapFrame: document.querySelector("#mapFrame"),
};

let activeDay = "all";
let activeStopId = stops[0].id;
let activePhotoIndex = 0;

function buildPhotoSet(stop) {
  const text = [stop.title, stop.korean, stop.area, stop.note, stop.query].join(" ").toLowerCase();
  let pool = photoPools.default;

  if (text.includes("airport") || text.includes("機場") || text.includes("공항")) pool = photoPools.airport;
  else if (text.includes("hotel") || text.includes("飯店") || text.includes("stay")) pool = photoPools.hotel;
  else if (text.includes("eggd") || text.includes("早午餐") || text.includes("早餐") || text.includes("유어타입")) pool = photoPools.breakfast;
  else if (text.includes("甘川") || text.includes("白淺") || text.includes("culture") || text.includes("문화")) pool = photoPools.culture;
  else if (text.includes("coffee") || text.includes("咖啡") || text.includes("커피") || text.includes("lasoop")) pool = photoPools.cafe;
  else if (text.includes("松島") || text.includes("songdo") || text.includes("纜車") || text.includes("雲橋")) pool = photoPools.songdo;
  else if (text.includes("藍線") || text.includes("膠囊") || text.includes("青沙浦") || text.includes("blueline")) pool = photoPools.blueline;
  else if (text.includes("市場") || text.includes("market") || text.includes("만두")) pool = photoPools.market;
  else if (text.includes("龍宮") || text.includes("yonggung") || text.includes("용궁")) pool = photoPools.temple;
  else if (text.includes("新世界") || text.includes("百貨") || text.includes("shinsegae") || text.includes("伴手禮")) pool = photoPools.shopping;
  else if (text.includes("海邊") || text.includes("廣安") || text.includes("beach") || text.includes("drone")) pool = photoPools.beach;
  else if (text.includes("olive") || text.includes("delight") || text.includes("似顏繪")) pool = photoPools.beauty;
  else if (text.includes("餐") || text.includes("飯") || text.includes("탕") || text.includes("해목") || text.includes("獬豸")) pool = photoPools.food;

  return [...new Set([stop.image, ...pool])].slice(0, 4);
}

function getFilteredStops() {
  const term = searchInput.value.trim().toLowerCase();
  return stops.filter((stop) => {
    const matchesDay = activeDay === "all" || stop.day === activeDay;
    const haystack = [stop.day, stop.area, stop.time, stop.title, stop.korean, stop.transit, stop.note]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesDay && (!term || haystack.includes(term));
  });
}

function renderTimeline() {
  const filtered = getFilteredStops();
  visibleCount.textContent = filtered.length;

  if (!filtered.length) {
    timeline.innerHTML = `<div class="empty-state">找不到符合條件的地點。</div>`;
    return;
  }

  const grouped = filtered.reduce((acc, stop) => {
    acc[stop.day] ||= [];
    acc[stop.day].push(stop);
    return acc;
  }, {});

  timeline.innerHTML = Object.entries(grouped)
    .map(([day, dayStops]) => {
      const cards = dayStops.map(renderCard).join("");
      const area = dayStops[0]?.area ? ` · ${dayStops[0].area}` : "";
      return `
        <section class="day-group" data-group="${day}">
          <div class="day-heading">${day}${area}</div>
          ${cards}
        </section>
      `;
    })
    .join("");

  timeline.querySelectorAll(".place-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      setActiveStop(card.dataset.id);
    });
  });

  const nextStopId = filtered.some((stop) => stop.id === activeStopId) ? activeStopId : filtered[0].id;
  setActiveStop(nextStopId, false);
}

function renderCard(stop) {
  const leadPhoto = stop.photos[0];
  const thumb = leadPhoto
    ? `<img src="${escapeHtml(leadPhoto.url)}" alt="${escapeHtml(stop.title)} 縮圖" referrerpolicy="no-referrer" loading="lazy" />`
    : `<div class="thumb-placeholder">
        <span>照片待核對</span>
        <small>先用地圖與圖片搜尋確認</small>
      </div>`;
  const sourceBadge = stop.photos.length
    ? `<span class="mini-link source-mini">${stop.photos.length} 張來源圖</span>`
    : `<span class="mini-link source-mini muted">尚無穩定來源圖</span>`;

  return `
    <article class="place-card ${stop.id === activeStopId ? "active" : ""}" data-id="${stop.id}" tabindex="0">
      <div class="thumb">
        ${thumb}
      </div>
      <div class="card-body">
        <div class="card-topline"><span>${stop.day}</span><span class="time">${stop.time}</span><span>${stop.area}</span></div>
        <h3>${escapeHtml(stop.title)}</h3>
        <p class="korean">${escapeHtml(stop.korean || "")}</p>
        <p class="meta">${escapeHtml(stop.transit || "")}</p>
        <p class="note">${escapeHtml(stop.note || "")}</p>
        <div class="card-actions">
          <a class="mini-link map-direct-link" href="${stop.mapUrl}" target="_blank" rel="noreferrer">Google Maps 地點</a>
          <a class="mini-link" href="${stop.imageSearchUrl}" target="_blank" rel="noreferrer">Google 圖片搜尋</a>
          ${sourceBadge}
        </div>
      </div>
    </article>
  `;
}

function setActiveStop(id, rerenderCardState = true) {
  const stop = stops.find((item) => item.id === id) || stops[0];
  const stopChanged = activeStopId !== stop.id;
  activeStopId = stop.id;
  if (stopChanged) activePhotoIndex = 0;

  preview.day.textContent = `${stop.day} · ${stop.time} · ${stop.area}`;
  preview.title.textContent = stop.title;
  preview.korean.textContent = stop.korean || "";
  preview.meta.textContent = stop.transit || "";
  preview.note.textContent = stop.note || "";
  preview.map.href = stop.mapUrl;
  preview.imageSearch.href = stop.imageSearchUrl;
  preview.mapFrame.src = stop.embedUrl;
  selectedMapTop.href = stop.mapUrl;
  renderPreviewPhoto(stop);

  if (rerenderCardState) {
    document.querySelectorAll(".place-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.id === activeStopId);
    });
  }
}

function renderPreviewPhoto(stop = getActiveStop()) {
  const photos = stop.photos;
  if (!photos.length) {
    preview.media.classList.add("no-google-photo");
    preview.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    preview.image.alt = "";
    preview.badge.textContent = "照片待核對";
    preview.counter.textContent = "0 / 0";
    preview.prevPhoto.disabled = true;
    preview.nextPhoto.disabled = true;
    preview.thumbs.innerHTML = "";
    preview.imageSearch.textContent = "圖片搜尋";
    preview.imageSearch.href = stop.imageSearchUrl;
    return;
  }

  preview.media.classList.remove("no-google-photo");
  activePhotoIndex = (activePhotoIndex + photos.length) % photos.length;
  const currentPhoto = photos[activePhotoIndex];

  preview.image.src = currentPhoto.url;
  preview.image.alt = `${stop.title} 照片 ${activePhotoIndex + 1}`;
  preview.badge.textContent = "已核對來源";
  preview.counter.textContent = `${activePhotoIndex + 1} / ${photos.length}`;
  preview.imageSearch.textContent = `照片來源：${currentPhoto.source}`;
  preview.imageSearch.href = currentPhoto.sourceUrl || stop.imageSearchUrl;
  preview.prevPhoto.disabled = photos.length < 2;
  preview.nextPhoto.disabled = photos.length < 2;
  preview.thumbs.innerHTML = photos
    .map(
      (photo, index) => `
        <button class="gallery-thumb ${index === activePhotoIndex ? "active" : ""}" type="button" data-photo-index="${index}" aria-label="查看第 ${index + 1} 張照片">
          <img src="${escapeHtml(photo.url)}" alt="" referrerpolicy="no-referrer" />
        </button>
      `,
    )
    .join("");

  preview.thumbs.querySelectorAll(".gallery-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      activePhotoIndex = Number(button.dataset.photoIndex);
      renderPreviewPhoto(stop);
    });
  });
}

function shiftPhoto(direction) {
  const stop = getActiveStop();
  activePhotoIndex += direction;
  renderPreviewPhoto(stop);
}

function getActiveStop() {
  return stops.find((item) => item.id === activeStopId) || stops[0];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeDay = button.dataset.day;
    activeStopId = "";
    dayButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTimeline();
  });
});

searchInput.addEventListener("input", renderTimeline);
preview.prevPhoto.addEventListener("click", () => shiftPhoto(-1));
preview.nextPhoto.addEventListener("click", () => shiftPhoto(1));

renderTimeline();
