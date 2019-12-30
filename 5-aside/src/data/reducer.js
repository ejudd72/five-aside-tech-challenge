import initial from "./initial";

const reducer = (state, action) => {

    // const reset = ({ defaultLang, player1Name, loaded, player2Name, previous }) => ({
    //     ...initial, 
    //     loaded,
    //     defaultLang,
    //     gameStarted: false,
    //     player1Name,
    //     player2Name,
    //     previous,
    //     gameId: 0
    // })
 
   switch (action.type) {
    // case "addPlayers": return players(state, action);
    // case "reset": return reset(state);
   
    default: return state;
 } };

 export default reducer;