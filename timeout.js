function doSomething(){
    console.log("I will see later");
}
console.log(444);
setTimeout(doSomething, 2000);
console.log(333);
console.log(333);
console.log(333);

setInterval(function(){
    console.log('do it');
}, 3000);