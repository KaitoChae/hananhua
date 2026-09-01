/* V15 multilingual additions + automatic country language */
(() => {
  if (typeof I18N === "undefined" || typeof applyLanguage !== "function") return;

  const merge=(t,s)=>Object.keys(s).forEach(k=>{
    if(s[k]&&typeof s[k]==="object"&&!Array.isArray(s[k])){
      if(!t[k]||typeof t[k]!=="object")t[k]={}; merge(t[k],s[k]);
    } else t[k]=s[k];
  });

  const extra = {
    id: {
      program1:{kicker:"MAGANG HOTEL & INDUSTRI",title:"Magang Mahasiswa",body:"Dua jalur pengalaman kerja di Taiwan: <strong>Hotel & Resort</strong> serta <strong>Industri & Manufaktur</strong>.",link:"Lihat posisi magang",hotelPill:"Hotel & Resort",industryPill:"Industri & Manufaktur",hotelLabel:"HOTEL",industryLabel:"INDUSTRI"},
      collaboration:{item5:"Industri di Taiwan"},
      partners:{
        eyebrow:"MITRA KERJA SAMA MAGANG",title:"Hotel, resort, dan industri mitra di Taiwan",intro:"Mitra penempatan mencakup hotel dan resort berbintang serta perusahaan industri dan manufaktur.",
        hotelEyebrow:"MITRA HOTEL & RESORT",hotelTitle:"Hotel berbintang",industryEyebrow:"MITRA INDUSTRI & MANUFAKTUR",industryTitle:"Perusahaan mitra",
        industryType1:"Farmasi",industryType2:"Manufaktur Makanan",industryType3:"Manufaktur Kemasan",industryType4:"Manufaktur Optik",
        hotelNames:{queena:"Queena Plaza Hotel",aloft:"Aloft Taipei Beitou",shangri:"Shangri-La Tainan",caesar:"Caesar Park Kenting",intercontinental:"InterContinental Kaohsiung",lemeridien:"Le Méridien Taipei",howard:"Howard Beach Resort Kenting",hresort:"H Resort",golden:"Golden Tulip FAB Hotel New Taipei"},
        companyNames:{tehseng:"Teh Seng Pharmaceutical MFG. Co., Ltd.",cosmos:"Cosmos Food Co., Ltd",sterileright:"SterileRight Packaging MFG Inc",stshine:"ST. Shine Optical Co., Ltd"},
        locations:{queena:"Tainan, Distrik Yongkang",aloft:"Taipei, Distrik Beitou",shangri:"Tainan, Distrik Timur",caesar:"Pingtung, Hengchun",intercontinental:"Kaohsiung, Distrik Qianzhen",lemeridien:"Taipei, Distrik Xinyi",howard:"Pingtung, Hengchun",hresort:"Pingtung, Shizi",golden:"New Taipei, Distrik Tamsui",tehseng:"Tainan, Distrik Yongkang",cosmos:"Pingtung, Ligang",sterileright:"Keelung, Distrik Qidu",stshine:"New Taipei, Distrik Xizhi"}
      },
      fields:{body:"Posisi magang mencakup jalur Hotel & Resort serta Industri & Manufaktur, sementara Program Pendidikan 3+4 ditampilkan bersama fasilitas praktiknya.",hotelEyebrow:"MAGANG HOTEL & RESORT",hotelTitle:"Posisi hospitality",hotelIntro:"Posisi utama mencakup housekeeping, pelayanan F&B, dan dukungan operasional dapur.",industryEyebrow:"MAGANG INDUSTRI & MANUFAKTUR",industryTitle:"Posisi industri",industryIntro:"Jalur magang industri berfokus pada pengalaman di lingkungan produksi dan pengenalan standar kerja manufaktur Taiwan."},
      field1:{title:"Housekeeping",body:"Pembersihan kamar, pengisian perlengkapan, penataan kamar, dan penerapan standar kebersihan hotel."},
      field2:{title:"F&B Service",body:"Pelayanan sarapan dan makan, penataan meja, persiapan area layanan, dan pelayanan pelanggan."},
      field3:{title:"Kitchen Assistant",body:"Persiapan bahan, penyajian, kebersihan area kerja, dan praktik keamanan makanan."},
      industryPosition:{tag:"POSISI MAGANG INDUSTRI",title:"Operator Produksi",body:"Mendukung pengoperasian mesin dan proses produksi secara aman dan efisien, serta membantu menjaga konsistensi operasi sesuai target kualitas.",pill1:"Operasi Mesin",pill2:"Keselamatan Kerja",pill3:"Kontrol Kualitas"},
      director:{name:"Chaerunnisa Fitratul Islam<br><span>Bachelor of Arts (B.A.), Master of Arts (M.A.)</span>",bio:"Meraih gelar Bachelor of Arts (B.A.) dari Beijing Normal University, Tiongkok, dan Master of Arts (M.A.) dari University of Würzburg, Jerman."},
      footer:{copyright:"© 2017–2026 Yayasan Han An Hua"}
    },
    en: {
      program1:{kicker:"HOTEL & INDUSTRY INTERNSHIPS",title:"University Internship",body:"Two work-experience pathways in Taiwan: <strong>Hotels & Resorts</strong> and <strong>Industry & Manufacturing</strong>.",link:"View internship positions",hotelPill:"Hotels & Resorts",industryPill:"Industry & Manufacturing",hotelLabel:"HOTEL",industryLabel:"INDUSTRY"},
      collaboration:{item5:"Industry in Taiwan"},
      partners:{
        eyebrow:"INTERNSHIP PARTNERS",title:"Hotel, resort, and industry partners in Taiwan",intro:"Placement partners include rated hotels and resorts as well as industrial and manufacturing companies.",
        hotelEyebrow:"HOTEL & RESORT PARTNERS",hotelTitle:"Rated hotels",industryEyebrow:"INDUSTRY & MANUFACTURING PARTNERS",industryTitle:"Partner companies",
        industryType1:"Pharmaceutical",industryType2:"Food Manufacturing",industryType3:"Packaging Manufacturing",industryType4:"Optical Manufacturing",
        hotelNames:{queena:"Queena Plaza Hotel",aloft:"Aloft Taipei Beitou",shangri:"Shangri-La Tainan",caesar:"Caesar Park Kenting",intercontinental:"InterContinental Kaohsiung",lemeridien:"Le Méridien Taipei",howard:"Howard Beach Resort Kenting",hresort:"H Resort",golden:"Golden Tulip FAB Hotel New Taipei"},
        companyNames:{tehseng:"Teh Seng Pharmaceutical MFG. Co., Ltd.",cosmos:"Cosmos Food Co., Ltd",sterileright:"SterileRight Packaging MFG Inc",stshine:"ST. Shine Optical Co., Ltd"},
        locations:{queena:"Tainan, Yongkang District",aloft:"Taipei, Beitou District",shangri:"Tainan, East District",caesar:"Pingtung, Hengchun Township",intercontinental:"Kaohsiung, Qianzhen District",lemeridien:"Taipei, Xinyi District",howard:"Pingtung, Hengchun Township",hresort:"Pingtung, Shizi Township",golden:"New Taipei, Tamsui District",tehseng:"Tainan, Yongkang District",cosmos:"Pingtung, Ligang Township",sterileright:"Keelung, Qidu District",stshine:"New Taipei, Xizhi District"}
      },
      fields:{body:"Internship positions cover Hotels & Resorts and Industry & Manufacturing, while the 3+4 Education Program is presented together with its practical facilities.",hotelEyebrow:"HOTEL & RESORT INTERNSHIPS",hotelTitle:"Hospitality positions",hotelIntro:"Main positions include housekeeping, F&B service, and kitchen operations support.",industryEyebrow:"INDUSTRY & MANUFACTURING INTERNSHIPS",industryTitle:"Industry positions",industryIntro:"The industry pathway focuses on production-environment experience and exposure to Taiwanese manufacturing work standards."},
      field1:{title:"Housekeeping",body:"Room cleaning, replenishment of amenities, room setup, and hotel cleanliness standards."},
      field2:{title:"F&B Service",body:"Breakfast and meal service, table setup, service-area preparation, and guest service."},
      field3:{title:"Kitchen Assistant",body:"Ingredient preparation, plating, workplace cleanliness, and food-safety practices."},
      industryPosition:{tag:"INDUSTRY INTERNSHIP POSITION",title:"Production Operator",body:"Supports safe and efficient operation of machinery and production processes while helping maintain consistent operations according to quality targets.",pill1:"Machine Operation",pill2:"Work Safety",pill3:"Quality Control"},
      director:{name:"Chaerunnisa Fitratul Islam<br><span>Bachelor of Arts (B.A.), Master of Arts (M.A.)</span>",bio:"Earned a Bachelor of Arts (B.A.) from Beijing Normal University, China, and a Master of Arts (M.A.) from the University of Würzburg, Germany."},
      footer:{copyright:"© 2017–2026 Han An Hua Foundation"}
    },
    tw: {
      program1:{kicker:"飯店與產業實習",title:"大學生實習",body:"在台灣提供兩種實習路徑,<strong>飯店與度假村</strong>以及<strong>產業與製造業</strong>",link:"查看實習職位",hotelPill:"飯店與度假村",industryPill:"產業與製造業",hotelLabel:"飯店",industryLabel:"產業"},
      collaboration:{item5:"台灣產業夥伴"},
      partners:{
        eyebrow:"實習合作夥伴",title:"台灣飯店,度假村與產業合作夥伴",intro:"實習合作夥伴涵蓋星級飯店,度假村以及產業與製造企業",
        hotelEyebrow:"飯店與度假村合作夥伴",hotelTitle:"星級飯店",industryEyebrow:"產業與製造業合作夥伴",industryTitle:"合作企業",
        industryType1:"製藥",industryType2:"食品製造",industryType3:"包裝製造",industryType4:"光學製造",
        hotelNames:{queena:"台南桂田酒店",aloft:"台北北投雅樂軒酒店",shangri:"台南遠東香格里拉",caesar:"墾丁凱撒大飯店",intercontinental:"高雄洲際酒店",lemeridien:"台北寒舍艾美酒店",howard:"墾丁福華渡假飯店",hresort:"H會館",golden:"淡水將捷金鬱金香酒店"},
        companyNames:{tehseng:"得生製藥股份有限公司",cosmos:"庚慶食品有限公司",sterileright:"欣德芮股份有限公司",stshine:"精華光學股份有限公司"},
        locations:{queena:"台南,永康區",aloft:"台北,北投區",shangri:"台南,東區",caesar:"屏東,恆春鎮",intercontinental:"高雄,前鎮區",lemeridien:"台北,信義區",howard:"屏東,恆春鎮",hresort:"屏東,獅子鄉",golden:"新北,淡水區",tehseng:"台南,永康區",cosmos:"屏東,里港鄉",sterileright:"基隆,七堵區",stshine:"新北,汐止區"}
      },
      fields:{body:"實習職位涵蓋飯店與度假村及產業與製造業,3+4 教育計畫與實作設施設於同一區塊",hotelEyebrow:"飯店與度假村實習",hotelTitle:"餐旅實習職位",hotelIntro:"主要職位包括房務,餐飲服務與廚房作業支援",industryEyebrow:"產業與製造業實習",industryTitle:"產業實習職位",industryIntro:"產業實習著重生產環境經驗與台灣製造業工作標準"},
      field1:{title:"房務",body:"客房清潔,備品補充,房間整理與飯店清潔標準"},
      field2:{title:"餐飲服務",body:"早餐與餐飲服務,桌面擺設,服務區準備及顧客服務"},
      field3:{title:"廚房助理",body:"食材準備,擺盤,工作區清潔與食品安全實務"},
      industryPosition:{tag:"產業實習職位",title:"生產操作員",body:"協助機械與生產流程安全且有效率地運作,並依品質目標維持作業一致性",pill1:"機械操作",pill2:"工作安全",pill3:"品質管理"},
      director:{name:"Chaerunnisa Fitratul Islam<br><span>文學學士 B.A.,文學碩士 M.A.</span>",bio:"於中國北京師範大學取得文學學士 B.A.,並於德國維爾茨堡大學取得文學碩士 M.A."},
      footer:{copyright:"© 2017–2026 韓安華基金會"}
    },
    cn: {
      program1:{kicker:"酒店与产业实习",title:"大学生实习",body:"在台湾提供两种实习路径,<strong>酒店与度假村</strong>以及<strong>产业与制造业</strong>",link:"查看实习职位",hotelPill:"酒店与度假村",industryPill:"产业与制造业",hotelLabel:"酒店",industryLabel:"产业"},
      collaboration:{item5:"台湾产业伙伴"},
      partners:{
        eyebrow:"实习合作伙伴",title:"台湾酒店,度假村与产业合作伙伴",intro:"实习合作伙伴涵盖星级酒店,度假村以及产业与制造企业",
        hotelEyebrow:"酒店与度假村合作伙伴",hotelTitle:"星级酒店",industryEyebrow:"产业与制造业合作伙伴",industryTitle:"合作企业",
        industryType1:"制药",industryType2:"食品制造",industryType3:"包装制造",industryType4:"光学制造",
        hotelNames:{queena:"台南桂田酒店",aloft:"台北北投雅乐轩酒店",shangri:"台南远东香格里拉",caesar:"垦丁凯撒大饭店",intercontinental:"高雄洲际酒店",lemeridien:"台北寒舍艾美酒店",howard:"垦丁福华渡假饭店",hresort:"H会馆",golden:"淡水将捷金郁金香酒店"},
        companyNames:{tehseng:"得生制药股份有限公司",cosmos:"庚庆食品有限公司",sterileright:"欣德芮股份有限公司",stshine:"精华光学股份有限公司"},
        locations:{queena:"台南,永康区",aloft:"台北,北投区",shangri:"台南,东区",caesar:"屏东,恒春镇",intercontinental:"高雄,前镇区",lemeridien:"台北,信义区",howard:"屏东,恒春镇",hresort:"屏东,狮子乡",golden:"新北,淡水区",tehseng:"台南,永康区",cosmos:"屏东,里港乡",sterileright:"基隆,七堵区",stshine:"新北,汐止区"}
      },
      fields:{body:"实习职位涵盖酒店与度假村及产业与制造业,3+4 教育计划与实践设施设于同一区块",hotelEyebrow:"酒店与度假村实习",hotelTitle:"酒店实习职位",hotelIntro:"主要职位包括客房服务,餐饮服务与厨房作业支持",industryEyebrow:"产业与制造业实习",industryTitle:"产业实习职位",industryIntro:"产业实习侧重生产环境经验与台湾制造业工作标准"},
      field1:{title:"客房服务",body:"客房清洁,用品补充,房间整理与酒店清洁标准"},
      field2:{title:"餐饮服务",body:"早餐与餐饮服务,餐桌布置,服务区准备及顾客服务"},
      field3:{title:"厨房助理",body:"食材准备,摆盘,工作区清洁与食品安全实践"},
      industryPosition:{tag:"产业实习职位",title:"生产操作员",body:"协助机械与生产流程安全高效运行,并依据质量目标保持作业一致性",pill1:"机械操作",pill2:"工作安全",pill3:"质量管理"},
      director:{name:"Chaerunnisa Fitratul Islam<br><span>文学学士 B.A.,文学硕士 M.A.</span>",bio:"于中国北京师范大学取得文学学士 B.A.,并于德国维尔茨堡大学取得文学硕士 M.A."},
      footer:{copyright:"© 2017–2026 韩安华基金会"}
    }
  };

  Object.keys(extra).forEach(lang=>{ if(I18N[lang]) merge(I18N[lang],extra[lang]); });

  const langMap={id:"id",en:"en",tw:"zh-TW",cn:"zh-CN"};

  function cleanMandarinTitles(lang){
    if(lang!=="tw"&&lang!=="cn")return;
    document.querySelectorAll("h1,h2,h3,h4,.display,.hero-line,.program-card h3,.collab-item strong,.field-card h3,.study-strip .eyebrow").forEach(el=>{
      const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];
      while(w.nextNode())nodes.push(w.currentNode);
      nodes.forEach(n=>n.nodeValue=n.nodeValue.replace(/。/g,"").replace(/\s*[—–-]\s*/g,","));
    });
  }

  function setLang(lang,remember=false){
    if(!I18N[lang])lang="en";
    applyLanguage(lang);
    document.documentElement.lang=langMap[lang]||"en";
    document.documentElement.dataset.language=lang;
    document.querySelectorAll("[data-language-option]").forEach(btn=>{
      const on=btn.dataset.languageOption===lang;
      btn.classList.toggle("is-active",on);btn.setAttribute("aria-pressed",on?"true":"false");
    });
    cleanMandarinTitles(lang);
    if(remember){try{localStorage.setItem("hananhua-language",lang)}catch(e){}}
  }

  function browserLang(){
    const s=((navigator.languages&&navigator.languages[0])||navigator.language||"en").toLowerCase();
    if(s.startsWith("id"))return"id";
    if(s.startsWith("zh-tw")||s.startsWith("zh-hk")||s.startsWith("zh-mo"))return"tw";
    if(s.startsWith("zh-cn")||s.startsWith("zh-sg")||s==="zh")return"cn";
    return"en";
  }

  function fromCountry(cc){
    cc=String(cc||"").toUpperCase();
    if(cc==="ID")return"id";
    if(["TW","HK","MO"].includes(cc))return"tw";
    if(cc==="CN")return"cn";
    return"en";
  }

  async function init(){
    let saved=null;try{saved=localStorage.getItem("hananhua-language")}catch(e){}
    if(saved&&I18N[saved]){setLang(saved);return;}
    setLang(browserLang());
  }

  document.querySelectorAll("[data-language-option]").forEach(btn=>{
    btn.addEventListener("click",()=>setLang(btn.dataset.languageOption,true));
  });

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
  else init();
})();


/* V18 extra hero badge translations */
(() => {
  if (typeof I18N === "undefined") return;
  const v18Hero = {
    id: { hero: { internshipYears: "1–2", internshipBadge: "TAHUN MAGANG DI TAIWAN" } },
    en: { hero: { internshipYears: "1–2", internshipBadge: "YEARS INTERNSHIP IN TAIWAN" } },
    tw: { hero: { internshipYears: "1–2", internshipBadge: "年台灣實習" } },
    cn: { hero: { internshipYears: "1–2", internshipBadge: "年台湾实习" } }
  };
  Object.keys(v18Hero).forEach(lang => {
    if (!I18N[lang]) return;
    if (!I18N[lang].hero) I18N[lang].hero = {};
    Object.assign(I18N[lang].hero, v18Hero[lang].hero);
  });
})();


/* V20 partner-map translations */
(() => {
  if (typeof I18N === "undefined") return;
  const mapText = {
    id: { partnerMap: {
      eyebrow: "PETA MITRA DI TAIWAN",
      title: "Lokasi hotel, resort, dan perusahaan mitra",
      hotel: "Hotel & Resort",
      industry: "Industri & Manufaktur",
      note: "Sentuh atau arahkan kursor ke pin untuk melihat nama mitra"
    }},
    en: { partnerMap: {
      eyebrow: "TAIWAN PARTNER MAP",
      title: "Locations of partner hotels, resorts, and companies",
      hotel: "Hotels & Resorts",
      industry: "Industry & Manufacturing",
      note: "Tap or hover over a pin to see the partner name"
    }},
    tw: { partnerMap: {
      eyebrow: "台灣合作夥伴地圖",
      title: "合作飯店,度假村與企業位置",
      hotel: "飯店與度假村",
      industry: "產業與製造業",
      note: "點選或將游標移到圖釘上查看合作夥伴名稱"
    }},
    cn: { partnerMap: {
      eyebrow: "台湾合作伙伴地图",
      title: "合作酒店,度假村与企业位置",
      hotel: "酒店与度假村",
      industry: "产业与制造业",
      note: "点击或将光标移到图钉上查看合作伙伴名称"
    }}
  };
  Object.keys(mapText).forEach(lang => {
    if (!I18N[lang]) return;
    I18N[lang].partnerMap = mapText[lang].partnerMap;
  });
})();


/* V22 map translation additions */
(() => {
  if (typeof I18N === "undefined") return;
  const t = {
    id: { partnerMap: { locations:"lokasi", regions:{north:"TAIPEI & NEW TAIPEI"} } },
    en: { partnerMap: { locations:"locations", regions:{north:"TAIPEI & NEW TAIPEI"} } },
    tw: { partnerMap: { locations:"地點", regions:{north:"台北與新北"} } },
    cn: { partnerMap: { locations:"地点", regions:{north:"台北与新北"} } }
  };
  Object.keys(t).forEach(lang=>{
    if(!I18N[lang]) return;
    if(!I18N[lang].partnerMap) I18N[lang].partnerMap={};
    Object.assign(I18N[lang].partnerMap,t[lang].partnerMap);
  });
})();


/* V25 — complete Program 3+4 facility translations + original map labels */
(() => {
  if (typeof I18N === "undefined") return;

  const add = {
    id: {
      study: {
        eyebrow: "PILIHAN BIDANG PENDIDIKAN 3+4",
        item1: "Teknologi Informasi",
        item2: "Perbaikan Mikrokomputer",
        item3: "Manajemen Kuliner",
        item4: "Bakery",
        item5: "Informasi Bisnis"
      },
      facilities: {
        eyebrow: "FASILITAS PROGRAM PENDIDIKAN 3+4",
        title: "Belajar melalui praktik langsung",
        body: "Fasilitas praktik mendukung pembelajaran vokasi di bidang kelistrikan, mesin, otomotif, tata boga, bakery, dan teknologi informasi.",
        electric: "Teknik Listrik",
        electricText: "Panel kontrol dan praktik instalasi kelistrikan.",
        electricPractice: "Praktik Kelistrikan",
        electricPracticeText: "Praktik instalasi dan keterampilan teknis.",
        machine: "Teknik Mesin",
        machineText: "Workshop mekanik, perpipaan, dan penggunaan alat kerja.",
        automotive: "Mesin & Otomotif",
        automotiveText: "Praktik kendaraan dan sistem mekanik.",
        chef: "Tata Boga / Chef",
        chefText: "Dapur praktik untuk keterampilan kuliner dan hospitality.",
        bakery: "Bakery",
        bakeryText: "Peralatan bakery dan praktik pengolahan makanan.",
        it: "Teknologi Informasi",
        itText: "Laboratorium komputer untuk pembelajaran teknologi informasi.",
        altElectric: "Laboratorium praktik teknik listrik",
        altElectricPractice: "Area praktik instalasi kelistrikan",
        altMachine: "Workshop teknik mesin dan perpipaan",
        altAutomotive: "Workshop mesin dan otomotif",
        altChef: "Dapur praktik profesional",
        altBakery: "Laboratorium bakery",
        altIT: "Laboratorium komputer"
      },
      partnerMap: {
        eyebrow: "PETA MITRA DI TAIWAN",
        title: "Lokasi hotel, resort, dan perusahaan mitra",
        hotel: "Hotel & Resort",
        industry: "Industri & Manufaktur",
        note: "Sentuh atau arahkan kursor ke pin untuk melihat nama mitra",
        legendAria: "Legenda peta",
        svgAria: "Ilustrasi peta Taiwan",
        cities: {
          taipei: "Taipei",
          keelung: "Keelung",
          tainan: "Tainan",
          kaohsiung: "Kaohsiung",
          pingtung: "Pingtung"
        }
      }
    },

    en: {
      study: {
        eyebrow: "3+4 EDUCATION STUDY OPTIONS",
        item1: "Information Technology",
        item2: "Microcomputer Repair",
        item3: "Culinary Management",
        item4: "Bakery",
        item5: "Business Information"
      },
      facilities: {
        eyebrow: "3+4 EDUCATION PROGRAM FACILITIES",
        title: "Learn through hands-on practice",
        body: "Dedicated practice spaces support vocational training in electrical, mechanical, automotive, culinary, bakery, and information technology fields.",
        electric: "Electrical Engineering",
        electricText: "Control-panel and electrical-installation practice.",
        electricPractice: "Electrical Practice",
        electricPracticeText: "Hands-on installation and technical-skills training.",
        machine: "Mechanical Engineering",
        machineText: "Mechanical, piping, and workshop-tool practice.",
        automotive: "Mechanical & Automotive",
        automotiveText: "Vehicle and mechanical-system practice.",
        chef: "Culinary / Chef Training",
        chefText: "Professional kitchen facilities for culinary and hospitality training.",
        bakery: "Bakery",
        bakeryText: "Bakery equipment and food-processing practice.",
        it: "Information Technology",
        itText: "Computer laboratory for information technology training.",
        altElectric: "Electrical engineering practice laboratory",
        altElectricPractice: "Electrical installation practice area",
        altMachine: "Mechanical and piping workshop",
        altAutomotive: "Mechanical and automotive workshop",
        altChef: "Professional training kitchen",
        altBakery: "Bakery laboratory",
        altIT: "Computer laboratory"
      },
      partnerMap: {
        eyebrow: "TAIWAN PARTNER MAP",
        title: "Partner hotel, resort, and company locations",
        hotel: "Hotels & Resorts",
        industry: "Industry & Manufacturing",
        note: "Tap or hover over a pin to see the partner name",
        legendAria: "Map legend",
        svgAria: "Illustrated map of Taiwan",
        cities: {
          taipei: "Taipei",
          keelung: "Keelung",
          tainan: "Tainan",
          kaohsiung: "Kaohsiung",
          pingtung: "Pingtung"
        }
      }
    },

    tw: {
      study: {
        eyebrow: "3+4 教育專業選擇",
        item1: "資訊科技",
        item2: "微型電腦維修",
        item3: "餐飲管理",
        item4: "烘焙",
        item5: "商業資訊"
      },
      facilities: {
        eyebrow: "3+4 教育計畫實作設施",
        title: "在實作中學習",
        body: "實作空間支援電機,機械,汽車,餐飲,烘焙與資訊科技等技職訓練",
        electric: "電機技術",
        electricText: "控制盤與電氣安裝實作",
        electricPractice: "電機實作",
        electricPracticeText: "電氣安裝與技術技能訓練",
        machine: "機械技術",
        machineText: "機械,管路與工作設備實作",
        automotive: "機械與汽車",
        automotiveText: "車輛與機械系統實作",
        chef: "餐飲與廚藝",
        chefText: "專業廚房用於餐飲與旅宿實務訓練",
        bakery: "烘焙",
        bakeryText: "烘焙設備與食品加工實作",
        it: "資訊科技",
        itText: "資訊科技學習用電腦教室",
        altElectric: "電機技術實作教室",
        altElectricPractice: "電氣安裝實作區",
        altMachine: "機械與管路實作教室",
        altAutomotive: "機械與汽車實作教室",
        altChef: "專業餐飲實作廚房",
        altBakery: "烘焙實作教室",
        altIT: "電腦教室"
      },
      partnerMap: {
        eyebrow: "台灣合作夥伴地圖",
        title: "合作飯店,度假村與企業分布",
        hotel: "飯店與度假村",
        industry: "產業與製造業",
        note: "點選或將游標移到圖釘上查看合作夥伴名稱",
        legendAria: "地圖圖例",
        svgAria: "台灣插畫地圖",
        cities: {
          taipei: "台北",
          keelung: "基隆",
          tainan: "台南",
          kaohsiung: "高雄",
          pingtung: "屏東"
        }
      }
    },

    cn: {
      study: {
        eyebrow: "3+4 教育专业选择",
        item1: "信息技术",
        item2: "微型计算机维修",
        item3: "餐饮管理",
        item4: "烘焙",
        item5: "商业信息"
      },
      facilities: {
        eyebrow: "3+4 教育计划实践设施",
        title: "在实践中学习",
        body: "实践空间支持电气,机械,汽车,餐饮,烘焙与信息技术等职业技能训练",
        electric: "电气技术",
        electricText: "控制面板与电气安装实践",
        electricPractice: "电气实践",
        electricPracticeText: "电气安装与技术技能训练",
        machine: "机械技术",
        machineText: "机械,管路与工作设备实践",
        automotive: "机械与汽车",
        automotiveText: "车辆与机械系统实践",
        chef: "餐饮与厨艺",
        chefText: "专业厨房用于餐饮与酒店实务训练",
        bakery: "烘焙",
        bakeryText: "烘焙设备与食品加工实践",
        it: "信息技术",
        itText: "信息技术学习用电脑教室",
        altElectric: "电气技术实践教室",
        altElectricPractice: "电气安装实践区",
        altMachine: "机械与管路实践教室",
        altAutomotive: "机械与汽车实践教室",
        altChef: "专业餐饮实践厨房",
        altBakery: "烘焙实践教室",
        altIT: "电脑教室"
      },
      partnerMap: {
        eyebrow: "台湾合作伙伴地图",
        title: "合作酒店,度假村与企业分布",
        hotel: "酒店与度假村",
        industry: "产业与制造业",
        note: "点击或将光标移到图钉上查看合作伙伴名称",
        legendAria: "地图图例",
        svgAria: "台湾插画地图",
        cities: {
          taipei: "台北",
          keelung: "基隆",
          tainan: "台南",
          kaohsiung: "高雄",
          pingtung: "屏东"
        }
      }
    }
  };

  const merge = (target, source) => {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        if (!target[key] || typeof target[key] !== "object") target[key] = {};
        merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  };

  Object.keys(add).forEach(lang => {
    if (I18N[lang]) merge(I18N[lang], add[lang]);
  });
})();

/* V28 — clean interactive map label additions */
(() => {
  if (typeof I18N === "undefined") return;
  const add = {
    id:{partnerMap:{cities:{taichung:"Taichung",newtaipei:"New Taipei"}}},
    en:{partnerMap:{cities:{taichung:"Taichung",newtaipei:"New Taipei"}}},
    tw:{partnerMap:{cities:{taichung:"台中",newtaipei:"新北"}}},
    cn:{partnerMap:{cities:{taichung:"台中",newtaipei:"新北"}}}
  };
  Object.keys(add).forEach(lang=>{
    if(!I18N[lang]) return;
    if(!I18N[lang].partnerMap) I18N[lang].partnerMap={};
    if(!I18N[lang].partnerMap.cities) I18N[lang].partnerMap.cities={};
    Object.assign(I18N[lang].partnerMap.cities,add[lang].partnerMap.cities);
  });
})();
