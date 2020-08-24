import { totalize } from "../shopping_basket";

describe("Shopping Basket Total", () => {
  it('is zero when basket empty', () => {
    const basket = [];
    expect(totalize(basket)).toBe(0.0);
  });

  it('is unit price of a single item in basket', () => {
    const basket = [
      {
        unitPrice: 10,
        quantity: 1
      }
    ];

    expect(totalize(basket)).toBe(10.0);

  });

  it('is unit price * quantity of a single item', () => {
    const basket = [
      {unitPrice: 10.0, quantity: 2}
    ];

    expect(totalize(basket)).toBe(20.0);
  })

  it('is sum of unit price * quantity for all items', () => {
    const basket = [
      {unitPrice: 10.0, quantity: 1},
      {unitPrice: 20.0, quantity: 2}

    ];

    expect(totalize(basket)).toBe(50.0);
  })
})
