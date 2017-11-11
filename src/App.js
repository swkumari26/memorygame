import React, {Component} from 'react';
import GameBoard from './components/GameBoard';
import { bindActionCreators } from 'redux';
import {createBoard} from "./actions/index";
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount(){
      this.props.createBoard(6,this.props.masterSet);
    }	
    render() {
        return (
            <GameBoard/>
        );
    }
}

function mapStateToProps(state) {
    const masterSet = state.masterSet;
    return {masterSet};
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({createBoard},dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App); 