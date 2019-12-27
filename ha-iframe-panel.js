/**
 * 
 * 作者QQ：635147515
 * 日期：2019-12-26
 * 版本：1.1
 * 功能：
 *      1. 在HA里打开新页面
 *      2. 在HA里全屏显示页面
 *      3. 在HA里打开页面
 *      4. 在HA里打开系统内置页面
 */

class HaIframePanel extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        div.className = 'ha-iframe-panel'
        div.innerHTML = `
            <app-toolbar>
            </app-toolbar>
            <iframe></iframe>
        `
        shadow.appendChild(div)

        const style = document.createElement('style')
        style.textContent = `
            app-header, app-toolbar {
                background-color: var(--primary-color);
                font-weight: 400;
                color: var(--text-primary-color, white);
            }
            .ha-iframe-panel{    
                position: relative;
                width: 100%;
                overflow: hidden;
                height: 100vh;
                z-index: 0;}
            .ha-iframe-panel iframe{width:100%;height:calc(100vh - 64px);border:none;}

            .ha-iframe-panel.fullscreen app-toolbar{display:none;}
            .ha-iframe-panel.fullscreen iframe{height:100vh;}

        `
        shadow.appendChild(style);

        this.shadow = shadow

        // console.log('%O', this)
    }

    get panel() {
        return this._panel
    }

    set panel(value) {
        this._panel = value

        this.setTitle(value.title)
        this.init(value.config)
    }

    init({ url, fullscreen, blank, hass }) {
        const { shadow } = this

        if (blank) {
            window.open(url)
            history.back()
            return
        }
        if (hass) {
            document.querySelector('home-assistant')._route = {
                prefix: '',
                path: url,
                __queryParams: {}
            }
            return
        }

        let div = shadow.querySelector('div')
        if (div.classList.contains('fullscreen')) {
            if (fullscreen === false) {
                div.classList.remove('fullscreen')
            }
        } else {
            if (fullscreen) {
                div.classList.add('fullscreen')
            }
        }



        let iframe = shadow.querySelector('iframe')
        iframe.src = url
    }

    set narrow(value) {
        let menuButton = this.shadow.querySelector('ha-menu-button')
        menuButton.hass = this.hass
        menuButton.narrow = value
    }

    setTitle(title) {
        let toolbar = this.shadow.querySelector('app-toolbar')
        if (toolbar.children.length === 0) {
            let menuButton = document.createElement('ha-menu-button')
            toolbar.appendChild(menuButton)

            let div = document.createElement('div')
            div.setAttribute('main-title', '')
            div.textContent = title
            toolbar.appendChild(div)
        }
    }
}

customElements.define('ha-iframe-panel', HaIframePanel);