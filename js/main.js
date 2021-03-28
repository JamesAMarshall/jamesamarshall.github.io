function ToggleNav()
{
	var nav = document.getElementById("mobile-nav-page");

	if(!nav.classList.contains("visible"))
	{
		nav.classList.add("visible");
	}
	else
	{
		nav.classList.remove("visible");			
	}

	console.log("click");
}
