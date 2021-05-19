import AbstractView from "../../js/AbstractView";


export default class extends AbstractView {
    loader = undefined;
    noProjects = undefined;
    noProjectsSignIn = undefined;
    projects = undefined;
    newProject = undefined;
    loop = 0;

    constructor(params) {
        super(params);
    }

    afterInit() {
        this.loader = document.getElementById('loadingContainer');
        this.noProjects = document.getElementById('noProjects');
        this.noProjectsSignIn = document.getElementById('newProject_signIn');
        this.projects = document.getElementById('projects');
        this.removeNoProjects();
        // this.removeLoader();
        this.removeProjects();
        // basically a timeout
        setTimeout(() => {
            this.removeLoader();
            this.addNoProjects();
        }, 100);
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
        this.newProject = document.getElementById('newProject');
        this.newProject.addEventListener("click", () => {
            //TODO create new project
            window.location.href = "#blocks";
        });
    }

    removeNoProjects() {
        this.noProjects.remove();
    }

    addNoProjects() {
        document.getElementById('container').appendChild(this.noProjects);
        this.newProject = document.getElementById('newProject');
        this.newProject.addEventListener("click", () => {
            window.location.href = "#blocks";
        });
    }

    removeNoProjectsSignIn() {
        this.noProjectsSignIn.remove();
    }

    addNoProjectsSignIn() {
        this.noProjects.appendChild(this.noProjectsSignIn);
    }

    //@html:start
async getHtml() {
return `
<section id='container' class="landing">
    <div id="loadingContainer" role="progressbar" aria-readonly="true" aria-busy="true" aria-valuetext="Loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <section id='noProjects'>
        <label class='leading'>Looks like you dont have any projects.</label>
        <label>Maybe you should create one!</label>
        <button id='newProject'>
            New Project 
            <span id='newProject_signIn'> and Sign in</span> 
        </button> 
    </section> 
    <section id='projects'>
        <!-- <button id='newProject' type="button" class="fab extended">
            <i class="material-icons">build</i>
            <label>Build</label> 
        </button> -->
        <ul id='projects' class="jetBrains">
            <li>
                <button id='newProject'>
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