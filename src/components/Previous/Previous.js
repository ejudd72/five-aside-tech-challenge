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
                    <th>Teams:</th>
                    <th>Team 1</th>
                    <th>Team 2</th>
                </tr>
            
            {/* creates 2x table rows for each previous team */}
            { previousTeams.map((current, index) => (
                <>
                <tr key={ (index+1) * 500 }>
                    <td rowSpan="2">
                        {/* creates team shirt icon for each team if there is shirtChoice data for display on the table */}
                        {/* team 1's shirt choice */}
                        { current.shirtChoice ? 
                            <img 
                                className="team-shirt-table"
                                alt="football jersey icon" style={{ backgroundColor: current.shirtChoice[0].colour, }} 
                                src={ "./jerseys/pattern" + current.shirtChoice[0].pattern + ".svg"} /> 
                        : null } 
                        vs. 
                        {/* team 2's shirt choice */}
                        { current.shirtChoice ? 
                            <img 
                                alt="football jersey icon" 
                                className="team-shirt-table"
                                style={{ 
                                    backgroundColor: current.shirtChoice[1].colour, }} 
                                src={ "./jerseys/pattern" + current.shirtChoice[1].pattern + ".svg"} 
                            /> 
                        : null } 
                    </td>

                    {/* table cells with a background colour the same as their team colour. Team 1 and team 2 */}
                    <td style={{ backgroundColor: current.shirtChoice[0].colour }}>
                        { current.team1Name } 
                    </td>
                    <td style={{ backgroundColor: current.shirtChoice[1].colour }}>
                        { current.team2Name } 
                    </td>
                </tr>

                {/* Finally, table cells that lists each player within each team.  */}
                <tr key={ (index+1) * 600 }>
                    <td> { current.team1.map((current, index) => (
                            <span key={ (index+1) * 300}> { current.name + " " }</span>
                        ))}
                    </td>
                    <td> { current.team2.map((current, index) => (
                            <span key={ (index+1) * 400 } >{ current.name + " "}</span>
                        )) }
                    </td>
                </tr>
                </>
            ))}
            </tbody>
        </Table>
        </> )}
    </div>
    )

export default Previous;