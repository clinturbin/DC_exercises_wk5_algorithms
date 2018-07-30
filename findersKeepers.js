//=================================================
//                Finders Keepers
//================================================


(function () {
    var arr = ['Jim','Indian','Marsh','Gl `itch'];
    var checkString = function (str) {
        return str.indexOf('itch') !== -1;
    };
    var returnArray = [];

    var findElement = function (arr, inputFunction) {
        if (arr.length === 0 ) {
            returnArray.unshift(false);
        }
        else {
            var str = arr.shift();
            if (inputFunction(str)) {
                returnArray.unshift(str);
            }
            else {
                returnArray.unshift(false);
                findElement(arr, inputFunction);
            }
        }
    };

    findElement(arr, checkString);
    console.log(returnArray[0]);
})();

