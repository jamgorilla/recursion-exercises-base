const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');
const stringify = JSON.stringify;

const getElementById = function(root, id) {
  var array = flattenTreeToArray(root);
  //console.log(array[0].hasOwnProperty({}));
//  console.log(array[3].tagName);
 // let regex = new RegExp(id, 'g');
// console.log(
   var inner = _.filter(array, (item) => item.id === id);
   // var inner = _.filter(array, (item) => item.className === '');
    //console.log(inner);
    return inner;
}; 



const getElementsByClassName = function(root, className) {
   var array = flattenTreeToArray(root);
   var inner = _.filter(array, (item) => item.className &&
    item.className.indexOf(className) !== -1); 
   return inner;
};

const getElementsByTagName = function(root, tagName) {
   var array = flattenTreeToArray(root);
   var inner = _.filter(array, (item) => item.tagName === tagName);
   return inner;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
