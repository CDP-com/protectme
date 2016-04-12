//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "protectme";				// This app's name / folder name which must be unique
var apptitle = "Protect Me";				// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/protect-me/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 3;                            // This is the number of buttons on the App Home tab in main.html

//Setup for Button0 (The First Button)
var btn0_Title = "Protect Me";		// This is what is displayed on the button.
var btn0_MouseOver = "Run this button to get the full extent of basic protection by both scheduling automatic snapshots and turning on File History.";	// This is what appears upon mouseover for the button.
var btn0_Description = "<strong>RECOMMENDED</strong>  This button will turn on both Snapshots and File History (depending upon your operating system).  This will help ensure that your data is minimally protected.  With a single click, you'll be good to go.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Why = "Run this button to get the full extent of basic protection by both scheduling automatic snapshots and turning on File History.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "protectmebtn0.js";	// This is the actual script the button will be calling.
var btn0_Source = "protectmebtn0.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname0 ="";

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button





//Setup for Button1 (The Second Button)
var btn1_Title = "Schedule Automatic Snapshots";		// This is what is displayed on the button.
var btn1_MouseOver = "You can run this button if you only want to schedule snapshots without, simultaneously, turning on File History.";	// This is what appears upon mouseover for the button.
var btn1_Description = "This button turns on snapshots for your system, optimized to ensure you can protect as much data without compromising system resources.  A snapshot will be taken once a day at noon.";		// This is what is displayed as the description of the button.
var btn1_Why = "You can run this button if you only want to schedule snapshots without, simultaneously, turning on File History.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "protectmebtn1.js";	// This is the actual script the button will be calling.
var btn1_Source = "protectmebtn1.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button1"; 				// Key value name for the registry
var btn1_DefaultEnableButton=1;
var btn1_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn1_DefaultAllowUser=1;
var btn1_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn1_DefaultCaution=1;
var btn1_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname1 ="";

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn1_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button





//Setup for Button2 (The Third Button)
var btn2_Title = "Turn on File History";		// This is what is displayed on the button.
var btn2_MouseOver = "You can run this button if you only want to turn on File History without, simultaneously, scheduling snapshots.";	// This is what appears upon mouseover for the button.
var btn2_Description = "This button turns on File History, which allows you to continuously protect your personal files stored in Libraries, Desktop, Favorites, and Contacts folders.  Only available on Windows 8 & 10.";		// This is what is displayed as the description of the button.
var btn2_Why = "You can run this button if you only want to turn on File History without, simultaneously, scheduling snapshots.";		// Use this to explain to an end user why they would want to run this button.
var btn2_Command = "protectmebtn2.js";	// This is the actual script the button will be calling.
var btn2_Source = "protectmebtn2.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn2_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn2_id="btn2";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button2 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn2_KeyValue="button2"; 				// Key value name for the registry
var btn2_DefaultEnableButton=1;
var btn2_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn2_DefaultAllowUser=1;
var btn2_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn2_DefaultCaution=1;
var btn2_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname2 ="";

// Service Information for Button2
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn2_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn2_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn2_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button





/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

function CheckProtectionStatus() {
	//try {
		//var Snapshots = "";
		//var FileHistory = "";
		//var s= "<div class='statusdiv'>";
		//if (Snapshots && File History) {
			//s+="You are unprotected.  Snapshots are <strong>ON</strong> & File History is <strong>ON</strong>.";
		//}
		//elseif (Snapshots){
			//s+="WARNING: You are unprotected.  Snapshots are <strong>ON</strong> & File History is <strong>OFF</strong>.";
		//}
		//elseif (FileHistory) {
			//s+="WARNING: You are unprotected.  Snapshots are <strong>OFF</strong> & File History is <strong>ON</strong>.";
		//}
		//else {
			//s+="WARNING: You are unprotected.  Snapshots are <strong>OFF</strong> & File History is <strong>OFF</strong>.";
		//}
		//document.write(s);
	//}
	//catch(e) {
		//var s="<div class='statusdiv'>WARNING: You are unprotected.  Snapshots are <strong>OFF</strong> & File History is <strong>OFF</strong>.</div>";
		//document.write(s);
	//}
	var s="<div class='statusdiv'>WARNING: You are unprotected.  Snapshots are <strong>OFF</strong> & File History is <strong>OFF</strong>.</div>";
	document.write(s);
}




