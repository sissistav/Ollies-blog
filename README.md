# Ollie's Blog - My Cat's Personal Diary

Welcome to Ollie's Blog! This project allows my cat to create and manage its own blog, documenting its daily adventures and thoughts.

## Getting Started

Before my cat can start sharing its thoughts, make sure you have Node.js installed on your machine.

## Installation

First, navigate to the project directory in your terminal.

Use npm to install the necessary dependencies:

``` npm install ```
 
Starting the Application

To start the application, run:

``` npm start ```

This command runs the app in development mode. Once it's running, you can view it in your browser by opening http://localhost:3000.

## Starting JSON Server

To enable data persistence and API functionality, you need to start the JSON server. After starting the application, open a new terminal window/tab and run the following command:

``` npx json-server@latest --watch data/db.json --port 8000 ```

This command starts the JSON server and watches the db.json file for changes, running on port 8000.

Now my cat is all set to share its adventures on Ollie's Blog!
