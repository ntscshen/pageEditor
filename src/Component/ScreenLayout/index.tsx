import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { HighlightOutlined, GithubOutlined } from "@ant-design/icons";

// import TemplateList from './TemplateList/index';
import TemplateList from "../../screens/TemplateList/index";
import TemplateDetail from "../../screens/TemplateDetail/index";

import { Layout, Button, Card } from "antd";
const { Meta } = Card;
const { Header, Footer, Content } = Layout;

const apiUrl = process.env.REACT_APP_API_URL;
console.log("apiUrl :>> ", apiUrl);
const list = [
  {
    id: 1,
    src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name: "页面可视化搭建平台",
    author: "ntscshen",
    userNumber: 999,
    created: 1400251593,
  },
  {
    id: 2,
    src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name: "页面可视化搭建平台2",
    author: "ntscshen",
    userNumber: 999,
    created: 1400251593,
  },
  {
    id: 3,
    src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name: "页面可视化搭建平台3",
    author: "ntscshen",
    userNumber: 999,
    created: 1400251593,
  },
  {
    id: 4,
    src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name: "页面可视化搭建平台4",
    author: "ntscshen",
    userNumber: 999,
    created: 1400251593,
  },
  {
    id: 5,
    src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name: "页面可视化搭建平台5",
    author: "ntscshen",
    userNumber: 999,
    created: 1400251593,
  },
  {
    id: 6,
    src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name: "页面可视化搭建平台6",
    author: "ntscshen",
    userNumber: 999,
    created: 1400251593,
  },
];

interface ScreenLayoutProps {
  Component: React.ReactNode | any;
}
// interface Item {
//   [prop: string]: any;
// }
// interface Props {
// list: Item[];
// children: (item: Item, index: number) => React.ReactNode;
// }

// function List({ list, children }: Props) {
// // 列表中其他逻辑...
// return <div>{list.map(children)}</div>;
// }
const ScreenLayout = ({ Component }: ScreenLayoutProps) => {
  return (
    <>
      <Layout>
        <CHeader>
          <HighlightOutlined />
          <CLink to={"/"}>pageEditor</CLink>
        </CHeader>
        <CContent>
          <Component />
        </CContent>
        <CFooter>
          <Button type="link">
            <a
              href="https://github.com/ntscshen/pageEditor"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined /> github
            </a>
          </Button>
        </CFooter>
      </Layout>
    </>
  );
};

export default ScreenLayout;

const CLayout = styled(Layout)`
  /* align-items: center; */
`;
const CHeader = styled(Header)`
  height: 7vh;
  line-height: 7vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;
const CLink = styled(Link)`
  margin-left: 10px;
  color: #fff;
`;

const CContent = styled(Content)`
  background: #fff;
  min-height: 88vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CFooter = styled(Footer)`
  height: 5vh;
  line-height: 5vh;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
