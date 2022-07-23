export const MOBILITY_QUESTION_PAGES: Questions.Page[] = [
  {
    uid: 'mq1',
    title: '自家用車をお持ちですか？',
    category: 'mobility',
    defaultNextPageUid: 'mq2',
    questions: [
      {
        key: 'hasPrivateCar',
        answerType: 'radio',
        options: [
          {
            value: true,
            label: 'はい'
          },
          {
            value: false,
            label: 'いいえ',
            nextPageUid: 'mq6'
          }
        ]
      }
    ]
  },
  {
    uid: 'mq2',
    title: '最も使用する自動車の種類を教えてください',
    category: 'mobility',
    defaultNextPageUid: 'mq4',
    questions: [
      {
        key: 'privateCarType',
        answerType: 'select',
        options: [
          {
            value: 'gasoline_driving-factor',
            label: 'ガソリン車'
          },
          {
            value: 'light_driving-factor',
            label: '軽自動車'
          },
          {
            value: 'hv_driving-factor',
            label: 'ハイブリッド車'
          },
          {
            value: 'phv_driving-factor',
            label: 'プラグインハイブリッド車',
            nextPageUid: 'mq3'
          },
          {
            value: 'ev_driving-factor',
            label: '電気自動車',
            nextPageUid: 'mq3'
          },
          {
            value: 'unknown_driving-factor',
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'mq3',
    title: '電気自動車・プラグインハイブリッド車を自宅で充電しますか？',
    category: 'mobility',
    defaultNextPageUid: 'mq4',
    questions: [
      {
        key: 'carCharging',
        answerType: 'select',
        options: [
          {
            value: 'use-charging-spots-occasionally', //ToDo: input value
            label: '自宅で充電することの方が多いが、充電スポットも利用する'
          },
          {
            value: 'use-charging-spots-sometimes', //ToDo: input value
            label: '自宅と充電スポットを半々で利用する'
          },
          {
            value: 'charge-almost-at-home', //ToDo: input value
            label: 'ほとんど自宅で充電する '
          },
          {
            value: 'use-charging-spots-usually', //ToDo: input value
            label: 'ほとんど充電スポットで充電する '
          },
          {
            value: 'unknown', //ToDo: input value
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'mq4',
    title: '自動車に乗るとき、平均で何人が同じ車に乗リますか？',
    supplement: '運転手を含む',
    category: 'mobility',
    defaultNextPageUid: 'mq5',
    questions: [
      {
        key: 'carPassengers',
        answerType: 'select',
        options: [
          {
            value: 'unknown', //ToDo: input value
            label: '分からない'
          },
          {
            value: '1', //ToDo: input value
            label: 'ほとんど1人'
          },
          {
            value: '1-2', //ToDo: input value
            label: '1~2人'
          },
          {
            value: '2', //ToDo: input value
            label: '2人'
          },
          {
            value: '2-3', //ToDo: input value
            label: '2~3人'
          },
          {
            value: '3', //ToDo: input value
            label: '3人'
          },
          {
            value: '3-4', //ToDo: input value
            label: '3~4人'
          },
          {
            value: '4-more', //ToDo: input value
            label: '4人以上'
          }
        ]
      }
    ]
  },
  {
    uid: 'mq5',
    title: '年間の走行距離を教えてください',
    supplement: 'あなたが乗車していない分は除く',
    category: 'mobility',
    defaultNextPageUid: 'mq6',
    questions: [
      {
        key: 'privateCarAnnualMileage',
        description: '入力例）自動車保険料の支払いで申告した距離',
        unitText: 'km/年',
        answerType: 'numeric'
      }
    ]
  },
  {
    uid: 'mq6',
    title: '自家用車以外の普段の移動手段を教えてください',
    supplement: '利用しない場合は0と入力',
    category: 'mobility',
    defaultNextPageUid: 'mq7',
    skippable: true,
    skipToPageUid: 'mq6-2',
    questions: [
      {
        key: 'trainWeeklyTravelingTime',
        description: '鉄道（地下鉄、在来線など）',
        answerType: 'numeric',
        unitText: '時間/週'
      },
      {
        key: 'busWeeklyTravelingTime',
        description: 'バス',
        answerType: 'numeric',
        unitText: '時間/週'
      },
      {
        key: 'motorbikeWeeklyTravelingTime',
        description: 'バイク（原付含む）',
        answerType: 'numeric',
        unitText: '時間/週'
      },
      {
        key: 'otherCarWeeklyTravelingTime',
        description: 'タクシー、レンタカー、カーシェア',
        answerType: 'numeric',
        unitText: '時間/週'
      }
    ]
  },
  {
    uid: 'mq6-2',
    title: 'お住いの地域（地方）の規模はどのくらいですか？',
    category: 'mobility',
    defaultNextPageUid: 'mq7',
    questions: [
      {
        key: 'livingAreaSize',
        answerType: 'select',
        options: [
          {
            value: 'major-city-or-metropolitan-area', // ToDo input value
            label: '政令指定都市・都区部'
          },
          {
            value: 'city-150k-more', // ToDo input value
            label: '人口15万人以上の市'
          },
          {
            value: 'city-50k-150k', // ToDo input value
            label: '人口5~15万人未満の市'
          },
          {
            value: 'area-less-than-50k', // ToDo input value
            label: '人口5万人未満の市または町・村'
          },
          {
            value: 'unknown', // ToDo input value
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'mq7',
    title: '昨年１年間で、旅行などで利用した移動手段を教えてください',
    supplement: '（出張など仕事目的の移動は除く・利用していな場合は0と入力）',
    category: 'mobility',
    defaultNextPageUid: '',
    questions: [
      {
        key: 'trainAnnuallyTravelingTime',
        description: '鉄道（地下鉄、在来線など）',
        answerType: 'numeric',
        unitText: '時間/年'
      },
      {
        key: 'busAnnualTravelingTime',
        description: 'バス',
        answerType: 'numeric',
        unitText: '時間/年'
      },
      {
        key: 'motorbikeAnnualTravelingTime',
        description: 'バイク（原付含む）',
        answerType: 'numeric',
        unitText: '時間/年'
      },
      {
        key: 'otherCarAnnualTravelingTime',
        description: 'タクシー、レンタカー、カーシェア',
        answerType: 'numeric',
        unitText: '時間/年'
      },
      {
        key: 'airplaneAnnualTravelingTime',
        description: '飛行機（国内・国際線）',
        answerType: 'numeric',
        unitText: '時間/年'
      },
      {
        key: 'ferryAnnualTravelingTime',
        description: 'フェリー路線',
        answerType: 'numeric',
        unitText: '時間/年'
      }
    ],
    isLast: true
  }
]

export const FOOD_QUESTION_PAGES: Questions.Page[] = [
  {
    uid: 'fd1',
    title: '1日の活動量（摂取カロリー量）はどのくらいですか？',
    category: 'food',
    defaultNextPageUid: 'fd2',
    questions: [
      {
        key: 'foodIntakeFactorKey',
        answerType: 'radio',
        options: [
          {
            value: 'very-little',
            label: '約1,400kcal かなりすくない',
            subLabel: '小学校低・中学年の子ども、高齢の女性'
          },
          {
            value: 'somewhat-little',
            label: '約2,000kcal やや少ない',
            subLabel: '座って過ごすことが多い女性、高齢の男性'
          },
          {
            value: 'moderate',
            label: '約2,200kcal　普通',
            subLabel: '軽い運動や立ち仕事がある女性、座って過ごすことが多い男性'
          },
          {
            value: 'somewhat-much',
            label: '約2,400kcal　やや多い',
            subLabel: '軽い運動や立ち仕事がある男性、運動習慣の多い女性'
          },
          {
            value: 'very-much',
            label: '約3,000kcal　かなり多い',
            subLabel: '立ち仕事や移動、運動習慣の多い男性'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'fd2',
    title: '食材を捨てたり食べ残し（食品ロス）が生じる頻度はどのくらいですか？',
    category: 'food',
    defaultNextPageUid: 'fd3',
    questions: [
      {
        key: 'foodDirectWasteFactorKey',
        description: '賞味期限切れなどで未使用の食品や食材を捨ててしまう頻度',
        answerType: 'select',
        options: [
          {
            value: '1-per-week',
            label: '週に1回'
          },
          {
            value: '2-3-per-week',
            label: '週に2～3回'
          },
          {
            value: '4-7-per-week',
            label: '週に4～7回'
          },
          {
            value: '8-more-per-week',
            label: '週に8回以上'
          },
          {
            value: 'seldom',
            label: 'ほとんどない'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      },
      {
        key: 'foodLeftoverFactorKey',
        description: '食べ残しの頻度',
        answerType: 'select',
        options: [
          {
            value: '1-per-week',
            label: '週に1回'
          },
          {
            value: '2-3-per-week',
            label: '週に2～3回'
          },
          {
            value: '4-7-per-week',
            label: '週に4～7回'
          },
          {
            value: '8-more-per-week',
            label: '週に8回以上'
          },
          {
            value: 'seldom',
            label: 'ほとんどない'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'fd3',
    title: '普段の食生活を教えてください',
    supplement: '（外食、惣菜、弁当、テイクアウトも含む）',
    category: 'food',
    defaultNextPageUid: 'fd4',
    questions: [
      {
        key: 'dishBeefFactorKey',
        description: '牛肉を食べる頻度',
        answerType: 'select',
        options: [
          {
            value: 'never',
            label: '食べない'
          },
          {
            value: '1-less-per-month',
            label: '月に1日以下'
          },
          {
            value: '2-3-per-month',
            label: '月に2〜3日'
          },
          {
            value: '1-per-week',
            label: '週に1日'
          },
          {
            value: '2-3-per-week',
            label: '週に2〜3日'
          },
          {
            value: '4-5-per-week',
            label: '週に4〜5日'
          },
          {
            value: 'everyday',
            label: 'ほぼ毎日'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      },
      {
        key: 'dishPorkFactorKey',
        description: '豚肉を食べる頻度',
        answerType: 'select',
        options: [
          {
            value: 'never',
            label: '食べない'
          },
          {
            value: '1-less-per-month',
            label: '月に1日以下'
          },
          {
            value: '2-3-per-month',
            label: '月に2〜3日'
          },
          {
            value: '1-per-week',
            label: '週に1日'
          },
          {
            value: '2-3-per-week',
            label: '週に2〜3日'
          },
          {
            value: '4-5-per-week',
            label: '週に4〜5日'
          },
          {
            value: 'everyday',
            label: 'ほぼ毎日'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      },
      {
        key: 'dishChickenFactorKey',
        description: '鶏肉を食べる頻度',
        answerType: 'select',
        options: [
          {
            value: 'never',
            label: '食べない'
          },
          {
            value: '1-less-per-month',
            label: '月に1日以下'
          },
          {
            value: '2-3-per-month',
            label: '月に2〜3日'
          },
          {
            value: '1-per-week',
            label: '週に1日'
          },
          {
            value: '2-3-per-week',
            label: '週に2〜3日'
          },
          {
            value: '4-5-per-week',
            label: '週に4〜5日'
          },
          {
            value: 'everyday',
            label: 'ほぼ毎日'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      },
      {
        key: 'dishSeafoodFactorKey',
        description: '魚介を食べる頻度',
        answerType: 'select',
        options: [
          {
            value: 'never',
            label: '食べない'
          },
          {
            value: '1-less-per-month',
            label: '月に1日以下'
          },
          {
            value: '2-3-per-month',
            label: '月に2〜3日'
          },
          {
            value: '1-per-week',
            label: '週に1日'
          },
          {
            value: '2-3-per-week',
            label: '週に2〜3日'
          },
          {
            value: '4-5-per-week',
            label: '週に4〜5日'
          },
          {
            value: 'everyday',
            label: 'ほぼ毎日'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      },
      {
        key: 'dairyFoodFactorKey',
        description: '乳製品、卵を食べる頻度',
        answerType: 'select',
        options: [
          {
            value: 'never',
            label: '食べない'
          },
          {
            value: '1-2-less-per-week',
            label: '週に1〜2回以下'
          },
          {
            value: 'half-of-week',
            label: '週の半分'
          },
          {
            value: '1-per-day',
            label: '1日1回'
          },
          {
            value: '2-per-day',
            label: '1日2回'
          },
          {
            value: '3-more-per-day',
            label: '1日3回以上'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'fd4',
    title: '１週間にどのくらいの頻度でお酒を飲みますか？',
    supplement: '（外食の場合も含む）',
    category: 'food',
    defaultNextPageUid: 'fd5',
    questions: [
      {
        key: 'alcoholFactorKey',
        answerType: 'select',
        options: [
          {
            value: 'never',
            label: '飲まない'
          },
          {
            value: '1-less-per-month',
            label: '月に1日以下'
          },
          {
            value: '2-3-per-month',
            label: '月に2〜3日'
          },
          {
            value: '1-per-week',
            label: '週に1日'
          },
          {
            value: '2-3-per-week',
            label: '週に2〜3日'
          },
          {
            value: '4-5-per-week',
            label: '週に4〜5日'
          },
          {
            value: 'everyday',
            label: 'ほぼ毎日'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'fd5',
    title: 'お酒以外の飲み物、お菓子類の1ヶ月の支出はどのくらいですか？',
    supplement:
      '（コーヒー、お茶、炭酸飲料、ノンアルコールビール、スイーツ、スナック類など）',
    category: 'food',
    defaultNextPageUid: 'fd6',
    questions: [
      {
        key: 'softDrinkSnackFactorKey',
        answerType: 'select',
        subDescription:
          '家族の分もあわせて購入している場合、あなた自身が消費している分だけで考えましょう。',
        options: [
          {
            value: '3k-less',
            label: '月に¥3,000未満'
          },
          {
            value: '3k-5k',
            label: '月に¥3,000〜¥5,000未満'
          },
          {
            value: '5k-10k',
            label: '月に¥5,000〜¥10,000未満'
          },
          {
            value: '10k-15k',
            label: '月に¥10,000〜¥15,000未満'
          },
          {
            value: '15k-more',
            label: '月に¥15,000以上'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      }
    ]
  },
  {
    uid: 'fd6',
    title: '1ヶ月の外食費はどのくらいですか？',
    supplement: '（惣菜、弁当、テイクアウトなどは除く）',
    category: 'food',
    defaultNextPageUid: '',
    isLast: true,
    questions: [
      {
        key: 'eatOutFactorKey',
        answerType: 'select',
        subDescription:
          '家族の分もあわせて購入している場合、あなた自身が消費している分だけで考えましょう。',
        options: [
          {
            value: '5k-less',
            label: '月に¥5,000未満'
          },
          {
            value: '5k-10k',
            label: '月に¥5,000〜¥10,000未満'
          },
          {
            value: '10k-20k',
            label: '月に¥10,000〜¥20,000未満'
          },
          {
            value: '20k-50k',
            label: '月に¥20,000〜¥50,000未満'
          },
          {
            value: '50k-more',
            label: '月に¥50,000以上'
          },
          {
            value: 'unknown',
            label: '分からない'
          }
        ]
      }
    ]
  }
]
