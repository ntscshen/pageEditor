import React, { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import _ from "lodash";
import { HighlightOutlined, GithubOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";

import { Col, Row, Input, InputNumber, Slider } from "antd";
import {
  editorSliceAction,
  selectEditor,
  EditorSlice,
  selectCurrentElement,
  CurrentElementSliceAction,
} from "./editor.slice";
import SText from "../../Component/SText/index";
import { defaultTemplates } from "Component/default.templates";
import { counterSliceActions } from "screens/project-list/project-list.slice";
import { Button } from "antd";
import { mapPropsToForms } from "Component/default.props";
import SInput from "Component/SInput";
import SInputNumber from "Component/SInputNumber";
import SSlider from "Component/SSlider";

interface defaultTemplatesProps {
  id: number;
  type: string;
  text: string;
  [key: string]: any;
}
const Editor = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const components = useSelector(selectEditor);
  const CurrentComponents = useSelector(selectCurrentElement);

  useCallback(() => {}, []);

  const templatesRender = (templeate: any) => {
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

  let finalProps: any = [];

  _.mapKeys(CurrentComponents?.item?.props, (value, key: any) => {
    if (key) {
      // @ts-ignore
      const mapProps = mapPropsToForms[key];

      mapProps &&
        finalProps.push({ ...mapProps, text: key === "text" ? value : "" });
    }
  });
  console.log("finalProps :>> ", finalProps);

  // text
  // fontSize
  // fontFamily
  // fontWeight
  // fontStyle
  // textDecoration
  // lineHeight
  // textAlign
  // color
  // backgroundColor

  const componentForm = (items: any) => {
    switch (items?.component) {
      case "SInput":
        return <SInput {...items} />;
      case "InputNumber":
        return <SInputNumber {...items} />;
      case "Slider":
        return <SSlider {...items} />;
      default:
        break;
    }
  };
  console.log("components :>> ", components);
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
          <CContentDiv>
            {components.map((component) => {
              return (
                <CContentComponentItem
                  onClick={() => {
                    console.log("component.id :>> ", component.id);
                    dispatch(
                      CurrentElementSliceAction.addCurrentComponent(component)
                    );
                  }}
                >
                  <SText {...component.props} />
                </CContentComponentItem>
              );
            })}
          </CContentDiv>
        </EColContent>
        <EColRight>
          {finalProps?.map((item: any) => {
            return (
              <PropertyCompontentWrap>
                <PropertyCompontentLeft>
                  {item.extraProps.name}:{" "}
                </PropertyCompontentLeft>
                <PropertyCompontentRight>
                  {componentForm(item)}
                </PropertyCompontentRight>
              </PropertyCompontentWrap>
            );
          })}
        </EColRight>
      </Row>
    </>
  );
};

export default Editor;

const PropertyCompontentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
`;
const PropertyCompontentLeft = styled.div`
  width: 20%;
  text-align: right;
  margin-right: 10px;
`;
const PropertyCompontentRight = styled.div`
  width: 80%;
`;

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
const CContentComponentItem = styled.div`
  &:hover {
    border-color: red;
    border-width: 1px;
    border-style: dashed;
  }
`;

const EColRight = styled(Col)`
  min-height: 93vh;
  overflow: hidden;
  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: column;
`;

const textComponentProps = {
  text: "hello",
  color: "#fff",
};

const propsMap = {
  text: {
    component: "input",
  },
  color: {
    component: "color-picker",
  },
};
