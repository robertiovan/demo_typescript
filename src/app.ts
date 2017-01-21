/* tslint:disable */

import * as _ from "lodash";
import { CallMe } from "./asyncAwaitPattern";

var array = [1];
var other = _.concat<number>(array, 2, 4, 5, 6);
console.log(other);

let printHTML = (str:string):void => {
    let htmlObj:HTMLElement = document.getElementById("output");
    htmlObj.innerText = str;
}

printHTML("Test page typescript");

//Use async await
let callRobert :CallMe = new CallMe();

(async ()=>{ 
    let phoneNumer:{pn:number} = await callRobert.getPhoneNumer();
    printHTML(phoneNumer.pn.toString());;
})(); 
