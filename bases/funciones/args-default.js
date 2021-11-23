"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'no last name').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'no last name');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
//# sourceMappingURL=args-default.js.map