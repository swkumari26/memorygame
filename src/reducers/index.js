const initialState = {
    masterSet:['1','2','3','4','5','6','7','8','9','0'],
    playerBoard:{},
    timeLeft:null,
    prevCard: {index:null,content:null},
    cardHidden:null,
    gameResult:null,
    boardSize:null,
    gameOver:false,
    beginGame:false
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
               [action.currCard.index]:{content:action.currCard.content,status:'show',clickable:'false'},
               [action.prevCard.index]:{content:action.prevCard.content,status:'show',clickable:'false'},
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
                beginGame:false,
                timeLeft:300,
                gameResult:null
           };    
        case 'UPDATE_TIME_LEFT' :
           return {
              ...state,
              timeLeft: state.timeLeft - 1
           };  
        case 'TIMER_START' :
           return {
              ...state,
              timeLeft: 300,
              beginGame:true
           };                               
        case 'UPDATE_RESULT' :
           return {
              ...state,                                
                gameResult:action.gameResult,
                gameOver:true,
                beginGame:false
           };                                                 

        default :
            return state;

    }
};

export default gameBoard;