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
      name: "文本",
      placeholder: "请输入文本内容",
    },
  },
  fontSize: {
    // 数字输入框 const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
    component: "InputNumber",
    text: "字号",
    value: "",
    extraProps: {
      name: "字号",
      min: 12,
      max: 100,
      defaultValue: 30,
      lineHeight: 30,
    },
  },
  lineHeight: {
    // 滑动输入条 <Slider defaultValue={30} disabled={disabled} />
    component: "Slider",
    text: "行高",
    value: "",
    extraProps: {
      name: "行高",
      min: 1,
      max: 10,
      defaultValue: 1,
      disabled: false,
    },
  },
};

const textAlign = {
  component: "RadioChangeEvent",
  subComponent: "Slider",
  text: "对齐",
  value: "",
  options: [
    { value: "left", text: "左" },
    { value: "center", text: "中" },
    { value: "right", text: "右" },
  ],
  extraProps: {
    defaultValue: 30,
    disabled: false,
  },
  initTransform: (v: string) => parseInt(v),
  afterTransform: (e: number) => (e ? `${e}px` : ""),
};

const fontFamily = {
  component: "Select",
  text: "字体",
  options: [
    { value: "", text: "无" },
    { value: "宋体", text: '"SimSun", "STSong"' },
    { value: "黑体", text: '"SimHei", "STHeiti"' },
    { value: "楷体", text: '"KaiTi", "STKaiti"' },
    { value: "仿宋", text: '"FangSong", "STFangsong"' },
  ],
};

// 新增配置组件: RadioChangeEvent Select
// 修改内容之后，将被修改的值打印出来
// { key: 'text', value: 'hello2' }
// { key: 'textAlign', value: 'center' }
// 直接改变 store 中的值
