// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 //Convert any data type (string, number, boolean, null, array, or object) into a string. Exceptions: NAN, infinity, undefined, functions

var output = "";

if (typeof obj === 'string') {
  output = '"' + obj + '"';
}
else if (typeof obj === 'number') {
  output = '' + obj + '';
  // obj.toString();
}
else if (typeof obj === 'boolean') {
  if (obj === true) {
    output = 'true';
  } else {
    output = 'false';
  }
}
else if (obj === null) {
  return 'null';
}

else if (Array.isArray(obj)){
  output += '[';
  for (var i = 0; i < obj.length; i++) {
    output+= stringifyJSON(obj[i]);
  if (i < obj.length -1){
    output += ',';
  }
}
  output += ']';
}



else if (typeof obj === 'object') {
  output = '{';
  for(var key in obj){
    if(typeof obj[key] !== "function" && typeof obj[key] !== "undefined"){
      output+= '"' + key + '":';
      output+= stringifyJSON(obj[key]) + ',';
    }
  }
  if (output.charAt(output.length-1) === ',') {
    output = output.slice(0, output.length - 1);
  }
  output += "}";
}

return output;
}
//JSON Example { x: 5, y: 6 }
//expected output: "{"x":5,"y":6}"