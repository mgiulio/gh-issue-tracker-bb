# About

An exercise in web application development, the beginning of a simple GitHub issue tracker with Backbone.js.

A continuation of [todolist](https://github.com/mgiulio/todolist), this project is now stopped because is is evolded into a VanillaJS implementation.

# Features
	
Enter a full GitHub repository name in the text field, such as jashkenas/backbone, wait a moment(activity indicators are not implemented) to get a list of
the latest open and closed issues.
	
It's a read only tool so no edits on issues are implemented, it is only possible to open the relative page on GitHub.
	
Infinite scrolling is used to get further issues when the viewport approaches the bottom of the document.
	
# TechNotes
	
## JavaScript
	
Backbone.js models and views.
	
The template system uses ES6 template strings and arrow functions.

The transpilation to ES5 was done offline with Babel CLI tool.
	
The scroll-watcher component used for the infinite scrolling uses the MutationObserver API if available.

Of course, the GitHub API is used to fetch the repository issues.
