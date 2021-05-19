import AbstractView from "../../js/views/AbstractView";


export default class extends AbstractView {
    loader = undefined;
    noProjects = undefined;
    projects = undefined;
    newProject = undefined;
    loop = 0;

    constructor(params) {
        super(params);
    }

    afterInit() {
        this.loader = document.getElementById('loadingContainer');
        this.noProjects = document.getElementById('noProjects');
        this.projects = document.getElementById('projects');
        this.newProject = document.getElementById('newProject');
        this.removeNoProjects();
        // this.removeLoader();
        this.removeProjects();
        // basically a timeout
        setTimeout(() => {
            this.removeLoader();
            this.addNoProjects();
        }, 10000);
    }

    removeLoader() {
        this.loader.remove();
    }

    addLoader() {
        document.getElementById('container').appendChild(this.loader);
    }

    removeProjects() {
        this.projects.remove();
    }

    addProjects() {
        document.getElementById('container').appendChild(this.projects);
    }

    removeNoProjects() {
        this.noProjects.remove();
    }

    addNoProjects() {
        document.getElementById('container').appendChild(this.noProjects);
    }

    //@html:start
async getHtml() {
return `
<section id='container' class="landing">
    <div id="loadingContainer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div> 
    <section id='noProjects'>
        <label class='leading'>Looks like you dont have any projects.</label>
        <label>Maybe you should create one!</label>
        <button id='newProject'>New Project</button>
    </section>
    <section id='projects'> 
        <!-- <button id='newProject' type="button" class="fab extended">
            <i class="material-icons">build</i>
            <label>Build</label> 
        </button> -->
        <ul id='projects' class="jetBrains"> 
            <li id='newProject'> 
                <button>
                    <i class="material-icons">add</i>
                    New Project
                </button> 
            </li>
            <li id='project1'>
                <button class="proj">
                    <i class="material-icons">code</i>
                    Test Project 1
                </button>
            </li>
        </ul>
    </section>
</section>
`;
}
//@html:end
}