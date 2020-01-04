import { connect } from 'react-redux'
import StartForm from './StartForm'
import { submitPlayers } from '../../data/actions'

const mapStateToProps = ({
    players,
    teamNames,
    submitted,
    randomSort,
    showPrevious,
    showAbout,
    team1,
    team2,
    previousTeams,
}) => {
  return {
    players,
    teamNames,
    submitted,
    randomSort,
    showPrevious,
    showAbout,
    team1,
    team2,
    previousTeams,
  }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddField: () => dispatch({ type: 'addFields' }),
        handleRemoveField: () => dispatch({ type: 'removeFields' }),
        handleSave: formResults => dispatch(submitPlayers(formResults)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartForm)
