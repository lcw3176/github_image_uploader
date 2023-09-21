const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld(
    "api", {  
        request : (channel, data) => {
            console.log(channel, data);
            data.calback();
        }
    }
);


window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
});