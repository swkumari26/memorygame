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
}