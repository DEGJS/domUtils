let domUtils = {

    elements: {
        body: document.body
    },

    isDescendentByClass: function(parentClass, el) {
        if (el.classList.contains(parentClass)) {
            return el;
        }
        var node = el.parentNode;
        while (node != null) {
            if ((typeof node.classList !== 'undefined') && (node.classList.contains(parentClass))) {
                return node;
            }
            node = node.parentNode;
        }
        return false;
    },

    isDescendentByEl: function(parentEl, el) {
        if (el.tagName === parentEl) {
            return el;
        }
        var node = el.parentNode;
        while (node != null) {
            if ((typeof node.tagName !== 'undefined') && (node.tagName === parentEl)) {
                return node;
            }
            node = node.parentNode;
        }
        return false;
    },

    isElement: function(o) {
        return (
            typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName==='string'
        ); 
    },

    createElement: function(tag, classNames) {
        var el = document.createElement(tag);
        if(Array.isArray(classNames) === false) {
            classNames = [classNames];
        }
        classNames.forEach(function(className) {
            el.classList.add(className);    
        });
        return el;
    },

    emptyElement: function(parentEl) {
        while (parentEl.firstChild) {
            parentEl.removeChild(parentEl.firstChild);
        }
    },

    removeElements: function(els) {
        if (!Array.isArray(els)) {
            els = [els];
        }
        els.forEach(function(el) {
            el.parentNode.removeChild(el);
        });
    },

    wrapElements: function(elsToWrap, wrapperEl) {
        if(Array.isArray(elsToWrap) == false)
            elsToWrap = [elsToWrap];

        var firstElToWrap =  elsToWrap[0];
        firstElToWrap.parentNode.insertBefore(wrapperEl, firstElToWrap);

        elsToWrap.forEach(function(elToWrap) {
            wrapperEl.appendChild(elToWrap);
        });
    },

    unwrapElements: function(wrapperEl) {
        var fragment = document.createDocumentFragment();
        while(wrapperEl.firstChild) {
            fragment.appendChild(wrapperEl.firstChild);
        }
        wrapperEl.parentNode.replaceChild(fragment, wrapperEl);
    },

    addCssClasses: function(el, cssClasses) {
        if(Array.isArray(cssClasses) === false) {
            cssClasses = [cssClasses];
        }
        for(var i = 0; i < cssClasses.length; i++)
            el.classList.add(cssClasses[i]);
    },

    removeCssClasses: function(el, cssClasses) {
        if(Array.isArray(cssClasses) === false) {
            cssClasses = [cssClasses];
        }
        for(var i = 0; i < cssClasses.length; i++)
            el.classList.remove(cssClasses[i]);
    }

};

export default domUtils;