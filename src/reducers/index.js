const initialState = {
    masterSet:['1','2','3','4','5','6','7','8','9','0'],
    playerBoard:{0:{content:1,status:'hide'},1:{content:4,status:'hide'},2:{content:1,status:'hide'},3:{content:4,status:'hide'}},
    prevCard: {index:null,content:null}
};
const gameBoard = (state = initialState, action) => {

    switch (action.type) {
        case 'SHOW_CARDS' :

        case 'UPDATE_CARD_TO_MATCH' :

        case 'HIDE_CARDS' :

        case 'UPDATE_PLAYER_BOARD' :                      

        default :
            return state;

    }
};

export default gameBoard;