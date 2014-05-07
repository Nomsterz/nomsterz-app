NomsterzApp.home 	= 	function (params)
{
	var viewModel 	= 	{
							// Binding Properties
							message		:	ko.observable('Welcome!'),
							name		:	ko.observable(''),
							sayHello	:	function()
											{
												this.message("Hello " + this.name() + "!");
											}
    					};

    return viewModel;
};