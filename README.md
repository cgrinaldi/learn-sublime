# Learn and Practice Sublime Text 3 Shortcuts

## Introduction
This project is about learning how to most effectively use **Sublime Text 3 (ST3)**. While there are awesome references on-line, many of them don't provide the space needed to actually practice, and internalize, the key shortcuts.

Hopefully this project will give you just that, a way to practice using ST3 shortcuts that will make you wicked fast while coding!

## Format
The format of this project is to use different git branches for different lessons. This way, it will be easy for anyone to add their own lessons.

Please feel free to fork this repo and create your own lessons (or edit already existing ones). If you do decide to add your own lesson, please follow these steps to ensure each lesson's history is independent of all other lessons:

0. Fork the project
1. Create an empty branch: `git checkout --orphan LESSON-NAME`
2. Delete all files in the working directory: `git rm -rf .`
3. Create your lesson
4. Submit a Pull Request

I think together we will be able to make a collection of lessons that will help us get better at ST3.

## Next Steps
To see which lessons are available, type `git branch -r` in your local repo to see which ones are available on Github. Then, use `git checkout <LESSON-NAME>` to work through a particular lesson.

If at any point you wish to reset your work, simply save the file and then use `git checkout .` and you will be returned to the original state of the lesson.

Below is a list of the current lessons identified by branch names, along with a short description.

## Lessons

* [(summary)](https://github.com/cgrinaldi/learn-sublime/tree/summary): A listing of ST3 shortcuts and a description of what they do.
* [(multiple-cursors)](https://github.com/cgrinaldi/learn-sublime/tree/multiple-cursors): A lesson on how to use ST3's multiple cursors.
* [(goto-anything)](https://github.com/cgrinaldi/learn-sublime/tree/goto-anything): A lesson on using ST3's _Goto Anything_ to quickly navigate a project.

## Additional Resources
The below resources were referenced when making the above lessons:

*  [Perfect Workflow in Sublime Text 2](https://code.tutsplus.com/courses/perfect-workflow-in-sublime-text-2/)
