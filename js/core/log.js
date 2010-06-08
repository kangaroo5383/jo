/**
	joLog
	=====
	
	Wrapper for `console.log()` (or whatever device-specific logging you have). Also could
	be extended to send log information to a RESTful service as well, handy for devices
	which don't have decent logging abilities.
	
	Use
	---
	
	It's an all-in-one utility that's smart enough to ferret out whatever you throw at it
	and display it in the console.
	
		joLog("x=", x, "listdata=", listdata);
	
	Basically, fill it up with strings, variables, objects, arrays and the function will
	produce a string version of each argument (where appropriate; browser debuggers tend to
	display objects nicely) in the same console line. Simple, effective, easy to use.

	> Note that even for browser development, this is preferable to blindly using
	> `console.log()`, because you're going to get silent errors on FireFox if the user
	> isn't running FireBug, for example.

*/

joLog = function() {
	// whoops, nothing to log; later we might downshift to something else
	if (typeof console === "undefined" || typeof console.log === "undefined" || !console.log)
		return;
		
	var strings = [];
	
	for (var i = 0; i < arguments.length; i++) {
		// TODO: stringify for objects and arrays
		strings.push(arguments[i]);
	}
	
	// spit out our line
	console.log(strings.join(" "));
}
