import React, { useState, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject, useDebounce, useMount } from "utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_RUL;
console.log("apiUrl :>> ", apiUrl);

const ProjectList = () => {
  const [param, setparam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 300);
  const [users, setUsers] = useState([]);

  const [list, setList] = useState([]);

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
      <SearchPanel param={param} setparam={setparam} users={users} />
      <List list={list} users={users} />
    </>
  );
};

export default ProjectList;