/**
 * * Created by lee on 2019/1/29
 */

import { store } from './utils';

let options = { theme: 'simple' };
let defualt = `Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
`;

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
    try {
        let diagram = Diagram.parse(v);
        document.getElementById('output').innerHTML = '';
        diagram.drawSVG('output', options);
    } catch(e) {
    }
}
