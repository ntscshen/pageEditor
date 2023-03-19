import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";
import {
  CurrentElementSliceAction,
  editorSliceAction,
  selectCurrentElement,
} from "screens/Editor/editor.slice";
import { AppDispatch } from "store";

interface SInputNumberProps {
  [key: string]: any;
}

const SInputNumber = (props: SInputNumberProps) => {
  const dispatch = useDispatch<AppDispatch>();

  // 每次拿到都是之前的数据
  const CurrentComponents = useSelector(selectCurrentElement);

  const handleChange = (value: number | string | null) => {
    dispatch(
      editorSliceAction.editorComponent({
        ...CurrentComponents,
        item: {
          ...CurrentComponents.item,
          props: {
            ...CurrentComponents.item.props,
            fontSize: value + "px",
          },
        },
      })
    );
  };

  const { min, max, defaultValue } = props?.extraProps || {};
  return (
    <InputNumber
      addonAfter="px"
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={handleChange}
      style={{ ...props?.extraProps }}
    />
  );
};

export default SInputNumber;
