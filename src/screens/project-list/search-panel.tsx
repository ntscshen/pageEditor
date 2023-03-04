import React, { useState, useEffect } from "react";

export interface User {
  id: string;
  personId: string;
  name: string;
  organization: string;
  created: number;
  email: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setparam: (param: SearchPanelProps["param"]) => void;
}
const searchPanel = ({ param, setparam, users }: SearchPanelProps) => {
  return (
    <form action="">
      <input
        type="text"
        placeholder="项目名称"
        value={param?.name}
        onChange={(evt) =>
          setparam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(evt) =>
          setparam({
            ...param,
            personId: evt.target.value,
          })
        }
      >
        <option value="">负责人</option>
        {users?.map((use) => {
          return (
            <option key={use.id} value={use.id}>
              {use.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
export default searchPanel;
