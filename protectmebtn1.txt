// JavaScript Document displaymessage.js


var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "This button will schedule a snapshot to be taken at noon everyday!", 5, "Protect Me App Message 2" );

wsh = null;
