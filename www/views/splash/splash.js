NomsterzApp.splash 	= 	function (params)
{
	var appMember	=	{
							name 	:	"Chukky"
						};

	var viewModel 	= 	{
							// Binding Properties
							slogan		:	ko.observable('Preparing Your Dealz...'),
							onReceived	:	function()
											{
												this.slogan("Your Dealz are Ready" + appMember.name + "!");
											}
    					};

    return viewModel;
};
