import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import PlayerBoard from "./PlayerBoard";

class GameBoard extends Component {
    render() {
        const boardClass = `${this.props.beginGame?  "cardBoard" : "disabledBoard"}`;//this CSS enables the game board when start button is clicked
            return (
                <div className="container">
                    <div className="row justify-content-md-center"> 
                        <Header/>
                    </div>             
                <div className={boardClass}>
                    <div className="row justify-content-md-center">
                        {
                            <PlayerBoard/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const beginGame = state.beginGame;
    return {beginGame};
}

export default connect(mapStateToProps, null)(GameBoard);