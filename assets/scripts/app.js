import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import { HeadShot, HeadShotSmall, SectionButton, ProjectItem, SectionPage } from "./components.js"

const app = createApp({
	data() {
		return {
			active: "main",
			projectSearch: "",
			sections: ["Projects"]
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
			console.log(this.filteredProjects);
			return this.projects.filter(x => !x.name.startsWith("_")).filter(x => x.name.includes(this.projectSearch));
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
	.then(response => response.json())
	.then(repos => repos.map(item => ({
		"name": item.name, 
		"language": item.language, 
		"description": item.description,
		"href": item.html_url, 
		"ex": item
	})))
	.then(repos => repos.filter(item => !item.name.startsWith("_")))
	.then(repos => repos.filter(item => item.name != "akhil1608.github.io"));
}