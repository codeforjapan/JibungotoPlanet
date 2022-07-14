export const toBoolean = (data: string | number) => {
  if (String(data).toLowerCase() === 'true') {
    return true
  } else if (String(data).toLowerCase() === 'false') {
    return false
  } else {
    return data
  }
}
