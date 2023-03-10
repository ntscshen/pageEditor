import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { Link, useParams, Routes, Route, Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import { HighlightOutlined, GithubOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";

import TemplateList from "./TemplateList/index";
import TemplateDetil from "./TemplateDetail/index";

import { Layout, Button, Card } from "antd";
import {
  selectTemplateList,
  templateAsync,
  templateListSliceAction,
} from "./home.slice";
const { Meta } = Card;
const { Header, Footer, Content } = Layout;

const apiUrl = process.env.REACT_APP_API_URL;

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
console.log("apiUrl :>> ", apiUrl);
const Home = () => {
  const templateList = useSelector(selectTemplateList);
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();
  console.log("templateList :>> ", templateList);
  return (
    <>
      <Layout>
        <CHeader>
          <HighlightOutlined />
          <CLink to={"/"}>pageEditor</CLink>
        </CHeader>
        <CContent>
          <Button
            type="primary"
            onClick={() => {
              dispatch(templateAsync("111"));
            }}
          >
            Primary Button
          </Button>
          <TemplateList list={list} />
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

export default Home;

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
