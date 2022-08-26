export const MOBILITY_ACTIONS: Actions.Action[] = [
  {
    id: 1,
    domain: "mobility",
    option: "telework",
    category: "mobility",
    label: "テレワーク",
    description: "通勤目的の移動をゼロにする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 2,
    domain: "mobility",
    option: "closework",
    category: "mobility",
    label: "自宅と職場・学校の距離を近く",
    description: "職住近接により通勤・通学に費やす時間を1日あたり平均30分に短縮する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 3,
    domain: "mobility",
    option: "mictourism",
    category: "mobility",
    label: "マイクロツーリズム",
    description: "旅行や週末のレジャーを近場で過ごす（県内や隣の県への旅行、自転車圏内のレジャー）",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 4,
    domain: "mobility",
    option: "closeservice",
    category: "mobility",
    label: "コンパクトな街に住む",
    description: "コンパクトな町に住むことで、買い物や通院などのために移動に費やす時間を1日あたり平均10分に短縮する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 5,
    domain: "mobility",
    option: "dailyshift",
    category: "mobility",
    label: "日常生活や通勤での公共交通・自転車の利用",
    description: "通勤や日常的な移動にマイカーを使わず、バス・電車・自転車を利用する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 6,
    domain: "mobility",
    option: "longshift",
    category: "mobility",
    label: "長期休暇や帰省での公共交通の利用",
    description: "旅行や帰省などにマイカー・飛行機・フェリーを使わず、バス・電車を利用する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 7,
    domain: "mobility",
    option: "rideshare",
    category: "mobility",
    label: "ライドシェアリング",
    description: "同じ目的地の人と相乗り（ライドシェア）を行うことで、マイカーやタクシーに4人が乗り合わせてから移動する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 8,
    domain: "mobility",
    option: "carshare",
    category: "mobility",
    label: "カーシェアリング",
    description: "マイカーを購入せず、カーシェアリング・レンタカーを利用する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 9,
    domain: "mobility",
    option: "car-ev-phv",
    category: "mobility",
    label: "マイカー・カーシェアリングを電気自動車・プラグインハイブリッド車に",
    description: "マイカーを電気自動車やプラグインハイブリッド車に買い替える",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 10,
    domain: "mobility",
    option: "car-ev-phv-re",
    category: "mobility",
    label: "電気自動車・プラグインハイブリッド車を再エネで充電",
    description: "マイカーを電気自動車やプラグインハイブリッド車に買い替え、充電を再生可能エネルギー由来の電力で行う",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  }
]

export const HOUSING_ACTIONS: Actions.Action[] = [
  {
    id: 1,
    domain: "housing",
    option: "zeh",
    category: "housing",
    label: "自宅をゼロエネルギー住宅に",
    description: "屋根の太陽光発電と高い省エネ性能によって、日常的なエネルギー消費を実質ゼロにするゼロエネルギー住宅に住み替える",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 2,
    domain: "housing",
    option: "self-re",
    category: "housing",
    label: "自宅に太陽光パネル設置",
    description: "自宅の屋根に太陽光パネルを設置して実質的に自宅の消費電力のすべてを賄う",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 3,
    domain: "housing",
    option: "grid-re",
    category: "housing",
    label: "自宅の電力を再エネに",
    description: "自宅の電力を再生可能エネルギー由来100%のプランに切り替える",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 4,
    domain: "housing",
    option: "com-house",
    category: "housing",
    label: "自宅をコンパクトに",
    description: "自宅の床面積を集合住宅の平均水準までコンパクトにすることで、冷暖房や照明に必要なエネルギーを減らす",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 5,
    domain: "housing",
    option: "insrenov",
    category: "housing",
    label: "自宅を断熱リフォーム",
    description: "自宅をリフォームして断熱等性能等級4にする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 6,
    domain: "housing",
    option: "clothes-home",
    category: "housing",
    label: "自宅でウォームビズ・クールビズ",
    description: "自宅でウォームビズやクールビズの服装をすることで、冷暖房に必要なエネルギーを節約する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 7,
    domain: "housing",
    option: "ec",
    category: "housing",
    label: "ヒートポンプによる温水供給",
    description: "ヒートポンプによる温水供給設備を導入することで、温水供給を電気により行う",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 8,
    domain: "housing",
    option: "ac",
    category: "housing",
    label: "自宅の暖房をエアコンだけに",
    description: "暖房にガスストーブや石油ストーブを使わず、代わりにエアコンを使う",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 9,
    domain: "housing",
    option: "led",
    category: "housing",
    label: "自宅の電球をLEDに",
    description: "自宅の電球をすべてLEDに置き換える",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 10,
    domain: "housing",
    option: "enenudge",
    category: "housing",
    label: "消費電力のスマートモニタリングを通した節電",
    description: "自宅で電力消費量のモニタリングシステム（HEMSやアプリなど）を通して節電する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  }
]

export const FOOD_ACTIONS: Actions.Action[] = [
  {
    id: 1,
    domain: "food",
    option: "vegan",
    category: "food",
    label: "食事を完全菜食（ヴィーガン）に",
    description: "肉・魚・乳製品・卵を食べず、代わりに豆類・穀物・野菜などを食べる生活をする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 2,
    domain: "food",
    option: "vegetarian",
    category: "food",
    label: "食事を菜食（ベジタリアン）に",
    description: "肉・魚を食べず、代わりに乳製品・卵・豆類・穀物・野菜などを食べる生活をする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 3,
    domain: "food",
    option: "white-meat-fish",
    category: "food",
    label: "食事の肉類を鶏肉または魚介類に",
    description: "牛肉・豚肉などを食べず、代わりに鶏肉や魚介類を食べる生活をする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 4,
    domain: "food",
    option: "guide-meal",
    category: "food",
    label: "バランスの取れた食事に",
    description: "食事全体を、食事バランスガイドで推奨される健康的な食生活のバランスに整える",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 5,
    domain: "food",
    option: "guide-snack-drink",
    category: "food",
    label: "菓子・アルコール・ジュースを減らす",
    description: "菓子・スナック類・アルコール・清涼飲料水の消費量を、食事バランスガイドで推奨される健康的な食生活の水準まで減らす",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 6,
    domain: "food",
    option: "loss",
    category: "food",
    label: "食品ロスを減らす",
    description: "家庭での食品ロス、レストランでの食べ残しをなくし、その分だけ食料の購入量を減らす",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 7,
    domain: "food",
    option: "seasonal",
    category: "food",
    label: "旬の野菜や果物を食べる",
    description: "旬の野菜や果物を食べて、農業用ハウスで栽培されるものを食べない生活をする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 8,
    domain: "food",
    option: "local",
    category: "food",
    label: "地元で採れた野菜を食べる",
    description: "地元で採れた野菜だけを食べる生活をする",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
]

export const OTHER_ACTIONS: Actions.Action[] = [
  {
    id: 1,
    domain: "other",
    option: "clothes-accessory",
    category: "other",
    label: "衣類と宝飾品を長く使う",
    description: "衣類・バッグ・ジュエリーを長く使ったり、古着を活用したりすることで、1年間あたりの新規購入量を日本人平均の約4分の1にまで削減する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 2,
    domain: "other",
    option: "electronics-furniture",
    category: "other",
    label: "小型家電と家具を長く使う",
    description: "家具・カーペット類を壊れるまで長く大切に使い、小型家電を厳選して購入し長く使うことで、1年あたりの新規購入量を日本人平均の約4～5分の1にまで削減する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 3,
    domain: "other",
    option: "hobby",
    category: "other",
    label: "娯楽用品を長く使う",
    description: "エンターテインメント・スポーツ・ガーデニングなど娯楽に関する製品を厳選して購入し、長く大切に使うことで、1年間あたりの新規購入量を日本人平均の約4分の1にまで削減する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 4,
    domain: "other",
    option: "consumables",
    category: "other",
    label: "消耗品を節約する",
    description: "化粧品・衛生用品・台所用品・文房具を節約し、1年間あたりの新規購入量を日本人平均の約半分にまで削減する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 5,
    domain: "other",
    option: "books",
    category: "other",
    label: "電子書籍の利用",
    description: "印刷された本や雑誌を利用せず、代わりに電子書籍を利用する",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
  {
    id: 6,
    domain: "other",
    option: "eco-tourism",
    category: "other",
    label: "レジャーや旅行をアウトドアや地域のレクレーションで",
    description: "エネルギー消費の多い宿泊施設・娯楽施設（映画館、遊園地など）の代わりに、使われていないモノやスペースを活用したアウトドアやキャンプ、地域でのレクレーション（スポーツ・野外・文化活動など）で週末のレジャーや休暇を過ごす",
    reductionEffect: 0,
    actionIntensityRate: null,
    checked: false
  },
]
