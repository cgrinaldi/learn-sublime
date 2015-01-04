# Lesson: Goto Anything

## Introduction

As you develop a project, you will undoubtedly create many different files throughout a hierarchy of folders. As the project grows, it can become a pain to find and open a particular file, just to make a small edit.

This lesson will be about learning how you can quickly navigate your project's file structure efficiently in ST3.

## Steps

### Step 0: Open the Directory (optional)

If you haven't already done so, make sure that you open the learn-sublime folder in ST3, using the following steps:

File > Open... > learn-sublime

### Step 1: Explore Your Project's Structure

The first step is to become familiar with the file structure. At this point, we are going to use a simple key combination to toggle the sidebar.

To do so, use `Command + K, Command + B`. If the sidebar was not already present, it will appear. Make sure your sidebar is open.

As you can see, our current project has a number of files, some of which are nested in directories. Take a moment open expand all of the directories to see which files are where.

### Step 2: Open the Individual Files

Using either Finder or your sidebar, open each of the different files.

Notice how long it takes, and the fact you have to constantly switch between the mouse and the keyboard. No good!

Before we begin with the meat of the lesson, exit out of all of the tabs except this one.

A good shortcut to use to quickly close a tab is `Command + W`. If you have made any changes, a prompt will pop up asking if you want to save the changes. Instead of using the mouse, you can use either `ESC`, `Command + D`, or `ENTER` to cancel, discard, or save, respectively.

### Step 3: Use Goto Anything for Quick Navigation

Now the fun part! We've just seen that it can take a while to navigate the file structure using the mouse, so let's try some ST3 shortcuts!

In ST3, you can _Goto Anything_ using the key combo: `Command + P`.

Type the above shortcut and you will see a menu appear. This menu will list all of the files that are currently in your directory. You can imagine how, as your project grows, this can become quite a long list!

**Exercise**: To gain some practice, open all of the files by pressing `Command + P`, typing the name of the file you want to open, and pressing enter.

**Exercise**: With the files open, quickly navigate between the different tabs using _Goto Anything_.

### Step 4: Experiment with Fuzzy Matching

When typing in the _Goto Anything_ input box, it is actually using fuzzy matching to search for the files. What that means is that it doesn't really care what order you put the characters in. It ranks each file's path to how similar it is to your input.

What this means is that you can also search for specific directories, in case you don't quite remember the file name you are looking for.

**Exercise**: Type "js" in the _Goto Anything_ input box. You should see only the files within the "js" directory appear.

**Exercise**: Type "jsa" in the _Goto Anything_ input box. Notice how it goes right to the a.js file. Type "csj" and see that order really doesn't matter!

### Step 5: Navigate to Particular Functions

In whatever file you are in, you can quickly see what "functions" are present (NOTE: functions might not be the best word, as you will see in a moment...).

To do so, in this file, use _Goto Anything_, and type as the first symbol the "@" character. Like magic, you quickly see at a high-level what the major segments of the file are.

Since we are currently in a markdown file, it is showing the different header levels, as indicated by '#','##','###'. Pretty cool!

**Exercise**: Navigate to code.js and then use '@' to see what functions are present in that file.

**Exercise**: Without leaving this file (lesson.md), use _Goto Anything_ and type the following: `code@h` and ENTER. Magic!

### Step 6: Navigate to a Particular Line

Similar to the previous step, we can also navigate to a particular line in a file using _Goto Anything_ and ":".

In this file, in the _Goto Anything_ prompt, type ":10" and ENTER, and it will bring you to the 10th line.

**Exercise**: Navigate to the 95th line in code.js.

## Quiz Time!

Since the only way to truly learn these keyboard commands is practice, practice, practice, here are some questions to test your skills with _Goto Anything_ and the other shortcuts introduced in this lesson.

To begin, make sure this is the only file open (and remember to use the `Command + W` shortcut to close tabs!)

### Problem 1

Quickly navigate through each of the section titles above using _Goto Anything_.

### Problem 2

Navigate to the first instance of button in styles.css using _Goto Anything_. You should only have to open the _Goto Anything_ prompt once.

### Problem 3

Switch between the following files, without pressing enter. README, styles.css, index.html. Finally, open code.js.

### Problem 4

Using _Goto Anything_, first navigate to styles.css. Then, skip every 20 lines using _Goto Anything_, pressing enter after each time. (NOTE: Only do this for as long as you want, it is a long file!).



