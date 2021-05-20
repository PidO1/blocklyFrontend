import AbstractView from "../../js/AbstractView";


export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  afterInit() {
    var workspace = Blockly.inject("blocklyDiv", {
      toolbox: document.getElementById("toolbox")
    });
  }


  //@html:start
async getHtml() {
return `
<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>
  <script src="https://unpkg.com/blockly/blockly.min.js"></script>
  <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>

  <xml id="toolbox" style="display: none;">
    <block type="controls_if"></block>
    <block type="controls_repeat_ext"></block>
    <block type="logic_compare"></block>
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="text"></block>
    <block type="text_print"></block>
  </xml>
  <script src="src/index.js"></script>
  <script>
    var workspace = Blockly.inject("blocklyDiv", {
      toolbox: document.getElementById("toolbox")
    });
  </script>
</body> 

</html>
`;
}
//@html:end
}