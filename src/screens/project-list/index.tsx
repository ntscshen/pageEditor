import React, { useState, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject, useDebounce, useMount } from "utils";
import qs from "qs";
import styled from "@emotion/styled";

import {
  counterSliceActions,
  incrementAsync,
  selectCount,
} from "./project-list.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [param, setparam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 300);
  const [users, setUsers] = useState([]);

  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const [list, setList] = useState([]);

  const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // console.log(pa ram)
    // name=${param.name}&personId=${param.personId}
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  // 1. 把只执行一次的 useEffect 抽象出来

  return (
    <>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSliceActions.decrement())}
        >
          -
        </button>
        <span style={{ fontSize: 56, color: "red" }}>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterSliceActions.increment())}
        >
          +
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
      </div>
      <TestStyledComponent>998</TestStyledComponent>
      <SearchPanel param={param} setparam={setparam} users={users} />
      <List list={list} users={users} />
    </>
  );
};

export default ProjectList;

const TestStyledComponent = styled.div`
  background-color: #646464;
  padding: 20px;
  color: red;
`;
