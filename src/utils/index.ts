import { useState, useEffect } from "react";
const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// 在处理函数的时候，不要污染传入的对象
const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    // 如果value为0， 其实这个值是有效的，结果被删除了。需要单独被处理
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

const useDebounce = (value: unknown, delay?: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // 每次重新渲染，都会导致原组件（包含子组件）的销毁，以及新组件（包含子组件）的诞生。
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 0);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export { cleanObject, useMount, useDebounce };

// const debounce = (func, delay) => {
//   let timeout;
//   return (...params) => {
//     timeout && clearTimeout(timeout)
//     timeout = setTimeout(() => {
//       func(...params);
//     }, delay);
//   }
// }
// const log = debounce(() => console.log('5秒 call :>> '), 5000)
// log();
// log();
// log();
