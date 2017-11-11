import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {determineMatch} from "../actions/index";

class GameCard extends Component {

    render() {

        const {prevCard,gameCard,determineMatch} = this.props;

        return (
            <div className="divCard" onClick={() => {
                            determineMatch(gameCard,prevCard);
                        }}>
                {gameCard.status === 'show'?gameCard.content:""}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({determineMatch},dispatch)
    };
}

export default connect(null, mapDispatchToProps)(GameCard);
