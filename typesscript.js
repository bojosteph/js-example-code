let bunch = [1,2,3]
Array.isArray(bunch)

let obj = {a: 'a', b: 'b', c: {
  deep: 'try and copy me'
}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(clone2)
console.log(superClone)

false == ""
false == []
false == {}
"" == 0
  "" == []
"" == {}
0 == []
0 == {}
0 == null
var stuff = function(){}

function a(fn) {
  fn()
}

a(function(){
  console.log('hi there')
})