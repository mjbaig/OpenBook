import {h, render} from 'preact';

let root;

function init(){
    let App = require('./components/app.component').default;
    // root = render(<App />, document.body, root);
    root = render(<App />, document.body, root);
};

if(module.hot){
    module.hot.accept('./components/app.component', () => requestAnimationFrame(init));
};

init();