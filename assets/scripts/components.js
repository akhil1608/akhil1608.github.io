const HeadShot = {
    template: `<img class="img-fluid rounded-circle" src="assets/images/headshot.jpeg" />`
};
const HeadShotSmall = {
    template: `<img class="img-fluid rounded-circle" src="assets/images/headshot_sm.jpeg" />`
};
const SectionButton = {
    props: ["name"],
    template: `<button class="btn btn-sm btn-outline-light m-1">{{ name }}</button>`
};
const ProjectItem = {
    props: {
        project: {}
    },
    template: `
    <div class="w-100 mx-auto d-inline m-2 text-white bg-dark border-white">
        <h4 class="mb-2 text-truncate"><a class="text-white text-decoration-none" :href="project.href">{{ project.name }}</a></h4>
        <h6 class="text-muted text-truncate">{{ project.description == null ? "No Description" : project.description }}</h6>
        <h6 class="text-muted">{{ project.language == null ? "NA" : project.language }}</h6>
        <hr />
    </div>
    `
};
const SectionPage = {
    props: ["active"],
    template: `
    <div class="row flex-grow-1">
        <div class="d-flex flex-column align-items-center">
            <div class="m-3 mt-5 col-9">
                <div class="display-6" style="--bs-breadcrumb-divider: '>';">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><slot name="main"></slot></li>
                        <li class="breadcrumb-item"><span class="text-white">{{ active }}</span></li>
                    </ol>
                </div>
                <hr class="bg-danger border-4 border-top border-warning" />
                <!-- section content -->
                <slot name="content"></slot>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
    `
};
export {
    HeadShot, HeadShotSmall, SectionButton, ProjectItem, SectionPage
};