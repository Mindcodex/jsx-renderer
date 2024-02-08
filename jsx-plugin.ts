type TagName = keyof HTMLElementTagNameMap
interface Vnode {
   nodeName: TagName
   attributes?: object
   children?: Vnode[] | null | string[]
}

export function JSX (node:Vnode){
    let children = node.children?.length ? node.children : null;
    return {nodeName: node.nodeName , attributes: node.attributes, children}
}
const vdom = JSX({nodeName:'div',attributes:{id:'a'}})

export function render(virtualNode:Vnode | string ){
    if(typeof virtualNode === 'string') return document.createTextNode(virtualNode);
    let node:HTMLElement = document.createElement(virtualNode.nodeName)
    let attributes = virtualNode.attributes ?? {};
    Object.keys(attributes).forEach((k: string,i) => node.setAttribute(k, Object.values(attributes)[i] ));
    (virtualNode.children ?? []).forEach((child: any) => node.appendChild(render(child)))
    return node
}
