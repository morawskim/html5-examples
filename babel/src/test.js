const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Hello!");
    }, 1500);
});
promise.then((txt) => alert("success " + txt))
    .catch(() => alert("error"));
    

let a = (txt) => console.log(txt);
a("Hello world");
