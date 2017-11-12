import React, {Component} from 'react';
import {connect} from 'react-redux';
import GameCard from "./GameCard";

class PlayerBoard extends Component {
    render() {
        const {prevCard,gameCardArr} = this.props;
            return (
                <div className="row justify-content-md-center">
                    {
                    <div className="col-md-8">
                        {
                        gameCardArr.map((gameCard,index) => {
                            return(
                                <GameCard
                                    key={index}
                                    gameCard={gameCard}
                                    prevCard={prevCard}
                                />
                            );
                        })
                        }
                    </div>
                    }
                </div>
            );
        }
    }


function mapStateToProps(state) {
    const prevCard = state.prevCard;
    const gameCardArr = Object.keys(state.playerBoard).map((gameCardIndex) => (
        {
            'index':gameCardIndex,
            'content' : state.playerBoard[gameCardIndex].content,
            'status' : state.playerBoard[gameCardIndex].status,
        }
    ));
    return {gameCardArr,prevCard};
}

export default connect(mapStateToProps, null)(PlayerBoard);  
