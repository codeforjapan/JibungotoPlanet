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
