export function findObjInArrayByValue(arr, propname, value) {
  let result = arr.filter((obj) => {
    return obj[propname] === value;
  });
  return result;
}
