"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shopping_basket_1 = require("../shopping_basket");
describe("Shopping Basket Total", function () {
    it('is zero when basket empty', function () {
        var basket = [];
        expect(shopping_basket_1.totalize(basket)).toBe(0.0);
    });
    it('is unit price of a single item in basket', function () {
        var basket = [
            {
                unitPrice: 10,
                quantity: 1
            }
        ];
        expect(shopping_basket_1.totalize(basket)).toBe(10.0);
    });
    it('is unit price * quantity of a single item', function () {
        var basket = [
            { unitPrice: 10.0, quantity: 2 }
        ];
        expect(shopping_basket_1.totalize(basket)).toBe(20.0);
    });
    it('is sum of unit price * quantity for all items', function () {
        var basket = [
            { unitPrice: 10.0, quantity: 1 },
            { unitPrice: 20.0, quantity: 2 }
        ];
        expect(shopping_basket_1.totalize(basket)).toBe(50.0);
    });
});
//# sourceMappingURL=shopping_basket.spec.js.map