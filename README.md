# Welcome to Stagramstagram

![BullRat Logo](/resources/images//Logo.jpg)

## WTF
Hi, hello, my name is Ntsikayomzi Phenyo Ngcakani. To those who actually bother to read the readme. Please feel free to follow me on this journey as I try to take a detailed look, into
servers, design and structure of what is basically a instagram clone. I'll be creating a web-version so this is an ameteur fullstack instagram program. Those intrested in the frontend will find html, css, and Javascript files in the file marked [docs](https://github.com/TsikaBullRat/Stagramstagram/tree/main/docs).
To those interest in looking at the nodejs server side script, please don't judge me too much. However if it is your first time trying node please follow these steps:

-   Download amd install node
-   Open cmd or terminal via Node.js
-   Change directory to where you project is located
-   Run "npm i" (just incase)
-   Run "node index.js"

And thats it you should have a functioning app running. You can find the site running on localhost:4444

## Structure
What we'll be working with is a node server, a website and a MongoDB database.


# Nodejs

## The low down
Node.js is basically a server side scripting tool. Not overestimating mine own knowledge, that is my basic grasp of what it is. So node helps you run commands/protocols on a server. Implying server-side scripting is 
just code to run the servers. The process of getting nodejs is as simple as going to ther website. Need a download link [click me](https://nodejs.org/en/download). 

Another thing people use node.js for. Firstly understand that though the intention was to write code for a
server it unintentionally gave javascript the ability to work as a regular [OOP](https://techterms.com/definition/oop). So people are now able to build different modules using Nodejs. Programmers usually build modules and put them together to build a programme with a specific function. Majority of people send this programme to a seperate programme called a package management system. The one related to node is called [npm](https://www.npmjs.com/). This allows people to use other peoples pre-built programmes by simply installing the package into you're own. Which brings us to the first Node.js concept.

## package.json
This is a file that basically holds information about the entire project. It also allows for basic functionallity. For example if there are bash/shell scripts require package.json will have this information.
This is written in [json](https://www.w3schools.com/js/js_json_intro.asp). The first 2 fields we require is 
name and version. For now this is all we'll add on our package.json file.

## Node and Modules
Node allows you to use different [modules](https://www.w3schools.com/nodejs/nodejs_modules.asp) to do different things let's have a look at some of the module in our project.

### - index.js
Here we will add simple code to run our entire project. Consider this the starting point of our program.
### - engine.js
Next we'll have engine.js to run the entire project all logic required etc.
### - http.js
This module will run our website
### - ftp.js 
Here we will run our file transfers etc
### - data.js
This will be used for our data base manipulation
### - index.ts
Here we will play with some typescript to create a way to clean the project(We will go into detail later)


# Notes:
Server built and functional
