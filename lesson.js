// ########################################
// Introduction
// ########################################

// Sublime Text allows you to use multiple cursors at once.
// When I first heard this, I had absolutely no idea why
// anyone would need multiple cursors. I have a hard enough
// time operating just a single cursor!

// Well, there is nothing to fear. Multiple cursors can be
// quite useful. This lesson will give you the runaround
// in using multiple cursors, so enjoy!

// ##########################################
// Highlighting the Next Match -- Command + D
// ##########################################

// One way to create multiple cursors is to make a selection,
// and then to continue selecting multiple matches.
//
// For example, in the following code section, put your cursor on
// `aFunc` and press `Command + D`. This will select the entire
// name.
//
// Now, continue to press `Command + D` and you will see the
// other matches highlight as you continue to press it. Notice
// how it goes in order, starting at where you first make the
// selection and working down, until it gets to EOF, and then it
// will start at the top.

var aFunc = function(name) {
  console.log("Hello, my name is " + name);
};

aFunc("Chris");
aFunc("Bob");
aFunc("Sarah");
aFunc("Mia");

// Using the same code as above, the reason we would want to
// highlight `aFunc` is if all of a sudden we want to change
// it to something else. This is where multiple cursors can
// come in handy.
//
// Exercise: Highlight `aFunc` everywhere using `Command + D`
// and replace it with a better function name. Note how there
// are multiple cursors!
