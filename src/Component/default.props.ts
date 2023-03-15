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
