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
  const photos = buildPhotoSet(stop);
  return {
    ...stop,
    id: `stop-${index + 1}`,
    photos,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(normalizedQuery)}`,
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(normalizedQuery)}&output=embed`,
    imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${normalizedQuery} photos`)}`,
    exactImage: exactImages.has(photos[0]),
  };
});

const timeline = document.querySelector("#timeline");
const visibleCount = document.querySelector("#visibleCount");
const searchInput = document.querySelector("#searchInput");
const dayButtons = document.querySelectorAll(".day-button");
const selectedMapTop = document.querySelector("#selectedMapTop");

const preview = {
  image: document.querySelector("#previewImage"),
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
  return `
    <article class="place-card ${stop.id === activeStopId ? "active" : ""}" data-id="${stop.id}" tabindex="0">
      <div class="thumb">
        <img src="${stop.image}" alt="${escapeHtml(stop.title)}" referrerpolicy="no-referrer" />
      </div>
      <div class="card-body">
        <div class="card-topline"><span>${stop.day}</span><span class="time">${stop.time}</span><span>${stop.area}</span></div>
        <h3>${escapeHtml(stop.title)}</h3>
        <p class="korean">${escapeHtml(stop.korean || "")}</p>
        <p class="meta">${escapeHtml(stop.transit || "")}</p>
        <p class="note">${escapeHtml(stop.note || "")}</p>
        <div class="card-actions">
          <a class="mini-link" href="${stop.mapUrl}" target="_blank" rel="noreferrer">Maps</a>
          <a class="mini-link" href="${stop.imageSearchUrl}" target="_blank" rel="noreferrer">圖片</a>
          <span class="mini-link">${stop.photos.length} 張照片</span>
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
  activePhotoIndex = (activePhotoIndex + photos.length) % photos.length;
  const currentPhoto = photos[activePhotoIndex];
  const isExact = exactImages.has(currentPhoto);

  preview.image.src = currentPhoto;
  preview.image.alt = `${stop.title} 照片 ${activePhotoIndex + 1}`;
  preview.badge.textContent = isExact ? "實景圖" : "參考圖";
  preview.counter.textContent = `${activePhotoIndex + 1} / ${photos.length}`;
  preview.prevPhoto.disabled = photos.length < 2;
  preview.nextPhoto.disabled = photos.length < 2;
  preview.thumbs.innerHTML = photos
    .map(
      (photo, index) => `
        <button class="gallery-thumb ${index === activePhotoIndex ? "active" : ""}" type="button" data-photo-index="${index}" aria-label="查看第 ${index + 1} 張照片">
          <img src="${photo}" alt="" referrerpolicy="no-referrer" />
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
