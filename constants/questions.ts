export const QUESTION_DENOMINATOR = {
  mobility: 7,
  housing: 10,
  food: 6,
  other: 8
}

export const MOBILITY_QUESTION_PAGES: Questions.Page[] = [
  {
    uid: 'mq1',
    title: '自家用車をお持ちですか？',
    category: 'mobility',
    defaultNextPageUid: 'mq2',
    numerator: 1,
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
    numerator: 2,
    questions: [
      {
        key: 'carIntensityFactorFirstKey',
        answerType: 'select',
        options: [
          {
            value: 'gasoline',
            label: 'ガソリン車'
          },
          {
            value: 'light',
            label: '軽自動車'
          },
          {
            value: 'hv',
            label: 'ハイブリッド車'
          },
          {
            value: 'phv',
            label: 'プラグインハイブリッド車',
            nextPageUid: 'mq3'
          },
          {
            value: 'ev',
            label: '電気自動車',
            nextPageUid: 'mq3'
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
    uid: 'mq3',
    title: '電気自動車・プラグインハイブリッド車を自宅で充電しますか？',
    category: 'mobility',
    defaultNextPageUid: 'mq4',
    numerator: 3,
    questions: [
      {
        key: 'carChargingKey',
        answerType: 'select',
        options: [
          {
            value: 'use-charging-spots-occasionally',
            label: '自宅で充電することの方が多いが、充電スポットも利用する'
          },
          {
            value: 'use-charging-spots-sometimes',
            label: '自宅と充電スポットを半々で利用する'
          },
          {
            value: 'charge-almost-at-home',
            label: 'ほとんど自宅で充電する '
          },
          {
            value: 'use-charging-spots-usually',
            label: 'ほとんど充電スポットで充電する '
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
    uid: 'mq4',
    title: '自動車に乗るとき、平均で何人が同じ車に乗リますか？',
    supplement: '（運転手を含む）',
    category: 'mobility',
    defaultNextPageUid: 'mq5',
    numerator: 4,
    questions: [
      {
        key: 'carPassengersFirstKey',
        answerType: 'select',
        options: [
          {
            value: 'unknown',
            label: '分からない'
          },
          {
            value: '1',
            label: 'ほとんど1人'
          },
          {
            value: '1-2',
            label: '1~2人'
          },
          {
            value: '2',
            label: '2人'
          },
          {
            value: '2-3',
            label: '2~3人'
          },
          {
            value: '3',
            label: '3人'
          },
          {
            value: '3-4',
            label: '3~4人'
          },
          {
            value: '4-more',
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
    numerator: 5,
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
    numerator: 6,
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
    isLast: true,
    defaultNextPageUid: '',
    numerator: 6,
    questions: [
      {
        key: 'mileageByAreaFirstKey',
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
    beforeSubmitProcess: (data: any) => {
      data.hasTravelingTime = true
      return data
    },
    defaultNextPageUid: '',
    numerator: 7,
    questions: [
      {
        key: 'trainAnnualTravelingTime',
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
    numerator: 1,
    questions: [
      {
        key: 'foodIntakeFactorKey',
        answerType: 'radio',
        options: [
          {
            value: 'very-little',
            label: '約1,400kcal かなり少ない',
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
    numerator: 2,
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
    numerator: 3,
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
    title: 'どのくらいの頻度でお酒を飲みますか？',
    supplement: '（外食の場合も含む）',
    category: 'food',
    defaultNextPageUid: 'fd5',
    numerator: 4,
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
            value: '2-3-less-per-month',
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
    numerator: 5,
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
    numerator: 6,
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

export const HOUSING_QUESTION_PAGES: Questions.Page[] = [
  {
    uid: 'hs1',
    title: 'あなたを含めて一緒に暮らしている人数を教えてください',
    category: 'housing',
    defaultNextPageUid: 'hs2',
    numerator: 1,
    questions: [
      {
        key: 'residentCount',
        answerType: 'select',
        options: new Array(15).fill('').map((_, i) => {
          return { label: `${i + 1}人`, value: i + 1 }
        }),
        returnValueType: 'number'
      }
    ]
  },
  {
    uid: 'hs2',
    title: 'あなたの家の部屋はいくつありますか？',
    category: 'housing',
    defaultNextPageUid: 'hs3',
    numerator: 2,
    questions: [
      {
        key: 'housingSizeKey',
        answerType: 'select',
        options: [
          {
            value: '1-room',
            label: '1部屋（ワンルーム, 1K）'
          },
          {
            value: '2-room',
            label: '2部屋（1DK, 2K）'
          },
          {
            value: '3-room',
            label: '3部屋相当（2DK, 1LDK, 3K）'
          },
          {
            value: '4-room',
            label: '4部屋相当（3DK, 2LDK）'
          },
          {
            value: '5-6-room',
            label: '5〜6部屋相当（3LDK, 4LDK）'
          },
          {
            value: '7-more-room',
            label: '7部屋以上（5LDK以上）'
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
    uid: 'hs3',
    title: '現在住んでいる住居の建築年はいつ頃ですか？',
    category: 'housing',
    defaultNextPageUid: 'hs4',
    numerator: 3,
    questions: [
      {
        key: 'housingInsulationFirstKey',
        answerType: 'select',
        options: [
          {
            value: 'no-insulation',
            label: '1970年代以前（無断熱）'
          },
          {
            value: '2-level',
            label: '1980年代（断熱等級2級）'
          },
          {
            value: '3-level',
            label: '1990年代（断熱等級3級）'
          },
          {
            value: '4-level',
            label: '2000年代以降（断熱等級4級）'
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
    uid: 'hs4',
    title: '自宅の電力は何を使用していますか？',
    category: 'housing',
    defaultNextPageUid: 'hs5',
    numerator: 4,
    questions: [
      {
        key: 'electricityIntensityKey',
        answerType: 'select',
        options: [
          {
            value: 'conventional',
            label: '通常の電力'
          },
          {
            value: 'solar-panel',
            label: '屋上太陽光パネル'
          },
          {
            value: '30-renewable',
            label: '30%再生可能エネルギー'
          },
          {
            value: '50-renewable',
            label: '50%再生可能エネルギー'
          },
          {
            value: '100-renewable',
            label: '100%再生可能エネルギー'
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
    uid: 'hs5',
    title: '1ヶ月の電力使用量はどのくらいですか？',
    category: 'housing',
    defaultNextPageUid: 'hs6',
    skipToPageUid: 'hs6',
    numerator: 5,
    questions: [
      {
        key: 'electricityMonthlyConsumption',
        answerType: 'numeric',
        unitText: 'kWh'
      },
      {
        key: 'electricitySeasonFactorKey',
        subDescription: '対象月',
        answerType: 'select',
        options: [
          {
            value: 'january',
            label: '1月'
          },
          {
            value: 'february',
            label: '2月'
          },
          {
            value: 'march',
            label: '3月'
          },
          {
            value: 'april',
            label: '4月'
          },
          {
            value: 'may',
            label: '5月'
          },
          {
            value: 'june',
            label: '6月'
          },
          {
            value: 'july',
            label: '7月'
          },
          {
            value: 'august',
            label: '8月'
          },
          {
            value: 'september',
            label: '9月'
          },
          {
            value: 'october',
            label: '10月'
          },
          {
            value: 'november',
            label: '11月'
          },
          {
            value: 'december',
            label: '12月'
          }
        ]
      }
    ]
  },
  {
    uid: 'hs6',
    title: '暖房、温水供給、調理にガスを使用していますか？',
    category: 'housing',
    defaultNextPageUid: 'hs7',
    numerator: 6,
    questions: [
      {
        key: 'useGas',
        answerType: 'radio',
        options: [
          {
            value: true,
            label: 'はい'
          },
          {
            value: false,
            label: 'いいえ',
            nextPageUid: 'hs9'
          }
        ]
      }
    ]
  },
  {
    uid: 'hs7',
    title: '使用しているガスの種類を教えてください',
    category: 'housing',
    defaultNextPageUid: 'hs8',
    numerator: 7,
    questions: [
      {
        key: 'energyHeatIntensityKey',
        answerType: 'select',
        options: [
          {
            value: 'urban-gas',
            label: '都市ガス'
          },
          {
            value: 'lpg',
            label: 'プロパンガス'
          }
        ]
      }
    ]
  },
  {
    uid: 'hs8',
    title: '1ヶ月のガス使用量はどのくらいですか？',
    category: 'housing',
    defaultNextPageUid: 'hs9',
    skipToPageUid: 'hs9',
    numerator: 8,
    questions: [
      {
        key: 'gasMonthlyConsumption',
        answerType: 'numeric',
        unitText: '㎥'
      },
      {
        key: 'gasSeasonFactorKey',
        description: '対象月',
        answerType: 'select',
        options: [
          {
            value: 'january',
            label: '1月'
          },
          {
            value: 'february',
            label: '2月'
          },
          {
            value: 'march',
            label: '3月'
          },
          {
            value: 'april',
            label: '4月'
          },
          {
            value: 'may',
            label: '5月'
          },
          {
            value: 'june',
            label: '6月'
          },
          {
            value: 'july',
            label: '7月'
          },
          {
            value: 'august',
            label: '8月'
          },
          {
            value: 'september',
            label: '9月'
          },
          {
            value: 'october',
            label: '10月'
          },
          {
            value: 'november',
            label: '11月'
          },
          {
            value: 'december',
            label: '12月'
          }
        ]
      }
    ]
  },
  {
    uid: 'hs9',
    title: '暖房などに灯油を使用していますか？',
    category: 'housing',
    defaultNextPageUid: 'hs10',
    numerator: 9,
    questions: [
      {
        key: 'useKerosene',
        answerType: 'radio',
        options: [
          {
            value: true,
            label: 'はい'
          },
          {
            value: false,
            label: 'いいえ',
            nextPageUid: 'result'
          }
        ]
      }
    ]
  },
  {
    uid: 'hs10',
    title: '昨シーズンの灯油の使用量はどのくらいですか？',
    category: 'housing',
    defaultNextPageUid: '',
    isLast: true,
    skipToPageUid: 'hs11',
    numerator: 10,
    questions: [
      {
        key: 'keroseneMonthlyConsumption',
        answerType: 'numeric',
        unitText: 'リットル/月'
      },
      {
        key: 'keroseneMonthCount',
        answerType: 'numeric',
        unitText: 'ヶ月/年'
      }
    ]
  },
  {
    uid: 'hs11',
    title: 'お住まいの地域（地方）はどちらですか？',
    category: 'housing',
    defaultNextPageUid: '',
    isLast: true,
    numerator: 10,
    questions: [
      {
        key: 'housingAmountByRegionFirstKey',
        answerType: 'select',
        options: [
          {
            value: 'northeast',
            label: '北海道・東北・北陸地方'
          },
          {
            value: 'middle',
            label: '関東・東海・近畿・中国・四国地方'
          },
          {
            value: 'southwest',
            label: '九州・沖縄地方'
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

export const OTHER_QUESTION_PAGES: Questions.Page[] = [
  {
    uid: 'ot1',
    title: '日用消耗品の支出はどのくらいですか？',
    supplement: '（衛生用品・キッチン用品・文具など）',
    category: 'other',
    defaultNextPageUid: 'ot2',
    numerator: 1,
    questions: [
      {
        key: 'dailyGoodsAmountKey',
        answerType: 'select',
        subDescription: '世帯での合計金額',
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
            value: '20k-30k',
            label: '月に¥20,000〜¥30,000未満'
          },
          {
            value: '30k-more',
            label: '月に¥30,000以上'
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
    uid: 'ot2',
    title: '通信費、放送受信料を合わせた支出はどのくらいですか？',
    category: 'other',
    defaultNextPageUid: 'ot3',
    numerator: 2,
    questions: [
      {
        key: 'communicationAmountKey',
        answerType: 'select',
        subDescription: '世帯での合計金額',
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
            value: '20k-30k',
            label: '月に¥20,000〜¥30,000未満'
          },
          {
            value: '30k-more',
            label: '月に¥30,000以上'
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
    uid: 'ot3',
    title: '過去1年間の家電、家具などの大型な買い物の支出はどのくらいですか？',
    category: 'other',
    defaultNextPageUid: 'ot4',
    numerator: 3,
    questions: [
      {
        key: 'applianceFurnitureAmountKey',
        answerType: 'select',
        subDescription: '世帯での合計金額',
        options: [
          {
            value: '50k-less',
            label: '¥50,000未満'
          },
          {
            value: '50k-100k',
            label: '¥5,0000〜¥100,000未満'
          },
          {
            value: '100k-200k',
            label: '¥100,000〜¥200,000未満'
          },
          {
            value: '200k-300k',
            label: '¥200,000〜¥300,000未満'
          },
          {
            value: '300k-400k',
            label: '¥300,000〜¥400,000未満'
          },
          {
            value: '400k-more',
            label: '¥400,000以上'
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
    uid: 'ot4',
    title: '医療、福祉、教育、塾などの習い事の支出はどのくらいですか？',
    supplement: '（保険料、美容関連の支出は除く）',
    category: 'other',
    defaultNextPageUid: 'ot5',
    numerator: 4,
    questions: [
      {
        key: 'serviceFactorKey',
        answerType: 'select',
        subDescription: 'あなた1人分の金額',
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
  },
  {
    uid: 'ot5',
    title: '趣味にかかるの物の支出はどのくらいですか？',
    supplement:
      '（娯楽、書籍、雑誌、スポーツ、ペット、ガーデニング用品、たばこ含む）',
    category: 'other',
    defaultNextPageUid: 'ot6',
    numerator: 5,
    questions: [
      {
        key: 'hobbyGoodsFactorKey',
        answerType: 'select',
        subDescription: 'あなた1人分の金額',
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
  },
  {
    uid: 'ot6',
    title: '衣類、かばん、宝飾品、美容関連などの支出はどのくらいですか？',
    category: 'other',
    defaultNextPageUid: 'ot7',
    numerator: 6,
    questions: [
      {
        key: 'clothesBeautyFactorKey',
        answerType: 'select',
        subDescription: 'あなた1人分の金額',
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
  },
  {
    uid: 'ot7',
    title: 'レジャー、スポーツへの支出はどのくらいですか？',
    supplement: '（交通費と飲食代は除く、施設利用料、入場料、観覧料など）',
    category: 'other',
    defaultNextPageUid: 'ot8',
    numerator: 7,
    questions: [
      {
        key: 'leisureSportsFactorKey',
        answerType: 'select',
        subDescription:
          '家族の分もあわせて支払っている場合、あなた自身が利用した分だけで考えましょう。',
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
  },
  {
    uid: 'ot8',
    title: '過去１年間の宿泊を伴う旅行にかかった費用はいくらくらいですか？ ',
    supplement:
      '（交通費と飲食代は除く、宿泊費、施設利用料、入場料、観覧料など）',
    category: 'other',
    defaultNextPageUid: '',
    isLast: true,
    numerator: 8,
    questions: [
      {
        key: 'travelFactorKey',
        answerType: 'select',
        subDescription:
          '家族の分もあわせて支払っている場合、あなた自身が利用した分だけで考えましょう。',
        options: [
          {
            value: '10k-less',
            label: '¥10,000未満'
          },
          {
            value: '10k-30k',
            label: '¥10,000〜¥30,000未満'
          },
          {
            value: '30k-50k',
            label: '¥30,000〜¥50,000未満'
          },
          {
            value: '50k-100k',
            label: '¥50,000〜¥100,000未満'
          },
          {
            value: '100k-200k',
            label: '¥100,000〜¥200,000未満'
          },
          {
            value: '200k-more',
            label: '¥200,000以上'
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
