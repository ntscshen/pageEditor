import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { HighlightOutlined, GithubOutlined } from "@ant-design/icons";

import { Layout, Button, Card, Descriptions } from "antd";
const { Meta } = Card;
const { Header, Footer, Content } = Layout;

const apiUrl = process.env.REACT_APP_API_URL;

const data = {
  id: 1,
  src: "//os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  name: "页面可视化搭建平台",
  author: "ntscshen",
  userNumber: 999,
  created: 1400251593,
};

const TemplateDetail = () => {
  return (
    <>
      <Layout>
        <CHeader>
          <HighlightOutlined />
          <CLink to={"/"}>pageEditor</CLink>
        </CHeader>
        <CContent>
          <CDiv>
            <CImg src={data.src} alt={data.name} />
            <div>
              <Descriptions
                title={data.name}
                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
              >
                <Descriptions.Item label="作者">
                  {data.author}
                </Descriptions.Item>
                <Descriptions.Item label="用户数">
                  {data.userNumber}
                </Descriptions.Item>
                <Descriptions.Item label="创建时间">
                  {data.created}
                </Descriptions.Item>
              </Descriptions>
              <Link to={"/editor"}>
                <Button type="primary">使用当前模板</Button>
              </Link>
            </div>
          </CDiv>
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

export default TemplateDetail;

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

const CDiv = styled.div`
  margin-top: 20px;
  max-width: 1200px;
  display: flex;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
`;
const CImg = styled.img`
  width: 40%;
  margin: 0 20px;
  border-radius: 5px;
`;
