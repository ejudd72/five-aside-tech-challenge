export const submitPlayers = ({ players, subs }) => ({
    type: 'addPlayers',
    players: players,
    subs: subs,
    submitted: true,
})

export const reset = () => ({
    type: "reset"
})
