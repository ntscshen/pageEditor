import React from "react";
import { useMount, useArray } from "utils";
interface Person {
  name: string;
  age: number;
}
const TsReactTest = () => {
  const persons: Person[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {
    // console.log('value.notExist :>> ', value.notExist);
    // add({ name: 'dva' });
    // removeIndex('123');
  });

  return (
    <div>
      {/* 期待 点击以后增加 john */}
      <button onClick={() => add({ name: "ntscshen", age: 30 })}>
        add ntscshen
      </button>
      {/* 期待 点击以后删除第一项 */}
      <button onClick={() => removeIndex(0)}>remove 0</button>
      {/* 期待 点击以后清空列表 */}
      <button onClick={() => clear()}>clear</button>
      {/* 列表信息 */}
      {value.map((person: Person, index: number) => {
        return (
          <div style={{ marginBottom: "30px" }}>
            <span style={{ color: "red" }}>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </div>
  );
};

export { TsReactTest };
