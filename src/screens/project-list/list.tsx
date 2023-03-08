import React from "react";
import { User } from "./search-panel";
import { Routes, Route, Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: number;
  pin: boolean;
}

interface ListProps {
  list: Project[];
  users: User[];
}
const list = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td style={{ padding: 20, backgroundColor: "#646464" }}>
                <Link to={project.id}>
                  {project.id}-{project.name}
                </Link>
              </td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default list;
