export const MOBILITY_ACTIONS: Actions.Action[] = [
  {
    dirAndDomain: "telework-option_mobility",
    category: "mobility",
    label: "テレワーク",
    description: "通勤目的の移動をゼロにする",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "closework-option_mobility",
    category: "mobility",
    label: "自宅と職場・学校の距離を近く",
    description: "職住近接により通勤・通学に費やす時間を1日あたり平均30分に短縮する",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "mictourism-option_mobility",
    category: "mobility",
    label: "マイクロツーリズム",
    description: "旅行や週末のレジャーを近場で過ごす（県内や隣の県への旅行、自転車圏内のレジャー）",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "closeservice-option_mobility",
    category: "mobility",
    label: "コンパクトな街に住む",
    description: "コンパクトな町に住むことで、買い物や通院などのために移動に費やす時間を1日あたり平均10分に短縮する",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "dailyshift-option_mobility",
    category: "mobility",
    label: "日常生活や通勤での公共交通・自転車の利用",
    description: "通勤や日常的な移動にマイカーを使わず、バス・電車・自転車を利用する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "longshift-option_mobility",
    category: "mobility",
    label: "長期休暇や帰省での公共交通の利用",
    description: "旅行や帰省などにマイカー・飛行機・フェリーを使わず、バス・電車を利用する",
    defaultActionIntensityRate: 0.25,
  },
  {
    dirAndDomain: "rideshare-option_mobility",
    category: "mobility",
    label: "ライドシェアリング",
    description: "同じ目的地の人と相乗り（ライドシェア）を行うことで、マイカーやタクシーに4人が乗り合わせてから移動する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "carshare-option_mobility",
    category: "mobility",
    label: "カーシェアリング",
    description: "マイカーを購入せず、カーシェアリング・レンタカーを利用する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "car-ev-phv-option_mobility",
    category: "mobility",
    label: "マイカー・カーシェアリングを電気自動車・プラグインハイブリッド車に",
    description: "マイカーを電気自動車やプラグインハイブリッド車に買い替える",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  },
  {
    dirAndDomain: "car-ev-phv-re-option_mobility",
    category: "mobility",
    label: "電気自動車・プラグインハイブリッド車を再エネで充電",
    description: "マイカーを電気自動車やプラグインハイブリッド車に買い替え、充電を再生可能エネルギー由来の電力で行う",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  }
]

export const HOUSING_ACTIONS: Actions.Action[] = [
  {
    dirAndDomain: "zeh-option_housing",
    category: "housing",
    label: "自宅をゼロエネルギー住宅に",
    description: "屋根の太陽光発電と高い省エネ性能によって、日常的なエネルギー消費を実質ゼロにするゼロエネルギー住宅に住み替える",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  },
  {
    dirAndDomain: "self-re-option_housing",
    category: "housing",
    label: "自宅に太陽光パネル設置",
    description: "自宅の屋根に太陽光パネルを設置して実質的に自宅の消費電力のすべてを賄う",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  },
  {
    dirAndDomain: "grid-re-option_housing",
    category: "housing",
    label: "自宅の電力を再エネに",
    description: "自宅の電力を再生可能エネルギー由来100%のプランに切り替える",
    defaultActionIntensityRate: 1
  },
  {
    dirAndDomain: "com-house-option_housing",
    category: "housing",
    label: "自宅をコンパクトに",
    description: "自宅の床面積を集合住宅の平均水準までコンパクトにすることで、冷暖房や照明に必要なエネルギーを減らす",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  },
  {
    dirAndDomain: "insrenov-option_housing",
    category: "housing",
    label: "自宅を断熱リフォーム",
    description: "自宅をリフォームして断熱等性能等級4にする",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  },
  {
    dirAndDomain: "clothes-home-option_housing",
    category: "housing",
    label: "自宅でウォームビズ・クールビズ",
    description: "自宅でウォームビズやクールビズの服装をすることで、冷暖房に必要なエネルギーを節約する",
    defaultActionIntensityRate: 0.5,
  },
  {
    dirAndDomain: "ec-option_housing",
    category: "housing",
    label: "ヒートポンプによる温水供給",
    description: "ヒートポンプによる温水供給設備を導入することで、温水供給を電気により行う",
    defaultActionIntensityRate: 1,
    rangeActionIntensityRate: [0, 1]
  },
  {
    dirAndDomain: "ac-option_housing",
    category: "housing",
    label: "自宅の暖房をエアコンだけに",
    description: "暖房にガスストーブや石油ストーブを使わず、代わりにエアコンを使う",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "led-option_housing",
    category: "housing",
    label: "自宅の電球をLEDに",
    description: "自宅の電球をすべてLEDに置き換える",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "enenudge-option_housing",
    category: "housing",
    label: "消費電力のスマートモニタリングを通した節電",
    description: "自宅で電力消費量のモニタリングシステム（HEMSやアプリなど）を通して節電する",
    defaultActionIntensityRate: 0.5
  }
]

export const FOOD_ACTIONS: Actions.Action[] = [
  {
    dirAndDomain: "vegan-option_food",
    category: "food",
    label: "食事を完全菜食（ヴィーガン）に",
    description: "肉・魚・乳製品・卵を食べず、代わりに豆類・穀物・野菜などを食べる生活をする",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "vegetarian-option_food",
    category: "food",
    label: "食事を菜食（ベジタリアン）に",
    description: "肉・魚を食べず、代わりに乳製品・卵・豆類・穀物・野菜などを食べる生活をする",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "white-meat-fish-option_food",
    category: "food",
    label: "食事の肉類を鶏肉または魚介類に",
    description: "牛肉・豚肉などを食べず、代わりに鶏肉や魚介類を食べる生活をする",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "guide-meal-option_food",
    category: "food",
    label: "バランスの取れた食事に",
    description: "食事全体を、食事バランスガイドで推奨される健康的な食生活のバランスに整える",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "guide-snack-drink-option_food",
    category: "food",
    label: "菓子・アルコール・ジュースを減らす",
    description: "菓子・スナック類・アルコール・清涼飲料水の消費量を、食事バランスガイドで推奨される健康的な食生活の水準まで減らす",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "loss-option_food",
    category: "food",
    label: "食品ロスを減らす",
    description: "家庭での食品ロス、レストランでの食べ残しをなくし、その分だけ食料の購入量を減らす",
    defaultActionIntensityRate: 0.5
  },
  {
    dirAndDomain: "seasonal-option_food",
    category: "food",
    label: "旬の野菜や果物を食べる",
    description: "旬の野菜や果物を食べて、農業用ハウスで栽培されるものを食べない生活をする",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "local-option_food",
    category: "food",
    label: "地元で採れた野菜を食べる",
    description: "地元で採れた野菜だけを食べる生活をする",
    defaultActionIntensityRate: 0.25
  },
]

export const OTHER_ACTIONS: Actions.Action[] = [
  {
    dirAndDomain: "clothes-accessory-option_other",
    category: "other",
    label: "衣類と宝飾品を長く使う",
    description: "衣類・バッグ・ジュエリーを長く使ったり、古着を活用したりすることで、1年間あたりの新規購入量を日本人平均の約4分の1にまで削減する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "electronics-furniture-option_other",
    category: "other",
    label: "小型家電と家具を長く使う",
    description: "家具・カーペット類を壊れるまで長く大切に使い、小型家電を厳選して購入し長く使うことで、1年あたりの新規購入量を日本人平均の約4～5分の1にまで削減する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "hobby-option_other",
    category: "other",
    label: "娯楽用品を長く使う",
    description: "エンターテインメント・スポーツ・ガーデニングなど娯楽に関する製品を厳選して購入し、長く大切に使うことで、1年間あたりの新規購入量を日本人平均の約4分の1にまで削減する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "consumables-option_other",
    category: "other",
    label: "消耗品を節約する",
    description: "化粧品・衛生用品・台所用品・文房具を節約し、1年間あたりの新規購入量を日本人平均の約半分にまで削減する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "books-option_other",
    category: "other",
    label: "電子書籍の利用",
    description: "印刷された本や雑誌を利用せず、代わりに電子書籍を利用する",
    defaultActionIntensityRate: 0.25
  },
  {
    dirAndDomain: "eco-tourism-option_other",
    category: "other",
    label: "レジャーや旅行をアウトドアや地域のレクレーションで",
    description: "エネルギー消費の多い宿泊施設・娯楽施設（映画館、遊園地など）の代わりに、使われていないモノやスペースを活用したアウトドアやキャンプ、地域でのレクレーション（スポーツ・野外・文化活動など）で週末のレジャーや休暇を過ごす",
    defaultActionIntensityRate: 0.25
  },
]
