var timer = null;
export function showCards(currCard,prevCard,noCardRevealed) {
    return {
        type : 'SHOW_CARDS',
        currCard, 
        prevCard,
        noCardRevealed                               
    }
}

export function updateCardToMatch(currCard) {
    return {
        type : 'UPDATE_CARD_TO_MATCH',
        currCard
    }
}

export function hideCards(currCard,prevCard) {
    return {
        type : 'HIDE_CARDS',
        currCard,
        prevCard
    }
}

export function updatePlayerBoard(playerBoard,boardSize) {
    return {
        type : 'UPDATE_PLAYER_BOARD',
        playerBoard,
        boardSize
    }
}

export function updateTimeLeft() {
    return {
        type : 'UPDATE_TIME_LEFT'
    }
}

export function updateResult(gameResult) {
    return {
        type : 'UPDATE_RESULT',
        gameResult
    }
}

export function startTimer() {
    return {
        type : 'TIMER_START'
    }
}

export function determineMatch(currCard,prevCard) {
    return function(dispatch) {
    	if(prevCard.content === currCard.content){
    		dispatch(showCards(currCard,prevCard,2));
    	}
    	else if(prevCard.content===null){
    		dispatch(updateCardToMatch(currCard));
    	}
    	else{
    		dispatch(showCards(currCard,prevCard,0));
            try{
    		setTimeout(() => {
  				dispatch(hideCards(currCard,prevCard));
				}, 500);
            }
            catch(e){dispatch(updateResult(e.message))}            
        }
    }
}
export function createBoard(boardSize,masterSet) {
	return function(dispatch) {	
	var i=0,j=0,playerBoard = {};
	while(i<(boardSize)){
		if(j===masterSet.length){
			j=0;
		}		
		playerBoard[i++] = {content:masterSet[j],status:'hide'};
		playerBoard[i++] = {content:masterSet[j],status:'hide'};		
		j++;
	}
	console.log(playerBoard);	
	dispatch(shuffleBoard(playerBoard));
	}
}
export function shuffleBoard(playerBoard){
	return function(dispatch) {
	var i,j,temp,boardSize=Object.keys(playerBoard).length;
	for(i=boardSize-1;i>1;i--)
		{
			j = Math.floor(Math.random()*(i+1));
			temp = playerBoard[j];
			playerBoard[j]=playerBoard[i];
			playerBoard[i] = temp;
		}
	dispatch(updatePlayerBoard(playerBoard,boardSize));
	}
}

export function startGame(){
    return function(dispatch) {
        try{   
            clearInterval(timer); 
            timer = setInterval(()=>dispatch(updateTimeLeft()),1000);
        }
        catch(e){dispatch(updateResult(e.message))}
        dispatch(startTimer());
        dispatch(updateTimeLeft());
    }
}

export function endGame(cardHidden,timeLeft){
    return function(dispatch) {
        var resultText = "Congratulations, you won with score:"+timeLeft+"!! please reset to play again!"
        try{
            clearInterval(timer);
        }
        catch(e){dispatch(updateResult(e.message))}            
        if(cardHidden===0)
        dispatch(updateResult(resultText));   
        else
        dispatch(updateResult("Time out, please reset and try again!!"));
    }
}
export function resetGame(gridSize,masterSet){
    return function(dispatch) {
    try{
    clearInterval(timer);
    }
    catch(e){dispatch(updateResult(e.message))}
    dispatch(createBoard(gridSize,masterSet));
    }
}
