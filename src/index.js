import ReactDOM from 'react-dom';
import App from './App';

// const WINS = {
//   rock: 'scissor',
//   scissor: 'paper',
//   paper: 'rock',
// };

// function getResult(left, right) {
//   if (WINS[left] === right) return '승리';
//   else if (left === WINS[right]) return '패배';
//   return '무승부';
// }

// const me = 'rock';
// const other = 'scissor';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);