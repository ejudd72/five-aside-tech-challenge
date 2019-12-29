# five-aside-tech-challenge
Technical challenge for developMe cohort 14's technical challenge: five-aside team splitting app

## User: To get this project running, download the project and use the following commands:
cd {filepath to where this repo is saved}/5-aside/5-aside
npm install (?)
npm start 

## Project Brief: 
Build a 5 a side team picker: 
Accept names of 10 players, hit a button and it will randomise it into 2 teams of 5. 

### Optional features: 
- solution can support any number of people a side (begin with a form of 10 entries, ability to add/remove number of entries)
- ability to balance teams - splitting strong/weak fairly. 
- ability to view previous teams 


### Progress: 
- Javascript functions created to sort an array of any number of player objects and sort randomly (23/12/2019)
- Javascript functions created to sort an array of any number of player objects and sort into fair teams based on skill level (23/12/2019)

### To-do: 
- Wireframe for UX
- Set up react and redux
- Game-start component (form for inputting player names, team names and skill levels)
- results component (to display players on each team) 

## Decisions: 
- I decided to build my app with 2 main users in mind: those playing football casually with friends in a less organised manner who want a quick-start to their game, and those taking a more serious approach who want balanced, fair teams. For this reason, I've given 2 options for sorting your players into teams. A random shuffle will return 2 teams shuffled entirely randomly. For this function, the user does not need to input a skill level for their players and should make use of the *** x-point default score given to them by the app (for a quick start). For a more balanced game, the skill level (a number over between 1-10), should be given to each player. The app will then sort through these players and come up with 2 teams that are as balanced as possible. 
