import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { InputNumber } from "antd";

interface SInputNumberProps {
  [key: string]: any;
}

const SInputNumber = (props: SInputNumberProps) => {
  const { min, max, defaultValue } = props?.extraProps || {};
  return <InputNumber min={min} max={max} defaultValue={defaultValue} />;
};

export default SInputNumber;
