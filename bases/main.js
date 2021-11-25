"use strict";
(function () {
    var a = 10;
    console.log(a);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    var fuerzaAcuaman = fuerza.acuaman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
var sumar = function (a, b) {
    return a + b;
};
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no last name');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    var myFunction;
    var myFunction2;
    var myFunction3;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction2 = greet;
    console.log(myFunction2('Fernando'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatiSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    var superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['Súper velocidad'],
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    var superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['Súper velocidad'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.2323132;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    var villanos = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villanos.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 10] = "min";
        AudioLevel[AudioLevel["med"] = 11] = "med";
        AudioLevel[AudioLevel["max"] = 12] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
})();
(function () {
    var error = function (message) {
        if (message) {
            throw new Error(message);
        }
        return 1;
    };
})();
(function () {
    var isActive = null;
    console.log(isActive);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('12355A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map