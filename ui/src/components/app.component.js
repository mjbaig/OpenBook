import {h, Component} from 'preact';
import {Router} from 'preact-router';

import {Test} from './test/test.component';

export default class App extends Component {
    /** This runs when the route moves
     * 
     *  @param {Object} event
     *  @param {string} event.url 
     * 
     */

     handleRoute = e => {
         this.currentUrl = e.url;
     }

     render(){
         return (<div id="app">
                    <div>Hi</div>
                    <Test />
                </div>);
     };

}