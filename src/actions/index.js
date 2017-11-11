export function showCards(currCard,prevCard) {
    return {
        type : 'SHOW_CARDS',
        currCard, 
        prevCard                               
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

export function updatePlayerBoard(playerBoard) {
    return {
        type : 'UPDATE_PLAYER_BOARD',
        playerBoard
    }
}

export function determineMatch(currCard,prevCard) {
    return function(dispatch) {
    	if(prevCard.content === currCard.content){
    		dispatch(showCards(currCard,prevCard));
    	}
    	else if(prevCard.content===null){
    		dispatch(updateCardToMatch(currCard));
    	}
    	else{
    		dispatch(showCards(currCard,prevCard));
    		setTimeout(() => {
  				dispatch(hideCards(currCard,prevCard));
				}, 500)
    	}
    }
}
export function createBoard(gridSize,masterSet) {
	return function(dispatch) {	
	var i=0,j=0,playerBoard = {};
	while(i<(gridSize*gridSize)){
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
	var i,j,temp;
	for(i=Object.keys(playerBoard).length-1;i>1;i--)
		{
			j = Math.floor(Math.random()*(i+1));
			temp = playerBoard[j];
			playerBoard[j]=playerBoard[i];
			playerBoard[i] = temp;
		}
	dispatch(updatePlayerBoard(playerBoard));
	}
}