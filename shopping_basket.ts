export const totalize = (basket) => {
  if (basket.length == 0)
    return 0.0;

  return basket[0].unitPrice;
}
