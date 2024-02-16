// preload.js
// https://www.electronjs.org/docs/latest/tutorial/tutorial-preload
const { contextBridge, ipcRenderer } = require('electron')

/* const jester = require('jester-jokes'); */

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
    /* replaceText(`${dependency}-version`, process.versions[dependency]) */
  }
})

// Communicate with priviledged main.
contextBridge.exposeInMainWorld('versions', {
  joke: () => ipcRenderer.invoke('joke')
})
