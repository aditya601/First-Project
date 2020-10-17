(function (window) {
    var ketanGreeter = {};
    ketanGreeter.name = "Aditya";
    var greeting = "Goodbye";
    ketanGreeter.sayHi = function () {
        console.log(greeting + ketanGreeter.name);
    }
    window.ketanGreeter = ketanGreeter;
}) (window);
/*var name = "Ketan";
function sayHi(){
    console.log("hi" + name);
}*/