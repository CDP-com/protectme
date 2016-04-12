// JavaScript Document displaymessage.js


var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "This button will turn on both snapshots and File History!", 5, "Protect Me App Message 1" );

wsh = null;
