# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Frontend Coding Challenge

Build a simple web app that allows a user to select their car from a directory of registered cars.
This data will be provided by the api server in this repo.
The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

# Requirements
Documentation of the project installation
Notes about the main problem the code solution is trying to solve.
JavaScript practices and standards will be evaluated.
The DRY principle to eliminate duplication in logic.
Clear structure of the project.
Adding unit tests if you have enough time.
State management and structure.
Mobile first and desktop-friendly UI.
Build your own styles, don't use any CSS framework like Bootstrap.
The app should work on the latest version of all major browsers.
Build tools for project development and production setup (optional).
User interface design will not be so important for the evaluation.



# How to setup 

1. Clone repo from  https://github.com/shashankrai/fri-day
3. Do cd fri-day  &&  npm i 
4. start client and server together using **npm run dev**
5. open app at  **http://localhost:3000** 
6. For test **npm run test**




# Extra Dependency Added Other than  Create React App

State Management - redux,reduxjs/toolkit
Routing Management - redux,react-router
Virtualizing- react-window


Components for virtualizing big list as it was mentioned data set is could be huge and application need to manage the
large amount of data. 
    - Two options were present - Pagaination or Virtualization.
    - With Pagination extra clicks required to move between pages and design assumptions i.e
    (How many data will show in a page ,Design for Pagination for mobile and bigger screen design could be diffrent) so i prefered the virtulization over pagination.
    - Virtulization famous library react-window (latest version of react-virtual) is used,it manage data very efficenlty in view port 
    - Implemented vertulization  in make,model, Vehicle list assuming in future each list can grow to huge amount of data.


## Features 


# Design
Fluid design for mobile and bigger screens.
No framwork used.
Google font is used.
only static image for vehicles is used to make it better looking design. 

# Select Option**
Select and change selection option for make and model.(drop down avoided to keep in mind  that list can grow huge.)
Search options for make and model and vehicle.(No restriction on Search -special char number all allowed as it   could be as busines descion what all search need to be allowed .(client side filtering)

# Search Optimization
Search optimization using debounce custom function(That could replaced with any popular debounce libraray for more error safe)

# Network Optimization 
Api call optimzation - On selection of make and model api will be fired.(only once api is called for one view) 

# Testing
Unit test case added for most of the components.
type checking using typescript.

# Corner Cases 
- Api is returning 503 error frequently so Try again button given
- Error messages are descriptive to understand application better.


**URL Sharing** 
Url sharining and manipulation is allowed.
Car image is static coudl be replaced with api data in future.


## Extra Features 

# Local Stroge

Added option to save as fav and manage fav list using local storage.
Count of data in make,model,vehicle.
local storage choosen as dont want to  manipulate store data and it will be persitent to suer browser for future refrences.

# SEO && Accesiblity
seo and accesiblity is checked using lighthouse.
<img width="868" alt="Screenshot 2021-10-10 at 11 42 13 PM" src="https://user-images.githubusercontent.com/19204161/136732632-17d54382-11cc-43b8-8854-a3030e9f8334.png">
<img width="349" alt="Screenshot 2021-10-11 at 9 53 20 AM" src="https://user-images.githubusercontent.com/19204161/136733001-4ad5c304-0a19-4245-86bb-fe1723a09cc7.png">
<img width="1792" alt="Screenshot 2021-10-11 at 9 53 11 AM" src="https://user-images.githubusercontent.com/19204161/136733009-fac6b8c4-0e0a-4135-bad5-ae1d95fa5763.png">
<img width="347" alt="Screenshot 2021-10-11 at 9 52 39 AM" src="https://user-images.githubusercontent.com/19204161/136733015-6c09e7bb-e647-4fd2-9bcd-595e939b7436.png">
<img width="1424" alt="Screenshot 2021-10-11 at 9 52 28 AM" src="https://user-images.githubusercontent.com/19204161/136733017-93b945a9-5710-4749-874b-2e5e17a42203.png">
<img width="326" alt="Screenshot 2021-10-11 at 9 51 23 AM" src="https://user-images.githubusercontent.com/19204161/136733022-114d956d-5bd1-476a-85c3-421dd872d518.png">
<img width="1237" alt="Screenshot 2021-10-11 at 9 51 01 AM" src="https://user-images.githubusercontent.com/19204161/136733023-68b175bf-f474-45b4-8b1b-da54b3736d6c.png">
<img width="556" alt="Screenshot 2021-10-11 at 9 50 54 AM" src="https://user-images.githubusercontent.com/19204161/136733024-c7b482a4-1560-4811-9499-afcc961b4082.png">
<img width="336" alt="Screenshot 2021-10-11 at 9 50 34 AM" src="https://user-images.githubusercontent.com/19204161/136733025-40739f98-f950-4fc6-8b1f-dfc9b815dbd4.png">
<img width="1792" alt="Screenshot 2021-10-11 at 9 50 07 AM" src="https://user-images.githubusercontent.com/19204161/136733027-818fa4a1-d100-45e8-99eb-28f82ff9bdc5.png">


 
