let view;

function initialize() {
  let called = 0;
  return function() {
    if(called > 0) {
      return;
    } else {
      view = '$';
      called++;
      console.log('view has been set!')
    }
  }
}

const startOnce = initialize();

const array = [1,2,3,4];

for(var i=0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function(){
    console.log('i am at index ' + array[closureI])
  }, 3000)
})(i)
}