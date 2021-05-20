import AbstractView from "../../js/views/AbstractView";

export default class extends AbstractView
{
    constructor(params) {
        super(params);
        this.setTitle("User Dashboard");
    }

    async afterInit() {
        console.log('User dash');
    }

    //@html:start
async getHtml() {
return `
<section id='user_dashboard'>
  <ul>
    <li>
      <a href="#">
        <button id="projects" type="button">
          <i class="material-icons">task</i>
          Tasks
        </button>
      </a>
    </li>
    <li>
      <a href="#">
        <button id="add-admin">
          <i class="material-icons">add_task</i>
          New Project
        </button>
      </a>
    </li>
  </ul>
</section>
`;
}
//@html:end
}