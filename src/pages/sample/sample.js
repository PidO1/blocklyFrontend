import AbstractView from "../../js/views/AbstractView";


export default class extends AbstractView {
    constructor(params) {
        super(params);
    }

    //@html:start
async getHtml() {
return `
<h>This is a sample</h>
<div>test 6</div>
`;
}
//@html:end
}