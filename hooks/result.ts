export const useConvertSubdomainLabel = () => {
  const converter = (subdomain: string) => {
    switch (subdomain) {
      case 'private-car':
        return '自家用車'
      case 'bus':
        return 'バス'
      case 'motorbike':
        return 'バイク'
      case 'ferry':
        return 'フェリー'
      case 'airplane':
        return '飛行機'
      case 'bicycle':
        return '自転車'
      case 'walking':
        return '徒歩'
      case 'car-sharing-taxi':
        return 'タクシー/レンタカー'
      case 'train':
        return '電車'
      case 'cereals':
        return '穀物'
      case 'other-food':
        return '惣菜・菓子・調味料等'
      case 'vegetables':
        return '野菜'
      case 'dairy':
        return '乳製品'
      case 'meat':
        return '肉類'
      case 'fish':
        return '魚介類'
      case 'fruits':
        return '果物'
      case 'eggs':
        return '卵'
      case 'beans-nuts':
        return '豆類'
      case 'beverages':
        return '飲料'
      case 'restaurant':
        return '外食'
      case 'other-energy':
        return 'ガス・灯油等'
      case 'electricity':
        return '電気'
      case 'construction-maintenance':
        return '建設・維持管理'
      case 'imputedrent':
        return ''
      case 'rent':
        return ''
      case 'landrent':
        return ''
      case 'water':
        return '水道'
      case 'appliance-furniture':
        return '家電製品・家具類'
      case 'daily-goods-medicine':
        return '日用品・化粧品・医薬品'
      case 'hotel':
        return '宿泊'
      case 'hobby-books':
        return '趣味用品・書籍・雑誌'
      case 'clothes':
        return '衣類'
      case 'communication':
        return '通信・配送・放送等'
      case 'waste-repair-rental':
        return '廃棄物処理・修理等'
      case 'leisure-sports':
        return '娯楽・スポーツ施設等'
      case 'welfare-education':
        return '医療・福祉・教育'
      case 'personal-care-other-services':
        return 'その他サービス'
      case '':
        return 'その他サービス'
      default:
        return ''
    }
  }

  return converter
}
