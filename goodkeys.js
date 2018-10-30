/*
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

var sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };

console.log(goodKeys(sunny, startsWithBird));		// ['charlie', 'dee']
*/



function goodKeys(obj, callback) {
  let arr = [];
  for (let x in obj) {
    if (callback(obj[x])) {							// if callback returns true
      arr.push(x) 									// push key to arr
    }
  }
  return arr
}