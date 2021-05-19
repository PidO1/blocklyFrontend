import Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/generators/javascript';
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var onresize = function(e) {
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);
function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('textarea').value = code;
}
workspace.addChangeListener(myUpdateFunction)

