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
      default:
        return ''
    }
  }

  return converter
}
