import React, { useState, useEffect, useCallback } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { HighlightOutlined, GithubOutlined } from "@ant-design/icons";

// import TemplateList from './TemplateList/index';
import TemplateList from "../../screens/TemplateList/index";
import TemplateDetail from "../../screens/TemplateDetail/index";
import { pick } from "lodash";

import { Layout, Button, Card } from "antd";
import { ComponentData } from "screens/Editor/editor.slice";
const { Meta } = Card;
const { Header, Footer, Content } = Layout;

interface STextComponentProps {
  [key: string]: any;
}

const STextComponent = (props: STextComponentProps) => {
  const { type } = props;
  const onHandleClick = () => {
    if (props?.actionType === "url" && props?.url) {
      window.location.href = props?.url;
    }
  };

  const templatesRender = () => {
    switch (type) {
      case "button":
        return (
          <Button type="primary" style={{ ...props }} onClick={onHandleClick}>
            {props?.text}
          </Button>
        );
      case "link":
        return (
          <Button type="link" style={{ ...props }} onClick={onHandleClick}>
            {props?.text}
          </Button>
        );
      default:
        console.log(
          "SText - SText - SText - SText - SText - SText :>> ",
          props
        );
        return (
          <div style={{ ...props }} onClick={onHandleClick}>
            {props?.text}
          </div>
        );
    }
  };
  return <>{templatesRender()}</>;
};

export default STextComponent;

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
