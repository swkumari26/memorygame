const initialState = {
    masterSet:['1','2','3','4','5','6','7','8','9','0'],
    playerBoard:{},
    timeLeft:300,
    prevCard: {index:null,content:null},
    cardHidden:null,
    gameResult:null,
    boardSize:null
};
const gameBoard = (state = initialState, action) => {

    switch (action.type) {
        case 'SHOW_CARDS' :
           return {
              ...state,
               prevCard:{index:null,content:null},
               cardHidden:state.cardHidden-action.noCardRevealed,
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
                playerBoard:action.playerBoard,
                boardSize:action.boardSize,
                cardHidden:action.boardSize,
                timeLeft:300
           };    
        case 'UPDATE_TIME_LEFT' :
           return {
              ...state,
              timeLeft: state.timeLeft - 1
           };  
        case 'TIMER_START' :
           return {
              ...state,
              timeLeft: 300
           };                               
        case 'RESET_BOARD' :
           return {
              ...state,
                gameResult:action.gameResult
           };                                                 

        default :
            return state;

    }
};

export default gameBoard;