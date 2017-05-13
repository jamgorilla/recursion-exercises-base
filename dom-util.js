const visitAllNodes = function(parentNode, callback) {
  if(parentNode.childNodes) {
    let children = parentNode.childNodes;
    for(let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback)
    }
  }
  callback(parentNode);
};


const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let arr = [];
  visitAllNodes(node, function(items){
    arr.push(items);
  });
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
