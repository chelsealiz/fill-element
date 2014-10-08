fill-element
============

This Plugin targets elements and sizes them to fit the width of the parent element

Demo
=====

http://overstreetce.github.io/fill-element

Downloading
============

To download this repository, you can either clone it to your desktop, or clone it using your terminal.

Using the Plugin
=================

To use this plugin, first add the JQuery version

<script type = "text/javascript" src = "path/jquery.js"></script>

Then add a script for the file itself

<script type = "text/javascript" src = "path/fill.js"></script>

Then finally add the code in a script at the bottom of your HTML file as shown below for every element you want to fill

<script>

$(document).ready(function(){
$("element").fill({margin: value, percentage: value});
});


License
========

MIT License 

Copyright 2014 Chelsea Overstreet

