function processNumber(num, callback) {
    callback(num);
}

processNumber(10, function(n) {
    console.log("Add 5 is", n + 5);
});
