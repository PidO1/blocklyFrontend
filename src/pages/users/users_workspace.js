import AbstractView from "../../js/views/AbstractView";

export default class extends AbstractView
{
    constructor(params) {
        super(params);
        this.setTitle("User Workspace");
    }

    async afterInit() {
        const Blockly = require('blockly');
        let currentButton;

        const xmlText = `<xml xmlns="https://developers.google.com/blockly/xml">
<block type="text_print" x="37" y="63">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">Hello from Blockly!</field>
    </shadow>
  </value>
</block>
</xml>`;

        try {
            const xml = Blockly.Xml.textToDom(xmlText);

            const workspace = new Blockly.Workspace();
            Blockly.Xml.domToWorkspace(xml, workspace);

            const code = Blockly.JavaScript.workspaceToCode(workspace);
            console.log(code);
        }
        catch (e) {
            console.log(e);
        }

        function save(button)
        {
            button.blocklyXml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        }

        function handleSave()
        {
            document.body.setAttribute('mode', 'edit');
            save(currentButton);
        }

        function loadWorkspace(button)
        {
            let workspace = Blockly.getMainWorkspace();
            workspace.clear();
            if (button.blockxml)
            {
                Blockly.Xml.domToWorkspace(button.blockxml, workspace);
            }
        }

        function enableEditMode()
        {
            document.body.setAttribute('mode', 'edit');
            document.querySelector('.button').forEach(btn=>{
                //btn.removeEventListener('click');
                btn.addEventListener('click', enableBlocklyMode)
            });
        }

        function enableBlocklyMode(e)
        {
            document.body.setAttribute('mode', 'blockly');
            currentButton = e.target;
            loadWorkspace(currentButton);
        }

        document.querySelector('#save').addEventListener('click', enableEditMode);
        document.querySelector('#edit').addEventListener('click', enableEditMode);
    }
}


