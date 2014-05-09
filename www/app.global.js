function consoleLog(msg)
	{
		console.log((window.NomsterzApp.environment == "development" ?	"Nomsterz! Log: " : "") + msg);
	}

function doOnOrientationChange()
	{
		consoleLog("fired fx doOnOrientationChange");

		var portraitLayouts 		= 	$(".contentPortrait");
		var landscapeLayouts 		= 	$(".contentLandscape");
		consoleLog("window orientation is " + window.orientation);
		consoleLog("hiding both layouts ");
		portraitLayouts.css("display", "none");
		landscapeLayouts.css("display", "none");

		switch(window.orientation)
		{
			case -90	:
			case 90		:	landscapeLayouts.css("display", "");
							break;

			default		: 	portraitLayouts.css("display", "");
							break;
		}
	}
