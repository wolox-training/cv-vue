import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/Board';
import actions from 'redux/game/actions';
import styles from './styles.module.scss';
import { calculateWinner } from 'utils/utils';


class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
  };
  
  handleClick = (i) => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = {...current.squares};
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';

    const newData = {
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.props.xIsNext
    }

    this.props.dispatch(actions.addStep(newData));
  };

  jumpTo(step){
    const newState = {
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    };
    this.props.dispatch(actions.jumpTo(newState));
  }

  movesMapping(history){
    return history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={ () => this.jumpTo(move) } className={styles.gameButton}> {desc} </button>
        </li>
      )
    });
  }
  
  render() {
    
    const { history, stepNumber } = this.props;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) 
      status = 'Winner: ' + winner;
    else 
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');

    console.log('on game')
    return (
      <>
        <div className={styles.game}>
          <div className={styles.gameBoard}>
            <Board 
              squares={current.squares}
              onClick={this.handleClick}
            />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameStatus}>{status}</div>
            <ol>{this.movesMapping(history)}</ol>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ game: { history, stepNumber, xIsNext } }) => ({
  history,
  stepNumber,
  xIsNext
});

export default connect(mapStateToProps)(Game);
