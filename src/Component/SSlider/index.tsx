import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { Slider } from "antd";

interface SSliderProps {
  [key: string]: any;
}

const SSlider = (props: SSliderProps) => {
  const { min, max, defaultValue, disabled } = props?.extraProps || {};
  return <Slider defaultValue={defaultValue} disabled={disabled} />;
};

export default SSlider;
