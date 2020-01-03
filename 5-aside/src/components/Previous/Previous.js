import React from 'react';
import { Table } from "react-bootstrap";


const Previous = ({ previousTeams, showPrevious }) => (  
   
    !showPrevious ? null : 
    <div className="container"> 
        { !previousTeams[0] ? "You haven't built any teams this session: please add some players and try again" : (
        <>
            <h2>Previous team splits</h2>
            <Table striped>
            <tbody>
                <tr>
                    <th>Game Number</th>
                    <th>Team 1</th>
                    <th>Team 2</th>
                </tr>
                    { previousTeams.map((current, index) => (
                        <>
                        <tr key={ (index+1) * 500 }>
                            <td rowSpan="2">
                                <h3>{ index + 1 }</h3>
                            </td>
                            <td>
                                { current.shirtChoice ? <img alt="football jersey icon" style={{ padding: "2px", backgroundColor: current.shirtChoice[0].colour, width: "20px", border: "1px solid black", borderRadius: "50%"}} 
                                src={ "./jerseys/pattern" + current.shirtChoice[0].pattern + ".svg"} /> : null }
                                { current.team1Name } 
                                
                            </td>
                            <td>
                                { current.team2Name }  
                                { current.shirtChoice ? <img 
                                alt="football jersey icon" 
                                style={{ padding: "2px", backgroundColor: current.shirtChoice[1].colour, width: "20px", border: "1px solid black", borderRadius: "50%"}} 
                                src={ "./jerseys/pattern" + current.shirtChoice[1].pattern + ".svg"} /> : null } 
                            </td>
                        </tr>
                        <tr key={ (index+1) * 600 }>
                            <td>
                                { current.team1.map((current, index) => (
                                    <span key={ (index+1) * 300}> { index === previousTeams.length - 1 ? current.name + ". " : current.name + ", " }</span>
                                ))}
                            </td>
                            <td>
                                { current.team2.map((current, index) => (
                                    <span key={ (index+1) * 400 } >{ index === previousTeams.length - 1 ? current.name + ". " : current.name + ", " }</span>
                                )) }
                            </td>
                        </tr>
                        </>
                    ))}
                </tbody>
            </Table>
            </> )
            }
        </div>
    )

export default Previous;