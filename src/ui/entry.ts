import { ItemView } from "obsidian";

import Main from "./main.svelte";

export const APP_VIEW_NAME = "project-plan";

export class AppView extends ItemView {
	component: Main | undefined;
	icon = "kanban-square";

	getViewType() {
		this.leaf.openFile;
		return APP_VIEW_NAME;
	}

	getDisplayText() {
		return "Project Planner";
	}

	async onOpen() {
		this.component = new Main({
			target: this.contentEl,
			props: {
				workspace: this.app.workspace,
				vault: this.app.vault,
				registerEvent: this.registerEvent.bind(this),
			},
		});
	}

	async onClose() {
		this.component?.$destroy();
	}
}