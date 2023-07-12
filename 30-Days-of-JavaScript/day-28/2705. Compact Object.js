/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const compactedObj = {};
  for (const key in obj) {
    const value = compactObject(obj[key]);
    if (Boolean(value)) {
      compactedObj[key] = value;
    }
  }
  return compactedObj;
    
};
