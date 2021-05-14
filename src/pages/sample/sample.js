import AbstractView from "../../js/views/AbstractView";


export default class extends AbstractView {
    constructor(params) {
        super(params);
    }

    //@html:start
async getHtml() {
return `
<h>This is a sample</h>
<div>test 8</div>
`;
}
//@html:end
}