import React, { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { HighlightOutlined, GithubOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";

import { Col, Row } from "antd";
import { editorSliceAction, selectEditor, EditorSlice } from "./editor.slice";
import SText from "../../Component/SText/index";
import { defaultTemplates } from "Component/default.templates";
import { counterSliceActions } from "screens/project-list/project-list.slice";
import { Button } from "antd";

interface defaultTemplatesProps {
  id: number;
  type: string;
  text: string;
  [key: string]: any;
}
const Editor = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const components = useSelector(selectEditor);
  console.log("components :>> ", components);

  useCallback(() => {}, []);

  const templatesRender = (templeate: any) => {
    console.log("templeate :>> ", templeate);
    const { type } = templeate;

    switch (type) {
      case "button":
        return (
          <Button
            type="primary"
            key={templeate?.id}
            style={{ ...templeate }}
            onClick={() => {
              console.log("templeate :>> ", templeate);
              dispatch(editorSliceAction.additionComponent(templeate));
            }}
          >
            {templeate.text}
          </Button>
        );
      case "link":
        return (
          <Button
            type="link"
            key={templeate?.id}
            style={{ ...templeate }}
            onClick={() => {
              console.log("templeate :>> ", templeate);
              dispatch(editorSliceAction.additionComponent(templeate));
            }}
          >
            {templeate.text}
          </Button>
        );
      default:
        return (
          <div
            key={templeate?.id}
            style={{ ...templeate }}
            onClick={() => {
              console.log("templeate :>> ", templeate);
              dispatch(editorSliceAction.additionComponent(templeate));
            }}
          >
            {templeate?.text}
          </div>
        );
    }
  };

  return (
    <>
      <ERow>
        <Col span={24}>col</Col>
      </ERow>
      <Row>
        <EColLeft flex="300px">
          {defaultTemplates?.map((templeate) => {
            return templatesRender(templeate);
          })}
        </EColLeft>
        <EColContent flex="auto">
          {/* 390 844 */}
          <CContentDiv>
            {components.map(({ props }) => {
              return (
                <div className="component-item">
                  <SText {...props} />
                </div>
              );
            })}
          </CContentDiv>
        </EColContent>
        <EColRight flex="300px">EColRight-8</EColRight>
      </Row>
    </>
  );
};

export default Editor;

const ERow = styled(Row)`
  height: 7vh;
  line-height: 7vh;
  display: flex;
  justify-content: space-between;
  background: #001529;
`;

const EColLeft = styled(Col)`
  min-height: 93vh;
  background-color: #efe0ce;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const EColContent = styled(Col)`
  position: relative;
  min-height: 93vh;
  background-color: red;
  padding: 24px;
  margin: 0;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CContentDiv = styled.div`
  width: 390px;
  height: 844px;
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
`;
const EColRight = styled(Col)`
  min-height: 93vh;
  background-color: blue;
`;
