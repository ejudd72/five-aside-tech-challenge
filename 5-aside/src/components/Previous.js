import React from 'react';
import { Button, Table } from "react-bootstrap";


const Previous = ({ previousTeams }) => (  
    
    <div class="container"> 
        { !previousTeams[0] ? "You haven't added any teams this session: please add some players and try again" : (
        <>
            <h2>Previous team splits</h2>
            <Table striped>
                <thead>
                    <th>Team 1</th>
                    <th>Team 2</th>
                </thead>
                <tbody>
                    { previousTeams.map((current, index) => (
                        <>
                        <tr>
                            <td rowspan="2">
                                { index + 1 }
                            </td>
                            <td>
                                { current.team1Name }
                            </td>
                            <td>
                                { current.team2Name }
                            </td>
                        </tr>
                        <tr key={ index }>
                            <td>
                                { current.team1.map((current, index) => (
                                    current.name + ", "
                    )) }
                            </td>
                            <td>
                                { current.team2.map((current, index) => (
                                    current.name + ", "
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