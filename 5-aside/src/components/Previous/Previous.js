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
                                { current.team1Name }
                            </td>
                            <td>
                                { current.team2Name }
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