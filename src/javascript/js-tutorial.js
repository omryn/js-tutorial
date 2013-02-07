var tutorial = {
    helloWorld: function () {
        alert('hello world');
    }
}

function nonBlockingSort(arrayToSort, compareFunction, callback) {
// cheat for test 1:
//    callback(arrayToSort.sort());

// cheat for test 2
//    setTimeout(function(){
//        callback();
//    }, 50);
}



function hello(a) {
    function myPrivateFunction() {
    }

    var myPrivateVar;

    return {
        getA: function () {
            myPrivateFunction();
            return a;
        },
        setA: function (newA) {
            a = newA;
        }
    }
}

var myFunc;
myFunc = function(){
    return myFunc.field;
}
myFunc.field = 'static field';

//
//function cpuHog() {
//    console.log('Started hogging cpu...');
//    var startTime = Date.now();
//    while (Date.now() - startTime < 10000);
//    console.log('Stopped hogging cpu...');
//}
//
//function aniRakSheela() {
//    console.log('I just have a quick question...');
//}
//
//setTimeout(cpuHog, 10);
//setTimeout(aniRakSheela, 11);