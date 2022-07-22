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
      default:
        return ''
    }
  }

  return converter
}
