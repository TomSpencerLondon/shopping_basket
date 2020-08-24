"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalize = void 0;
exports.totalize = function (basket) {
    if (basket.length == 0)
        return 0.0;
    var total = 0.0;
    basket.forEach(function (item) { return total += item.unitPrice * item.quantity; });
    return total;
};
//# sourceMappingURL=shopping_basket.js.map