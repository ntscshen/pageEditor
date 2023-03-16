export const commonDefaultProps = {
  // actions
  actionType: "",
  url: "",
  // size
  height: "",
  width: "",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  // border type
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0px",
  borderRadius: "0px",
  // shadow and opacity
  boxShadow: "0 0 0 #000",
  opacity: 1,
  // position adn x,y
  // position: 'absolute',
  // left: '0',
  // top: '0',
  // right: '0',
};

export const textDefaultProps = {
  // basic props - font styles
  text: "正文内容",
  fontSize: "14px",
  fontFamily: "",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1",
  textAlign: "left",
  ...commonDefaultProps,
  color: "#fff",
  backgroundColor: "#fff",
};
// _.mapKeys()
export const mapPropsToForms = {
  text: {
    // 输入框 const App: React.FC = () => <Input placeholder="Basic usage" />;
    component: "SInput",
    text: "文本",
    value: "",
    extraProps: {
      placeholder: "请输入文本内容",
    },
  },
  fontSize: {
    // 数字输入框 const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
    component: "InputNumber",
    text: "字号",
    value: "",
    extraProps: {
      min: 1,
      max: 5,
      defaultValue: 3,
    },
  },
  lineHeight: {
    // 滑动输入条 <Slider defaultValue={30} disabled={disabled} />
    component: "Slider",
    text: "行高",
    value: "",
    extraProps: {
      defaultValue: 30,
      disabled: false,
    },
  },
};
