//local scope
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = ("foo");

  console.log(myVar);
}
// Run and check the console
// myVar is not defined outside of myLocalScope
// Now remove the console log line to pass the test
