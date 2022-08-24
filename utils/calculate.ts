export const roundCo2Amount = (amount: number | undefined) => {
  if (amount === undefined) {
    return 0
  } else if (amount < 10) {
    return Math.round(Number(amount))
  } else {
    return Math.round(Number(amount) / 10) * 10
  }
}
