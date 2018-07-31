jest.mock("DEGJS/objectUtils");
import {
	createElement,
	emptyElements,
	replaceContent,
	removeElements,
	wrapElements,
	unwrapElements
} from "./domUtils";

describe("domUtils", () => {
	describe("createElement", () => {
		it("should work with no class names", () => {
			const titleEl = createElement("h1");
			expect(titleEl).toMatchInlineSnapshot(`<h1 />`);
		});

		it("should work with one class name", () => {
			const titleEl = createElement("h1", "title");
			expect(titleEl).toMatchInlineSnapshot(`
<h1
  class="title"
/>
`);
		});

		it("should work with multiple class names", () => {
			const titleEl = createElement("h1", ["title", "title--blue"]);
			expect(titleEl).toMatchInlineSnapshot(`
<h1
  class="title title--blue"
/>
`);
		});
	});

	describe("emptyElements", () => {});

	describe("replaceContent", () => {
		it("should replace content", () => {
			document.body.innerHTML = `
                <h1>Hello</h1>
            `;
			const titleEl = document.querySelector("h1");
			replaceContent(titleEl, "World");
			expect(titleEl).toMatchInlineSnapshot(`
<h1>
  World
</h1>
`);
		});
	});

	describe("removeElements", () => {});

	describe("wrapElements", () => {});

	describe("unwrapElements", () => {});
});
