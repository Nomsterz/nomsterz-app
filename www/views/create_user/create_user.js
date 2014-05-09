NomsterzApp.create_user 	= 	function (params)
{


	function viewShowing()
	{
		return true;
	}

	function viewRendered()
	{
		return true;
	}

	function viewShown()
	{
        consoleLog( "create_user ready!" );
		doOnOrientationChange();
    }

	function viewHidden()
	{
		return true;
	}

	function viewDisposing()
	{
		return true;
	}

	function viewDisposed()
	{
		return true;
	}

    return 	{

				// Binding Events
				viewShown 		: 	viewShown,
				viewShowing 	: 	viewShowing,
				viewRendered	:	viewRendered,
				viewHidden		:	viewHidden,
				viewDisposing	:	viewDisposing,
				viewDisposed	:	viewDisposed,

				// Binding Properties
				setUserTypeBusiness		:	function()
											{
												alert("I am a business!");
											},
				setUserTypeCustomer		:	function()
											{
												alert("I am a customer!");
											}
			};
};

