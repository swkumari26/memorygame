const initialState = {
    masterSet:['1','2','3','4','5','6','7','8','9','0'],
    playerBoard:{},
    prevCard: {index:null,content:null}
};
const gameBoard = (state = initialState, action) => {

    switch (action.type) {
        case 'SHOW_CARDS' :
           return {
              ...state,
               prevCard:{index:null,content:null},
                playerBoard:{
                ...state.playerBoard,
               [action.currCard.index]:{content:action.currCard.content,status:'show'},
               [action.prevCard.index]:{content:action.prevCard.content,status:'show'},
             }
           };

        case 'UPDATE_CARD_TO_MATCH' :
            return {
              ...state,
              prevCard : {index:action.currCard.index,content:action.currCard.content},
              playerBoard:{
                ...state.playerBoard,
               [action.currCard.index]:{content:action.currCard.content,status:'show'}                             
                }
            };

        case 'HIDE_CARDS' :
           return {
              ...state,
               prevCard:{index:null,content:null},
                playerBoard:{
                ...state.playerBoard,
               [action.currCard.index]:{content:action.currCard.content,status:'hide'},
               [action.prevCard.index]:{content:action.prevCard.content,status:'hide'},
             }
           };  
        case 'UPDATE_PLAYER_BOARD' :
           return {
              ...state,
                playerBoard:action.playerBoard
           };                      

        default :
            return state;

    }
};

export default gameBoard;