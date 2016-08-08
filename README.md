# domUtils
Working with the browser's Document Object Model (DOM) via JavaScript has historically been harder than it should've been, filled with enough inconsistencies and browser bugs to drive even the best developer crazy. These challenges were a huge factor in the ubiquity of JavaScript helper libraries such as jQuery across the web.

Fortunately, those days are largely behind us. Modern-day DOM interaction is simpler and more consistent, to the point where jQuery shouldn't be an assumed dependency anymore ([no, really](http://youmightnotneedjquery.com/)).

domUtils bridges the gap between vanilla JS and a full-fledged library. It's a collection of helper methods that can be imported individually to keep your codebase lean, or together when more are needed.

## Install
domUtils is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install domUtils with the following command:

```
$ jspm install github:DEGJS/domUtils
```

## Usage

### Importing individual domUtils methods:
```js
import createElement from "DEGS/domUtils";

let newEl = createElement('div', ['classNameA', 'classNameB']); // Create a new element
document.body.appendChild(newEl); // Add the new element to the DOM
```

### Importing all domUtils methods:
```js
import * as domUtils from "DEGS/domUtils";

let newEl = domUtils.createElement('div', ['classNameA', 'classNameB']); // Create a new element
document.body.appendChild(newEl); // Add the new element to the DOM
domUtils.removeElements(newEl); // Remove the new element from the DOM
```

## Methods

### isElement(el)
The isElement method tests a supplied value to see if it's a valid HTML element, and returns `true` or `false`.
#### Parameters:
##### el
Type: `Element`  
The potential element to test.

### createElement(nodeName, classNames)
The createElement method creates and returns a new HTML element that can be inserted into the DOM.
#### Parameters:
##### nodeName
Type: `String`  
The name of the new HTML element you want to create (i.e., 'div', 'li', etc.).
##### classNames
Type: `String` or `Array`  
An indivudal class name, or array of class names, that will be added to the returned element.

### emptyElements(els)
The emptyElements method removes all child elements from the supplied list of HTML elements.
#### Parameters:
##### els
Type: `Element` or `Array`   
A single HTML element or an array of HTML elements that will be emptied.

### removeElements(els)
The removeElements method removes all supplied HTML elements from the DOM.
#### Parameters:
##### els
Type: `Element` or `Array`   
A single HTML element or an array of HTML elements that will be removed.

### wrapElements(elsToWrap, wrapperEl)
The wrapElements method wraps all supplied HTML elements within another supplied element.
#### Parameters:
##### elsToWrap
Type: `Element` or `Array`   
A single HTML element or an array of HTML elements that will be wrapped by the `wrapperEl` element.
##### wrapperEl
Type: `Element`   
A single HTML element that will be wrapped around the supplied `elsToWrap` elements.

### unwrapElements(wrapperEls)
The unwrapElements method removes a wrapping parent HTML element, leaving all of its child elements in place.
#### Parameters:
##### wrapperEls
Type: `Element` or `Array` 
A single HTML element or an array of HTML elements that will be removed, without removing child elements.


## Browser Support

domUtils depends on the following browser APIs:
+ classList: [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) | [Polyfill](https://github.com/eligrey/classList.js/)
+ forEach: [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | [Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill)

To support legacy browsers, you'll need to include polyfills for the above APIs.