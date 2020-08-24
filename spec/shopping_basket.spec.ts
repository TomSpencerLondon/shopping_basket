import { totalize } from "../shopping_basket";

describe("Shopping Basket Total", () => {
  it('is zero when basket empty', () => {
    const basket = [];
    const total = totalize(basket);
    expect(total).toBe(0.0);
  })
})
