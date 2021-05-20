import AbstractView from "../../../js/views/AbstractView";
import Blockly from '../js/blockly_compressed.js';
import '../js/javascript_compressed.js';
import '../js/blocks_compressed.js';

const blocklyArea = 'blocklyArea';
const blocklyDiv = 'blocklyDiv';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Block Builder!')
    }

    afterInit() {
        var blocklyArea = document.getElementById('blocklyArea');
        var blocklyDiv = document.getElementById('blocklyDiv');
        var demoWorkspace = Blockly.inject(blocklyDiv,
            {
                media: '../../media/',
                toolbox: document.getElementById('toolbox')
            });
        var onresize = function (e) {
            // Compute the absolute coordinates and dimensions of blocklyArea.
            var element = blocklyArea;
            var x = 0;
            var y = 0;
            do {
                x += element.offsetLeft;
                y += element.offsetTop;
                element = element.offsetParent;
            } while (element);
            // Position blocklyDiv over blocklyArea.
            blocklyDiv.style.left = x + 'px';
            blocklyDiv.style.top = y + 'px';
            // blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
            // blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
            Blockly.svgResize(demoWorkspace);
        };
        window.addEventListener('resize', onresize, false);
        onresize();
        Blockly.svgResize(demoWorkspace);
        function myUpdateFunction() {
            var xml = Blockly.JavaScript.workspaceToCode(demoWorkspace);
            document.getElementById('blocklyDiv').setAttribute("class", "flipper");
            document.getElementById('textarea').setAttribute("class", "flipback");
            document.getElementById('textarea').innerText = xml;
        }
    }

    //@html:start
async getHtml() {
return `
<table style="height:90vh;width:100%;background-color:#fff;font-family:sans-serif;overflow:hidden;">
    <tr>
        <td id="blocklyArea">
        </td>
    </tr>
</table>
<div id="blocklyDiv" style="position: absolute;width:100%;height:90vh;"></div>
<div id="textarea"></div>

<xml  id="toolbox" style="display: none">
    <block type="controls_if"></block>
    <block type="logic_compare"> </block>
    <!-- <block type="controls_repeat_ext"></block> -->
    <block type="math_number">
        <field name="NUM">123</field>
    </block>
    <block type="math_arithmetic"></block>
    <block type="text"></block>
    <block type="text_print"></block>
</xml>
<script>
    import Blockly from '../js/blockly_compressed.js';
    import '../js/javascript_compressed.js';
    import '../js/blocks_compressed.js';
    var blocklyArea = document.getElementById('blocklyArea');
    var blocklyDiv = document.getElementById('blocklyDiv');
    var demoWorkspace = Blockly.inject(blocklyDiv,
        {media: '../../media/',
            toolbox: document.getElementById('toolbox')});
    var onresize = function(e) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        //blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        //blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(demoWorkspace);
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(demoWorkspace);
    function myUpdateFunction() {
        var xml = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        document.getElementById('blocklyDiv').setAttribute("class", "flipper");
        document.getElementById('textarea').setAttribute("class", "flipback");
        document.getElementById('textarea').innerText = xml;
    }

    function rename() {
        Blockly.Msg.CONTROLS_IF_MSG_IF = 'IF';
        Blockly.Msg.CONTROLS_IF_MSG_THEN = 'THEN';
    }
        rename();

</script>

`;
}
//@html:end
}
