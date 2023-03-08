export function findObjInArrayByValue(arr, propname, value) {
  let result = arr.filter((obj) => {
    return obj[propname] === value;
  });
  return result;
}

export const isObject = (val) => {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};
