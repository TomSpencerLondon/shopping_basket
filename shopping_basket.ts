export const totalize = (basket) => {
  if (basket.length == 0)
    return 0.0;

  return basket.reduce((total, item) => total += item.unitPrice * item.quantity, 0);
}
