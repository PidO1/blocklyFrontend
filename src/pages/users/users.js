import AbstractView from "../../js/views/AbstractView";

export default class extends AbstractView
{
    constructor(params)
    {
        super(params);
        this.setTitle("Classroom")
    }

    async afterInit() {

    }

    //@html:start
async getHtml() {
return `
<table id="userTable">
    <thead class="header" id="table-header">
        <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody id='userTableBody'>
        <tr>
            <td>1</td>
            <td>Levi Ackerman</td>
            <td>levi@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td> 
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Erwin Smith</td>
            <td>erwin@aot.com</td>
        </tr>



    </tbody>
</table>
`;
}
//@html:end
}
