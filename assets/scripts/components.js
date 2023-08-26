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
    <div class="card w-25 float-start m-0 text-white bg-dark border-white">
        <div class="card-body">
            <h3 class="card-title">{{ project.name }}</h3>
            <p class="card-text">{{ project.language }}</p>
        </div>
    </div>
    `
};
const SectionPage = {
    props: ["active"],
    template: `
    <div class="row flex-grow-1">
        <div class="d-flex flex-column align-items-center">
            <div class="m-3 mt-5 col-9 text-center">
                <div class="display-6" style="--bs-breadcrumb-divider: '>';">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><slot name="main"></slot></li>
                        <li class="breadcrumb-item"><span class="text-white">{{ active }}</span></li>
                    </ol>
                </div>
                <hr class="bg-danger border-4 border-top border-warning" />
                <!-- section content -->
                <slot name="content"></slot>
            </div>
        </div>
    </div>
    `
};
export {
    HeadShot, HeadShotSmall, SectionButton, ProjectItem, SectionPage
};