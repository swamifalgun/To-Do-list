/*jslint node: true */
/*global pal, text */
/*global otpt */
'use strict';
function addTask() {
    var otpt = document.createElement('li'),
        text = document.createTextNode(document.getElementById('text1').value);
    otpt.appendChild(text);
    document.getElementById("addTask").appendChild(otpt);

}
