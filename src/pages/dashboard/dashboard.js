import AbstractView from "../../js/views/AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async afterInit() {
        function rem() {
            var element = document.getElementsByClassName("wrapper");
            element.classList.remove("preload");
        }
    }

    //@html:start
async getHtml() {
return `
<!-- <div class="wrapper preload">
    <section class="grid-unit top-left">
        <div class="swing-panel">
            <span class="description">
                View all users
            </span>
        </div>
        <div class="sphere"></div>
        <span class="icon fa fa-users"></span>
        <span class="label">Classroom</span>
    </section>
    <section class="grid-unit top-right">
        <div class="swing-panel">
            <span class="description">View Blockly activities</span>
        </div>
        <div class="sphere"></div>
        <span class="icon fa fa-book"></span>
        <span class="label">Activity</span>
    </section>
    <section class="grid-unit bottom-right">
        <div class="swing-panel">
            <span class="description">
                User progress
            </span>
        </div>
        <div class="sphere"></div>
        <span class="icon fa fa-bar-chart"></span>
        <span class="label">Progress</span>
    </section>
    <section class="grid-unit bottom-right">
        <div class="description">
            Settings
        </div>
        <div class="sphere"></div>
        <span class="icon fa fa-gear"></span>
        <span class="label">Settings</span>
    </section>
</div> -->

<section id='dashboard'>
    <ul>
        <li>
            <a href="#users">
                <button id='users' type="button">
                    <i class="material-icons">person_search</i>
                    Users
                </button>
            </a>
        </li>
        <li>
            <a href="#user_workspace">
                <button id="projects" type="button">
                    <i class="material-icons">task</i>
                    Tasks
                </button>
            </a>
        </li>
        <li>
            <button class="open-button" id="add-admin" onclick="window.location.href='#add_admin'">
                <i class="material-icons">add_moderator</i>
                Add New Admin
            </button>
        </li>
    </ul>
    <p class="res"></p>
</section>
<script>
    function openForm() {
        document.getElementById('add-admin-form').style.display = "block";
    }
</script>

`;
}
//@html:end
}