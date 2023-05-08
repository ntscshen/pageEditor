import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";
import {
  CurrentElementSliceAction,
  editorSliceAction,
  selectCurrentElement,
} from "screens/Editor/editor.slice";

interface SInputProps {
  [key: string]: any;
}

const SInput = (props: SInputProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const CurrentComponents = useSelector(selectCurrentElement);

  console.log("props?.text :>> ", props?.text);
  const [value, setValue] = useState(props?.text);

  useEffect(() => {
    setValue(props.text);
  }, [props.text]);

  useEffect(() => {
    console.log("11111111111 :>> ", 11111111111);

    dispatch(
      CurrentElementSliceAction.updateCurrentItem({
        ...CurrentComponents.item,
        props: {
          ...CurrentComponents.item.props,
          text: value,
        },
      })
    );

    console.log("2322222222 :>> ", 2322222222);
    dispatch(
      editorSliceAction.editorComponent({
        ...CurrentComponents,
        item: {
          ...CurrentComponents.item,
          props: {
            ...CurrentComponents.item.props,
            text: value,
          },
        },
      })
    );
  }, [value]);

  const handleChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <Input
      placeholder={props.extraProps.placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SInput;
