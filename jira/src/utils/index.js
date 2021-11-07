// 排除value为0的情况
export function isFalsy(value) {
  // !是求反，!!是对反值求反，也就是取布尔值
  return value === 0 ? false : !value;
}

// 写纯净函数比较好，意思是不要改变传入的参数的值
export const cleanObject = (object) => {
  const cleanObject = { ...object };
  Object.keys(cleanObject).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete cleanObject[key];
    }
  });
  return cleanObject
};
