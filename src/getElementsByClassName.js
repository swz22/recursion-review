// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // loop that goes across each (className)
  //if it's the className then we push it into a new array

  //Select all elements with specific className in HTML body and add to an array
  //Check to see if selected elements have child nodes
  //If true, check if child node has class of className
  //If true, add child nodes to array
  let body = document.body;
  let array = [];

  let hasClass = function(ele) {
    if (ele.classList && ele.classList.contains(className)) {
      array.push(ele);
    }
    if(ele.hasChildNodes()) {
      for (let i = 0; i < ele.childNodes.length; i++) {
        hasClass(ele.childNodes[i]);
      }
    }
  }
  hasClass(body);
  return array;
};
