import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Col, Row } from "antd";

const Editor = () => {
  return (
    <>
      <ERow>
        <Col span={24}>col</Col>
      </ERow>
      <Row>
        <EColLeft flex="300px">EColLeft-8</EColLeft>
        <EColContent flex="auto">EColContent-8</EColContent>
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
`;

const EColContent = styled(Col)`
  min-height: 93vh;
  background-color: red;
`;

const EColRight = styled(Col)`
  min-height: 93vh;
  background-color: blue;
`;
