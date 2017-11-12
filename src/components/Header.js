import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {startGame,endGame,resetGame} from "../actions/index";

class Header extends Component {
    render() {
        const {beginGame,masterSet,boardSize,gameOver,cardHidden,timeLeft,startGame,endGame,gameResult,resetGame} = this.props;
        var timerInfo = (<div>
                        {
                            (timeLeft>0)&&(cardHidden!==0)?
                            (parseInt(timeLeft/60,10)+':'+timeLeft%60):
                            (gameOver?"0:0":endGame(cardHidden,timeLeft))
                        }
                        </div>);
            return (
                <div className="container">
                    <div className="row justify-content-md-center">
                      <h4>{gameResult}</h4>
                    </div> 
                    <br/><br/>
                    <h5>Select difficulty level, and click start button to begin!</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            Difficulty level : <select onChange={(e)=>{resetGame(e.target.value,masterSet)}}>
                              <option value="36">36 cards</option>
                              <option value="64">64 cards</option>
                              <option value="100">100 cards</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                        {(beginGame)?
                            <button className='btn btn-primary' disabled onClick={()=>{startGame();}}>Start</button>
                            :<button className='btn btn-primary' onClick={()=>{startGame();}}>Start</button>
                        }
                        </div>   
                        <div className="col-md-3">
                            <button className='btn btn-primary' onClick={()=>{resetGame(boardSize,masterSet);}}>Reset</button>
                        </div>    
                        <div className="col-md-3">
                            <h4><strong>Timer: {timerInfo}</strong></h4>                      
                        </div>                                                                                          
                    </div>
                </div>
        );
    }
}


function mapStateToProps(state) {
    const cardHidden = state.cardHidden;
    const gameResult = state.gameResult;
    const timeLeft = state.timeLeft;
    const masterSet = state.masterSet;
    const boardSize = state.boardSize;
    const gameOver = state.gameOver;
    const beginGame = state.beginGame;
    return {beginGame,masterSet,cardHidden,timeLeft,gameResult,gameOver,boardSize};
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({startGame,endGame,resetGame},dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);  
