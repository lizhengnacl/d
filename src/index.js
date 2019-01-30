/**
 * * Created by lee on 2019/1/29
 */

import { store } from './utils';

let defualt = `
sequenceDiagram
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
`;

mermaid.initialize({
    theme: 'forest', // dark default forest neutral
    startOnLoad: false
})

let input = document.getElementById('textarea');
input.addEventListener('keyup', onChange);

let v = store.read() || defualt;
input.value = v;
draw(v);

function onChange () {
    let v = input.value;
    store.write(v);
    draw(input.value);
}

function draw (v) {
    let pre = document.getElementsByClassName('mermaid')[0];
    pre.innerHTML = v;
    mermaid.render('svgid', v, function(svg) {
        pre.innerHTML = svg;
    })
}
