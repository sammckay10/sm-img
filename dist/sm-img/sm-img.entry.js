const h = window.SmImg.h;

class StImg {
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    componentWillUpdate() {
        if (this.src !== this.oldSrc)
            this.addIntersectionObserver();
        this.oldSrc = this.src;
    }
    handleImage() {
        const image = this.el.querySelector('img');
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    }
    addIntersectionObserver() {
        if (!this.src)
            return;
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.handleImage();
                    this.removeIntersectionObserver();
                }
            });
            this.io.observe(this.el.querySelector('img'));
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => {
                this.handleImage();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (!this.io)
            return;
        this.io.disconnect();
        this.io = null;
    }
    render() {
        return h("img", { "data-src": this.src, alt: this.alt });
    }
    static get is() { return "sm-img"; }
    static get properties() { return {
        "alt": {
            "type": String,
            "attr": "alt"
        },
        "el": {
            "elementRef": true
        },
        "oldSrc": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get style() { return "sm-img {\n  display: block;\n}\n\nsm-img img {\n  max-width: 100%;\n}"; }
}

export { StImg as SmImg };
