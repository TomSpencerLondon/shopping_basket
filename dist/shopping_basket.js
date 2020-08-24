"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalize = void 0;
exports.totalize = function (basket) {
    if (basket.length == 0)
        return 0.0;
    return basket.reduce(function (total, item) { return total + (item.unitPrice * item.quantity); }, 0);
};
//# sourceMappingURL=shopping_basket.js.map