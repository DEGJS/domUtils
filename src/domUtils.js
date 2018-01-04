import {ensureArray} from 'DEGJS/objectUtils';

function isElement(o) {
    return (
        typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
    );
}

function createElement(nodeName, classNames) {
    classNames = ensureArray(classNames);
    const el = document.createElement(nodeName);
    classNames.forEach(className => el.classList.add(className));
    return el;
}

function emptyElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function emptyElements(els) {
    els = ensureArray(els);
    els.forEach(el => emptyElement(el));
}

function replaceContent(el, newContent) {
    emptyElement(el);
    el.insertAdjacentHTML('afterbegin', newContent);
}

function removeElements(els) {
    els = ensureArray(els);
    els.forEach(el => el.parentNode.removeChild(el));
}

function wrapElements(elsToWrap, wrapperEl) {
    elsToWrap = ensureArray(elsToWrap);
    const [firstElToWrap] = elsToWrap;
    firstElToWrap.parentNode.insertBefore(wrapperEl, firstElToWrap);
    elsToWrap.forEach(elToWrap => wrapperEl.appendChild(elToWrap));
}

function unwrapElements(wrapperEls) {
    wrapperEls = ensureArray(wrapperEls);
    wrapperEls.forEach(wrapperEl => {
        const fragment = document.createDocumentFragment();
        while (wrapperEl.firstChild) {
            fragment.appendChild(wrapperEl.firstChild);
        }
        wrapperEl.parentNode.replaceChild(fragment, wrapperEl);
    });
}

export {
    isElement,
    createElement,
    emptyElements,
    replaceContent,
    removeElements,
    wrapElements,
    unwrapElements
};
