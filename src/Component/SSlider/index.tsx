import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  editorSliceAction,
  selectCurrentElement,
} from "screens/Editor/editor.slice";
import { AppDispatch } from "store";

interface SSliderProps {
  [key: string]: any;
}

const SSlider = (props: SSliderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const CurrentComponents = useSelector(selectCurrentElement);
  const { min, max, defaultValue, disabled } = props?.extraProps || {};

  const handleChange = (value: number | string | null) => {
    console.log("CurrentComponents :>> ", CurrentComponents);
    console.log("value :>> ", props);
    console.log("value :>> ", value);
    dispatch(
      editorSliceAction.editorComponent({
        ...CurrentComponents,
        item: {
          ...CurrentComponents.item,
          props: {
            ...CurrentComponents.item.props,
            lineHeight: value,
            // lineHeight:
          },
        },
      })
    );
  };
  return (
    <Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      disabled={disabled}
      onChange={handleChange}
      style={{ ...props?.extraProps }}
    />
  );
};

export default SSlider;
