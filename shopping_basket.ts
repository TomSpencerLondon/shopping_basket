export const totalize = (basket) => {
  if (basket.length == 0)
    return 0.0;

  let total = 0.0;
  basket.forEach((item) => total += item.unitPrice * item.quantity)
  return total;
}
