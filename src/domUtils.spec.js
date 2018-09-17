jest.mock("@degjs/object-utils");
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

	describe("emptyElements", () => {
		it("should empty one element", () => {
			document.body.innerHTML = `
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            `;
			const listEl = document.querySelector("ul");
			emptyElements(listEl);
			expect(listEl).toMatchInlineSnapshot(`<ul />`);
		});

		it("should empty multiple elements", () => {
			document.body.innerHTML = `
                <div>
                    <h1>Section 1</h1>
                    <p>Section 1 content</p>
                </div>
                <div>
                    <h1>Section 2</h1>
                    <p>Section 2 content</p>
                </div>
            `;
			const els = [...document.querySelectorAll("div")];
			emptyElements(els);
			expect(els[0]).toMatchInlineSnapshot(`<div />`);

			expect(els[1]).toMatchInlineSnapshot(`<div />`);
		});
	});

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

	describe("removeElements", () => {
		it("should remove single element", () => {
			document.body.innerHTML = `
                <div>
                    <h1>Section 1</h1>
                    <p>Section 1 content</p>
                </div>
            `;
			const titleEl = document.querySelector("h1");
			const wrapperEl = document.querySelector("div");
			removeElements(titleEl);
			expect(wrapperEl).toMatchInlineSnapshot(`
<div>
  
                    
  
                    
  <p>
    Section 1 content
  </p>
  
                
</div>
`);
		});

		it("should remove multiple elements", () => {
			document.body.innerHTML = `
            <div>
                <h1>Section 1</h1>
                <p>Section 1 content</p>
            </div>
            <div>
                <h1>Section 2</h1>
                <p>Section 2 content</p>
            </div>
            `;
			const titleEls = [...document.querySelectorAll("h1")];
			const wrapperEls = [...document.querySelectorAll("div")];
			removeElements(titleEls);
			expect(wrapperEls[0]).toMatchInlineSnapshot(`
<div>
  
                
  
                
  <p>
    Section 1 content
  </p>
  
            
</div>
`);

			expect(wrapperEls[1]).toMatchInlineSnapshot(`
<div>
  
                
  
                
  <p>
    Section 2 content
  </p>
  
            
</div>
`);
		});
	});

	describe("wrapElements", () => {
		it("should handle one el to wrap", () => {
			document.body.innerHTML = `
                <h1>Title</h1>
            `;
			const titleEl = document.querySelector("h1");
			const wrapperEl = document.createElement("a");
			wrapElements(titleEl, wrapperEl);
			expect(document.body).toMatchInlineSnapshot(`
<body>
  
                
  <a>
    <h1>
      Title
    </h1>
  </a>
  
            
</body>
`);
		});

		it("should handle multiple els to wrap", () => {
			document.body.innerHTML = `
                <span>Text 1</span>
                <span>Text 2</span>
            `;
			const spanEls = [...document.querySelectorAll("span")];
			const wrapperEl = document.createElement("a");
			wrapElements(spanEls, wrapperEl);
			expect(document.body).toMatchInlineSnapshot(`
<body>
  
                
  <a>
    <span>
      Text 1
    </span>
    <span>
      Text 2
    </span>
  </a>
  
                
  
            
</body>
`);
		});
	});

	describe("unwrapElements", () => {
		it("should handle one el to unwrap", () => {
			document.body.innerHTML = `
                <a>
                    <span>Title</span>
                </a>
            `;
			const linkEl = document.querySelector("a");
			unwrapElements(linkEl);
			expect(document.body).toMatchInlineSnapshot(`
<body>
  
                
  
                    
  <span>
    Title
  </span>
  
                
  
            
</body>
`);
		});

		it("should handle multiple els to unwrap", () => {
			document.body.innerHTML = `
                <a>
                    <span>Title 1</span>
                </a>
                <a>
                    <span>Title 2</span>
                </a>
            `;
			const linkEls = [...document.querySelectorAll("a")];
			unwrapElements(linkEls);
			expect(document.body).toMatchInlineSnapshot(`
<body>
  
                
  
                    
  <span>
    Title 1
  </span>
  
                
  
                
  
                    
  <span>
    Title 2
  </span>
  
                
  
            
</body>
`);
		});
	});
});
