import AbstractView from "../../js/views/AbstractView";


export default class extends AbstractView {
    loader = undefined;
    noProjects = undefined;
    projects = undefined;

    constructor(params) {
        super(params);
    }

    afterInit() {
        this.loader = document.getElementById('loadingContainer');
        this.noProjects = document.getElementById('noProjects');
        this.projects = document.getElementById('projects');
        this.removeNoProjects();
        this.removeProjects();
        //basically a timeout
        setTimeout(() => {
            this.removeLoader();
            document.getElementById('container').appendChild(this.noProjects);
        }, 10000);
    }

    removeLoader() {
        this.loader.remove();
    }

    removeProjects() {
        this.projects.remove();
    }

    removeNoProjects() {
        this.noProjects.remove();
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
        <button id='newProject' type="button" class="fab extended">
            <i class="material-icons">build</i>
            <label>Build</label>
        </button>
    </section>
</section> 
`;
}
//@html:end
}