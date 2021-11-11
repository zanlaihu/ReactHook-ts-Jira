import { useEffect, useState } from "react";

// 排除value为0的情况
export function isFalsy(value: unknown) {
  // !是求反，!!是对反值求反，也就是取布尔值
  return value === 0 ? false : !value;
}

// 写纯净函数比较好，意思是不要改变传入的参数的值
export const cleanObject = (object: object) => {
  const cleanObject = { ...object };
  Object.keys(cleanObject).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete cleanObject[key];
    }
  });
  return cleanObject;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       func(...param);
//     }, delay);
//   };
// };

// const log = debounce(() => console.log('call'), 5000)
// log()
// log()
// log()

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
