"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    var myFunction;
    var myFunction2;
    var myFunction3;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction2 = greet;
    console.log(myFunction2('Fernando'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
//# sourceMappingURL=function-type.js.map