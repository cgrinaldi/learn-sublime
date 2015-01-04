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
// word.
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
// Exercise: Highlight `aFunc` everywhere in the code
// section using `Command + D` and replace it with a better
// function name. Note how there are multiple cursors!

// ##########################################
// Highlighting All Matches -- Command + Ctrl + G
// ##########################################

// Highlighting the next match was fine if you just wanted
// to replace a few names (while making sure you were truly
// selecting the correct ones).
//
// However, you can imagine a time when you would want to
// just do a global find all and replace. Of course you could
// do this using Find and Replace (Shift + Command + F). So
// let's give that a try:
//
// Exercise: Use Find and Replace to your change your function
// name to something else.
//
// I don't know about you, but doing that was sort of a pain.
// You probably had to click tab a couple of times, use the
// mouse button, and even respond to menu prompts. We can do
// much better!
//
// This time, let's try something similar to the previous,
// with the key difference being that we will do the changes
// all at once.

aFunc("Chris");
aFunc("Bob");
aFunc("Sarah");
aFunc("Mia");
aFunc("Chris");
aFunc("Bob");
aFunc("Sarah");
aFunc("Mia");
aFunc("Chris");
aFunc("Bob");
aFunc("Sarah");
aFunc("Mia");

// Exercise: Place your cursor on your function name and press
// Command + Ctrl + G. This will highlight every instance
// of that word, and give you multiple cursors. Change the name
// to something else.
//
// And that is the power of multiple cursors!

// ##########################################
// QUIZ TIME!
// ##########################################

// So the only way to get better at this is to constantly
// practice these commands.
//
// ============================================================
// Exercise: Instead of saying 'Jack' in every line, use multiple
// cursors to change the name for every set of two.
//
// For example, the first two lines will say 'Alice', the next
// two lines will say 'Bob', etc.

// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
// Jack is becoming a Sublime Text master with multiple cursors
//
// ============================================================
// Exercise: Replace all of the below occurrences of
// 'zebra' with 'JavaScript' and 'stupid' with 'you awesome person'.
// You should be able to do this in one go.

// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
// Jack is becoming a zebra master, stupid.
//
// ============================================================
// Exercise: This wasn't covered in the lesson above, but there
// is another way to create multiple cursors. In fact, you may
// have noticed that the other approach was somewhat destructive.
// This will help!
//
// You can perform column selection using `Option + Mouse Drag`.
// Give it a shot by redoing what you did in the previous
// exercise, using this new shortcut.
