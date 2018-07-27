//=================================================
//                Array Steamroller
//================================================

// var startArray = [1, [2], [3, [[4]]]];
var startArray = [1, [2], [3, [[4]]], [[5], [6, 7]]];
var newArray = [];


var steamrollArray = function (arr) {
    arr.forEach(function (item) {
        Array.isArray(item) ? steamrollArray(item) : newArray.push(item);
    });
};

steamrollArray(startArray);
console.log(newArray);




// var steamrollArray = function (arr) {
//     for (var item of arr) {
//         if (Array.isArray(item)) {
//             steamrollArray(item);
//         }
//         else {
//             newArray.push(item);
//         }
//     }
//     return;
// };

// steamrollArray(startArray);
// console.log(newArray);



// var steamrollArray = function (arr) {
//     arr.forEach(function (item) {
//         if (Array.isArray(item)) {
//             steamrollArray(item);
//         }
//         else {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };

// steamrollArray(startArray);
// console.log(newArray);