import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {determineMatch} from "../actions/index";

class GameCard extends Component {

    render() {

        const {prevCard,gameCard,determineMatch} = this.props;
        const cardClass = `${gameCard.status === 'show' ?  "showCard" : "hideCard"}`;
        return (
            <div className={cardClass}
                onClick={gameCard.status === 'show'?"":
                        () => {
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
