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
- Wireframes created https://app.moqups.com/QFuGZSbiHg/view (29/12/2019)

### To-do: 
- Wireframe for UX //
- Set up react and redux //
- Game-start component (form for inputting player names, team names and skill levels) //
- results component (to display players on each team) //
- Extra component: a table displaying previous team splits
- Extra component: ability to pick a team colour and team shirt pattern to create a team icon with

## Planning: 
Wireframes created with 3 separate pages - the user input, app landing page where users enter their player names and potentially their skill levels too, the results page which will display the players split into teams, with decorative football themed background, and a 'previous games' table page which will display for the user previous teams they have played with (this is a stretch goal) 

## Decisions: 
### Sorting:
- I decided to build my app with 2 main users in mind: those playing football casually with friends in a less organised manner who want a quick-start to their game, and those taking a more serious approach who want balanced, fair teams. For this reason, I've given 2 options for sorting your players into teams. A random shuffle will return 2 teams shuffled entirely randomly. For this function, the user does not need to input a skill level for their players and should make use of the *** x-point default score given to them by the app (for a quick start). For a more balanced game, the skill level (a number over between 1-10), should be given to each player. The app will then sort through these players and come up with 2 teams that are as balanced as possible. 

### Inputting names: 
- I decided to allow users their own freedom with inputting names. The sorting in the app will default to creating one team bigger than the other if an odd number of players are entered. If you split the teams fairly, this should still be balanced out. For more casual games, this shouldn't be a problem. If the user wishes to set up a game for more than 10 people, they have the ability to add an extra 2 player fields with the 'add extra players' button. I've decided to make this button add 2 fields so that the default option for the user is an even number: if they have completed the full form they should end up with balanced teams. 

### Validation: 
- I incorporated some validation when submitting the list of player names: if a user submits an odd number of players they are warned that it may result in an unbalanced team with an alert. Similarly if they enter less than 2 players they are prompted to add some players and try again.

### Skill level: 
- I've used a 'range' input to allow the user to add their players' skill. This will default to 5 (the median value) if not altered. This is to allow freedom for the user if they don't know/don't want to input each players' skill levels. If the skill level is input and the user decides to sort teams fairly, this is what will be taken into account. When submitted, the user will then be able to see the total skill level of each team.

### Viewing previous games: 
- You can view previous team splits that have been used by clicking 'view previous teams' in the header, below the main title. You can toggle this page on and off without refreshing your current data in the app. It will display previously given team splits with their team names as well as each team's shirt icon. This could be useful if a user is splitting up multiple games of 5-a-side

### Giving team names:
- I decided to add this function in to make the team splitting a bit more customiseable for the user, and it also helps for recognition of certain games if you are to use the 'view previous games' function I've put in. 
