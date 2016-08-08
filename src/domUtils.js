import ensureArray from "DEGJS/objectUtils";

function isElement(o) {
    return (
        typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName==='string'
    ); 
};

function createElement(nodeName, classNames) {
    classNames = ensureArray(classNames);
    let el = document.createElement(nodeName);
    classNames.forEach(function(className) {
        el.classList.add(className);
    });
    return el;
};

function emptyElements(els) {
    els = ensureArray(els);
    els.forEach(function(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    });
};

function removeElements(els) {
    els = ensureArray(els);
    els.forEach(function(el) {
        el.parentNode.removeChild(el);
    });
};

function wrapElements(elsToWrap, wrapperEl) {
    elsToWrap = ensureArray(elsToWrap);
    let firstElToWrap =  elsToWrap[0];
    firstElToWrap.parentNode.insertBefore(wrapperEl, firstElToWrap);
    elsToWrap.forEach(function(elToWrap) {
        wrapperEl.appendChild(elToWrap);
    });
};

function unwrapElements(wrapperEls) {
    wrapperEls = ensureArray(wrapperEls);
    wrapperEls.forEach(function(wrapperEl) {
        let fragment = document.createDocumentFragment();
        while(wrapperEl.firstChild) {
            fragment.appendChild(wrapperEl.firstChild);
        }
        wrapperEl.parentNode.replaceChild(fragment, wrapperEl);
    });
};

export { 
    isElement, 
    createElement, 
    emptyElements, 
    removeElements, 
    wrapElements, 
    unwrapElements 
};