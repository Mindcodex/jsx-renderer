import { JSX, render } from "./jsx-plugin.js";

const vdom = JSX({ nodeName:'button', attributes:{id:'a',}, children: ['saludar'] })
const domElement = render(vdom)
document.body.appendChild(domElement)``