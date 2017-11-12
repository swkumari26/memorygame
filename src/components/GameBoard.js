import React, {Component} from 'react';
import {connect} from 'react-redux';
import GameCard from "./GameCard";
import { bindActionCreators } from 'redux';
import {startGame,endGame,resetGame} from "../actions/index";

class GameBoard extends Component {
    render() {
        const {prevCard,masterSet,boardSize,gameCardArr,cardHidden,timeLeft,startGame,endGame,gameResult,resetGame} = this.props;
        var timerInfo = (<div>
                        {
                            timeLeft>1?
                            (parseInt(timeLeft/60,10)+':'+timeLeft%60):
                            (endGame(cardHidden))
                        }
                        </div>);
            return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                  <h4>{gameResult}</h4>
                </div> 
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        Difficulty level : <select>
                          <option value="Easy">6x6 grid</option>
                          <option value="Medium">8x8 grid</option>
                          <option value="Hard">10x10 grid</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button className='btn btn-primary' onClick={()=>{startGame();}}>Start</button>
                    </div>   
                    <div className="col-md-3">
                        <button className='btn btn-primary' onClick={()=>{resetGame(boardSize,masterSet);}}>Reset</button>
                    </div>    
                    <div className="col-md-3">
                        Timer: {timerInfo}                      
                    </div>                                                                                          
                </div>
                <br/>
                <hr/>
                <div className="row justify-content-md-center">
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
    const cardHidden = state.cardHidden;
    const gameResult = state.gameResult;
    const timeLeft = state.timeLeft;
    const masterSet = state.masterSet;
    const boardSize = state.boardSize;
    return {gameCardArr,prevCard,masterSet,cardHidden,timeLeft,gameResult,boardSize};
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({startGame,endGame,resetGame},dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);  
