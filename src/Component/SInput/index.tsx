import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { Input } from "antd";

interface SInputProps {
  [key: string]: any;
}

const SInput = (props: SInputProps) => {
  return <Input placeholder={props.extraProps.placeholder} />;
  // return (
  //   <>
  //     <PropertyCompontentWrap>
  //       <PropertyCompontentLeft>{props.text}: </PropertyCompontentLeft>
  //       <PropertyCompontentRight>
  //         <Input placeholder={props.extraProps.placeholder} />
  //         {/* <InputNumber min={1} max={10} defaultValue={3} />
  //                 <Slider defaultValue={30} disabled={false} /> */}
  //       </PropertyCompontentRight>
  //     </PropertyCompontentWrap>
  //   </>
  // );
};

export default SInput;

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
