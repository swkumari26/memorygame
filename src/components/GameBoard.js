import React, {Component} from 'react';
import {connect} from 'react-redux';
import GameCard from "./GameCard";


class GameBoard extends Component {
    render() {
        const {prevCard} = this.props;
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-12">
                        Difficulty level : <select>
                          <option value="Easy">6x6 grid</option>
                          <option value="Medium">8x8 grid</option>
                          <option value="Hard">10x10 grid</option>
                        </select>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        {
                            this.props.gameCardArr.map((gameCard,index) => {
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
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const gameCardArr = Object.keys(state.playerBoard).map((gameCardIndex) => (
        {
            'index':gameCardIndex,
            'content' : state.playerBoard[gameCardIndex].content,
            'status' : state.playerBoard[gameCardIndex].status,
        }
    ));
    const prevCard = state.prevCard;
    const masterSet = state.masterSet;
    return {gameCardArr,prevCard,masterSet};
}
export default connect(mapStateToProps, null)(GameBoard);  
