import React from 'react';

const About = ({ showAbout }) => (  
    !showAbout ? null : (
    <div class="container about"> 
        <h2>Welcome to the 5-a-side team building app! </h2>
        <p>This is an app built for amateur football groups, schools and those whole play team sports in general.</p>
        <p>This app works by taking all the names of people who will be playing the game (you can submit between 2 and 40 players - you're not limited to just 10!) as well as their skill level (changing this is not compulsory! if you know everyone's skill level it can help to balance the teams fairly). You have the choice of sorting the players randomly or sorting them based on their skill level.</p>
        <p>On choosing your sort option, you'll be taken to a new page with two lists of players in their new teams. It couldn't be much simpler!</p>
        <p>I've added a couple of extra features to this app as well - When submitting your team names, you can add any team names and come colours and styles for a team kit (a bit of fun if you'd like to get creative). If you look to the top-right corner you will see a 'previous teams' button. Here you can open a tidy table which displays your previous team splits (this could be handy if you're sorting a lot of players into multiple games all at once).</p>
        <p>I've also added some alerts to make sure that you can only build teams if you've entered at least two players, and to let you know that if you enter an odd number of players then one of your teams will have 1 extra person. Sometimes it helps to be warned!</p>
        <p>Feel free to have a bit of a click around and see how many teams you can build!</p>
        <p>This app was built by Ellie as part of the DevelopMe_ Coding Fellowship September-December 2019.</p>
    </div>
    )
)

export default About;