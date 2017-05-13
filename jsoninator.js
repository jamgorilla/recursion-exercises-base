 const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  
  if (obj === null)
    {return 'null'}
  else if (obj.constructor === String)
    {return '"' + obj.replace(/"/g, '\\"') + '"'}
  else if (obj.constructor === Number)
    {return String(obj)}
  else if (obj.constructor === Boolean)
    {return obj ? 'true' : 'false'}
  // else if (Array.isArray(obj) === true)
  //   return '[' +  _.each(obj, (item) => item) + ']';


  else if (Array.isArray(obj) === true)
    {return '[' +  _.each(obj, (item) => item.constructor === String ? '"' + obj.replace(/"/g, '\\"') + '"' : String(item) + ']'}
 

  // else if (obj.constructor === Array)
  //   return '[ ' + obj.reduce((acc, v) => {
  //     if (v === undefined)
  //       return [...acc, 'null']
  //     else
  //       return [...acc, stringifyJSON(v)]
  //   }, []).join(', ') + ' ]'s
  // else if (obj.constructor === Object)
  //   return '{ ' + Object.keys(obj).reduce((acc, k) => {
  //     if (obj[k] === undefined)
  //       return acc
  //     else
  //       return [...acc, stringifyJSON(k) + ':' + stringifyJSON(obj[k])]
  //   }, []).join(', ') + ' }'
   else 
   { return '{}'}
   
  };

module.exports = {
  stringify: stringify
};