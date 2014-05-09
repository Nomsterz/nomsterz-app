(function()
{
    "use strict";

	window.NomsterzApp 		= 	window.NomsterzApp || {};

    var NomsterzApp 		= 	window.NomsterzApp;
	var Environment 		=	NomsterzApp.environment;
	var APP_SETTINGS 		= 	{
									namespace		: NomsterzApp,
									navigationType	: NomsterzApp.config.navigationType,
									navigation		: NomsterzApp.config.navigation
								};

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });



	function isAppUserIDSet()
	{
		consoleLog("fired fx isAppUserIDSet");
		consoleLog("userID = " + window.localStorage.getItem("user-id"));
		return (!window.localStorage.getItem("user-id") ? 0 : window.localStorage.getItem("user-id"));
	}

	function setAppUser()
	{

	}

	function getAppUser()
	{
		return JSON.parse( localStorage.getItem('userObject'));
	}


    function appStartup()
	{
		consoleLog("fired fx appStartup");

		var goToView;

		if(isAppUserIDSet() > 0)
		{
			consoleLog("we have a user-id");
			// attempt to retrieve the user object locally
				// if not successful
					// attempt to call the API and retrieve the user object
						// if can't call note in var
						// if can call but no user by that id
							// create a new user-id and userObject
						// if successful re-populate the user-id and user-object
				// if not successful
					// create a new user-id and userObject

				// if successful verify user object with user-id
			 		// if user-id is incorrect in userObject assume info is corrupt and re-populate user object from API


			 	// if user-id is correct in userObject
					// is user loggedIn - not mandatory
						// if not loggedIn
							// is user & pwd stored locally
								// yes - set loggedIn var - restricted access possible
								// no  - set loggedIn var - access restricted
						// if loggedIn set loggedIn var - access granted

					// is member biz or customer

			if(1)
			{
				goToView = "biz-member-notifications";
			}
			else
			{
				goToView = "customer-member-notifications";
			}
		}
		else
		{
			consoleLog("we do not have a user-id");
			goToView = "create_user";
		}

		// Get Layouts Ready
		doOnOrientationChange();

		consoleLog("Changing Splash Screen Slogan");
        var parentElement 		= 	document.getElementById('isAppReadyDiv');
		var listeningElement 	= 	parentElement.querySelector('.listening');
		var receivedElement 	= 	parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		consoleLog("enabling Splash Screen Slogan button");

		consoleLog("completed fx appStartup");


		consoleLog("navigating to " + goToView);
		NomsterzApp.app.navigate(goToView);
    }



    $(function()
	{
        NomsterzApp.app 	= 	new DevExpress.framework.html.HtmlApplication(APP_SETTINGS);
        
        NomsterzApp.app.router.register(":view", { view: "splash" });
        NomsterzApp.app.router.register(":view", { view: "create-user" });
        NomsterzApp.app.navigate("splash");

		setTimeout(function()
		{
			consoleLog("setTimeout has fired.");
			window.addEventListener('orientationchange', doOnOrientationChange);
			
			if ("cordova" in window)
			{
				consoleLog("cordova is in window");
				consoleLog("bind deviceready event to appStartup");
				window.addEventListener('deviceready', appStartup);
			}
			else
			{
				consoleLog("cordova is not in window");
				$(appStartup);
			}

        }, 2000);
    });
    
})();