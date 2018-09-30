module.exports = function getZerosCount(number) {
  // your implementation

var counter = 0;
    for (var i = number; i > 0; i = Math.floor(i/5)) {
        counter= counter + Math.floor(i/5);
    }
    return counter;
}
