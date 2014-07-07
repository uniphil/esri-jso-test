define(function() {
  return function print() {
    for (var i=0; i<arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
});
