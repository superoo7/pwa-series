// Chapter 1
function title(t) {console.log("========="); console.log(t);}
function es5() {console.log("====ES5====");}
function es6() {console.log("====ES6====");}
// 1 Introduction to ES6

title("Chapter 1: Introduction to ES6")
// Function with Default Value
title("Function with Default Value")
// ES5
es5();
var es5Add = function(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    return a + b;
};
console.log(es5Add(2, 2));
console.log(es5Add(2));
var es5Html = function(content, tag) {
    return "<"+ tag + ">" + content + "</" + tag + ">"
}
console.log(es5Html("Hello World", "h1"));
// ES6
es6();
const es6Add = (a,b=3) => (a+b);
let variableAdd = 4;
variableAdd = 2;
console.log(es6Add(variableAdd,2));
console.log(es6Add(2));
const es6Html = (content, tag) => (`<${tag}>${content}</${tag}>`)
console.log(es6Html("Hello World", "h1"));

// Array
title("Array");
// ES5
es5();
var es5Array1 = ["a", "b", "c"];
var es5Array2 = [].concat(es5Array1, ["d", "e"]);
console.log(es5Array2);
// ES6
es6();
const es6Array1 = ["a", "b", "c"]
const es6Array2 = [...es6Array1, "d", "e"]
console.log(es6Array2);