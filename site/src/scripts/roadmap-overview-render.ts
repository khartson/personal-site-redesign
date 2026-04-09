/** Root wrapper classes (id is roadmap-content-overview-mount). */
const mountClass = "text-xs leading-relaxed normal-case tracking-normal";

const listClass = "list-none space-y-2.5 m-0 p-0";
const itemClass =
	"flex gap-2.5 text-left border-l-2 border-roadmap-primary/35 pl-3 py-0.5 text-slate-300 first:pt-0";

const paragraphClass =
	"text-white uppercase tracking-wider m-0 text-xs leading-relaxed";

export function renderOverviewMount(
	mount: HTMLElement,
	overview: string,
	bulletsJson: string,
): void {
	let bullets: string[] = [];
	try {
		const parsed = JSON.parse(bulletsJson || "[]") as unknown;
		if (Array.isArray(parsed)) {
			bullets = parsed.filter((x): x is string => typeof x === "string");
		}
	} catch {
		bullets = [];
	}

	mount.className = mountClass;
	mount.replaceChildren();

	if (bullets.length > 0) {
		const ul = document.createElement("ul");
		ul.className = listClass;
		for (const line of bullets) {
			const li = document.createElement("li");
			li.className = itemClass;
			const span = document.createElement("span");
			span.textContent = line;
			li.append(span);
			ul.append(li);
		}
		mount.append(ul);
		return;
	}

	const p = document.createElement("p");
	p.className = paragraphClass;
	p.textContent = overview;
	mount.append(p);
}
