/*string = "hello";
string += "world";

console.log(string + "!");*/

/*console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1(a) {
    console.log(a / 5);
}
test1();*/
/*var x = 4, y = 4;

if (x == y) {
    console.log("x=4 is equal to y=4");
}

else {
    console.log("strict 'x=4' is not equal to 'y=4'");
}*/



/*if (false || null || undefined || "" || 0 || NaN) {
    console.log("this line is never gonna execute");
}

else{
    console.log("All False");
}

if (true && "hello" && 1 && -1 && "false") {
    console.log("All True");
}*/



/*function a() {
    return {
        name: "Aditya"
    };

}

function b() {
    return {
        name: "Aditya"
    };
}

console.log(a());
console.log(b());
*/

/*var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(i);
    sum = sum + 1;

}
console.log("sum of 0 through 9 is:" + sum);*/

/*function orderchickenwith(sideDish) {
    sideDish + sideDish || "whatever!";
    console.log("chicken with" + sideDish);
}
orderchickenwith("noodles");
orderchickenwith(); */

/*var company = new object();
company.name = "facebook";
company.ceo=new object();
company.ceo.firstname = "Mark";
console.log(company);

console.log("company ceo name is:" + company.ceo.firstname)*/

/*function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

functio makemultiplier(multiplier)
{
var myfunc = function (x);
    {
    return multiplier * x;
    }

    return myfunc;
}

var multilpyby3 = makemultiplier(3);
console.log(makemultiplyby3(10));
var doubleAll = makemultiplier(2);
console.log(doubleAll(100));

function doOperatiOn(x, operation) {
    return operation x;

}

var result = doOperatiOn(5, multiplyby3);
console.log(result);
result = doOperatiOn(100, doubleAll);
console.log(result);*/

/*
var a = { x: 7 };
var b = a;
console.log("a:" + a);
console.log("b:" + b);

b.x = 5;
console.log("After b is updated")
console.log("a:" + a);
console.log("b:" + b);
*/

/*
function changeprimitive(objvalue) {
    console.log("in changeprimitive...");
    console.log("before");
    console.log(objvalue);

    objvalue = 5;
    console.log("after:");
    console.log("after objvalue");
}

value = { x: 7 };
changeprimitive(value);
console.log("after changeprimitive, orig value");
console.log(value);
*/

/*
function test() {
    console.log(this);
    this.myname = "Aditya";

}
test();
console.log(window, myname);
*/

/*
function circle(radius) {
    this.radius = radius;

}

circle.prototype.getarea = function () {
    return Math.PI * Math.pow(this.radius, 2);

};

var mycircle = new circle(10);
console.log(mycircle.getarea);

var myothercircle = new circle(20);
console.log(myothercircle);
*/

/*

var literalcircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseradius = function () {
            this.radius = 20;
        };
        increaseradius();
        console.log(this.radius);

return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalcircle.getArea());

*/
/*
var array = new Array();
array[0] = "Aditya";
array[1] = 2;
array[2] = function (name) {
    console.log("hello" + name);
};
array[3] = { course: "HTML CSS & JS" };

console.log(array);
array[2](array[0]);
console.log(array[3].course);
*/
/*
var names = ["Aditya", "Ketan", "Vaibhav"];
console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("Hello" + name[i]);
}

names[100] = "Ketan";
for (var i = 0; i < names.length; i++) {
    console.log("Hello" + names[i]);
}
*/

/*var names2 = ["aditya", "ketan", "vaibhav"];
names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello" names2[namr]);
}*/

/*function makemultiplier(multiplier) {
    function b() {
        console.log("Multipler is:" + multiplier);
    }
    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makemultiplier(2);
console.log(doubleAll(10));*/

(function (window) {
var adityaGreeter = {};
adityaGreeter.name = "aditya";
var greeting = "Hello";
adityaGreeter.sayHello = function () {
    console.log(greeting + adityaGreeter.name);
}
window.adityaGreeter = adityaGreeter;
}) (window);


/*var name = "Aditya";
function sayHello() {
    console.log("Hello" + name);
}*/