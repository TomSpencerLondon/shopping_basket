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
})
