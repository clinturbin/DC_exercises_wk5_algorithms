//=================================================
//                Array Steamroller
//================================================

(function () {
    var startArray = [1, [2], [3, [[4]]]];
    var newArray = [];

    var steamrollArray = function (arr) {
        arr.forEach(function (item) {
            Array.isArray(item) ? steamrollArray(item) : newArray.push(item);
        });
    };
    
    steamrollArray(startArray);
    console.log(newArray);
})();