import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import { HeadShot, HeadShotSmall, SectionButton, ProjectItem, SectionPage } from "./components.js"

const app = createApp({
	data() {
		return {
			active: "main",
			projectSearch: "",
			sections: ["projects"]
		}
	},
	async created() {
		this.projects = await getRepos();
	},
	methods: {
		sectionClicked(section = "main") {
			this.active = section;
		}
	},
	computed: {
		isMainActive() {
			return this.active == "main";
		},
		placeHolderText() {
			return "filter " + this.active;
		},
		filteredProjects() {
			return this.projects.filter(x => x.name.includes(this.projectSearch));
		}
	}
});
app.component("HeadShot", HeadShot);
app.component("HeadShotSmall", HeadShotSmall);
app.component("SectionButton", SectionButton);
app.component("ProjectItem", ProjectItem);
app.component("SectionPage", SectionPage);
app.mount("#app");

function getRepos() {
	return fetch("https://api.github.com/users/akhil1608/repos", {
		method: "GET",
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then((response) => (response.json()))
	.then((repos) => (repos.map((item) => ({name: item.name, language: item.language}))));
}