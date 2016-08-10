function add(a, b){
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5, 4, 4];
//add(toAdd[0], toAdd[1])];
console.log(add(...toAdd)); //spreads them out as individual arguments

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [3, ...groupA]; //var final = [3, 'Jen', 'Cory'];
var final2 = [3, groupA]; // //var final2 = [3, ['Jen', 'Cory']];


var baha = [...groupB, ...groupA];
console.log(baha);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age){
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);


var names = ['Mike', 'Ben'];
var final = ['Aaron', ...names];
final.forEach(function(name){
console.log(name);
});
