import AbstractView from "../../js/AbstractView";


export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  afterInit() {
  }


  //@html:start
async getHtml() {
return `
<div id="app"></div> 
<script src="https://unpkg.com/blockly/blockly.min.js"></script>
<script src="blockly_compressed.js"></script>
<script src="javascript_compressed.js"></script>
<div style="max-height: 80vh; width: 100vw;">
  <div id="blocklyDiv" style="max-height: 80vh; width: 100vw;"></div>
  <code id='textarea'></code>
</div>

<xml id="toolbox" style="display: none;">
  <block type="controls_if"></block>
  <block type="controls_repeat_ext"></block>
  <block type="logic_compare"></block>
  <block type="math_number"></block>
  <block type="math_arithmetic"></block>
  <block type="text"></block>
  <block type="text_print"></block>
  <block type="logic_boolean"></block>
  <block type="controls_ifelse"></block>
  <block type="logic_compare"></block>
  <block type="logic_operation"></block>
  <block type="logic_negate"></block>
  <block type="logic_null"></block>
  <block type="logic_ternary"></block>
  <block type="controls_repeat"></block>
  <block type="controls_whileUntil"></block>
  <block type="controls_for"></block>
  <block type="controls_forEach"></block>
  <block type="controls_flow_statements"></block>
  <block type="variables_get"></block>
  <block type="lists_create_empty"></block>
  <block type="lists_repeat"></block>
  <block type="lists_reverse"></block>
  <block type="lists_isEmpty"></block>
  <block type="lists_length"></block>
  <block type="variables_get_dynamic"></block>
  <block type="variables_set_dynamic"></block>
  <block type="text_multiline"></block>
  <block type="text_join"></block>
  <block type="text_create_join_container"></block>
  <block type="text_create_join_item"></block>
  <block type="text_append"></block>
  <block type="text_isEmpty"></block>
  <block type="text_indexOf"></block>
  <block type="text_charAt"></block>
  <block type="colour_picker"></block>
  <block type="colour_random"></block>
  <block type="colour_rgb"></block>
  <block type="colour_blend"></block>
  <block type="math_number"></block>
  <block type="math_arithmetic"></block>
  <block type="math_single"></block>
  <block type="math_trig"></block>
  <block type="math_constant"></block>
  <block type="math_number_property"></block>
  <block type="math_change"></block>
  <block type="math_round"></block>
  <block type="math_on_list"></block>
  <block type="math_constrain"></block>
  <block type="math_random_int"></block>
  <block type="math_random_float"></block>
  <block type="math_atan2"></block> 
</xml>
<script>
  var workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox")
  });
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('textarea').value = code;
}
workspace.addChangeListener(myUpdateFunction);
</script>
`;
}
//@html:end
}