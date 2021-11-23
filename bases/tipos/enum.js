"use strict";
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
//# sourceMappingURL=enum.js.map