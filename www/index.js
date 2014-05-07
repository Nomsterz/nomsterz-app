(function() {
    "use strict";

    var NomsterzApp = window.NomsterzApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function()
	{
        NomsterzApp.app 	= 	new DevExpress.framework.html.HtmlApplication
								({
									namespace		: 	NomsterzApp,

									navigationType	: 	"slideout",
									navigation		: 	[
															{
																title	:	"Home",
																action	: 	"#home",
																icon	: 	"home"
															},
															{
																title	: 	"About",
																action	: 	"#about",
																icon	: 	"info"
															},
															{
																title	: 	"Points",
																action	: 	"#points",
																icon	: 	"info"
															}
														]
								});
        
        NomsterzApp.app.router.register(":view", { view: "splash" });
        NomsterzApp.app.router.register(":view", { view: "home" });
        NomsterzApp.app.navigate("splash");
    });
    
})();