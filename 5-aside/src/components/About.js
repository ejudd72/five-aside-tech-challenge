import React from 'react';
import { Button, Table } from "react-bootstrap";


const About = () => (  
    
    <div class="container"> 
        <h2>Welcome to the 5-a-side team building app! </h2>
        <p>This is an app built for amateur football groups, schools and those whole play team sports in general.</p>
        <p>This app works by taking all the names of people who will be playing the game (you can submit between 2 and 40 players - you're not limited to just 10!) as well as their skill level (changing this is not compulsory! if you know everyone's skill level it can help to balance the teams fairly). You have the choice of sorting the players randomly or sorting them based on their skill level.</p>
        <p>On choosing your sort option, you'll be taken to a new page with two lists of players in their new teams. It couldn't be much simpler!</p>
        <p>I've added a couple of extra features to this app as well - When submitting your team names, you can add any team names (helpful if you'd like to get creative or if you have any special kit to distinguish your teams by). If you look to the top-right corner you will see a 'previous teams' button. Here you can open a table which displays in a tidy table your previous team splits from this session (this could be handy if you're sorting a lot of players into multiple games all at once).</p>
        <p>I've also added some alerts to make sure that you can only build teams if you've entered at least one player, and to let you know that if you enter an odd number of players then one of your teams will have 1 extra person. Sometimes it helps to be warned!</p>
        <p>Feel free to have a bit of a click around and see how many teams you can build!</p>
        <p>This app was built by Ellie as part of the DevelopMe_ Coding Fellowship September-December 2019. You can find out a bit more about what DevelopMe does <a href="https://developme.training/" target="_blank">here</a> or visit my Github account <a href="https://github.com/ejudd72/" target="_blank">here </a></p>
    </div>
)

export default About;