import React from 'react';
import { Button, Table } from "react-bootstrap";


const Previous = ({ previousTeams }) => (  
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
    </>
    )

export default Previous;