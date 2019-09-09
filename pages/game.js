import React, { useCallback, useState, useRef } from 'react';
import withAuth from '../util/auth';
import Header from '../components/header';
import Rock from '../components/rock';
import Paper from '../components/paper';
import Scissors from '../components/scissors';
import Pending from '../components/pending';
import Fab from '../components/fab';
import Menu from '../components/menu';
import PlayerDetail from '../components/player';

import { useEventListener } from '../util/useEventListener';
import { useOnClickOutside } from '../util/useOnClickOutside';
import { CHOICES, MODES, TYPES, generateNumber, determineWinner } from '../util/helpers';

const playMap = {
  'Rock': Rock,
  'Scissors': Scissors,
  'Paper': Paper
};

const Game = (props) => {

  const { user } = props;

  const [menu, showMenu] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => showMenu(false));

  const [toast, showToast] = useState({ show: false, message: null });
  const [state, setState] = useState({
    player: {
      score: 0,
      played: 'Pending',
    },
    computer: {
      score: 0,
      played: 'Pending',
    },
    games: 0,
    winner: null,
    mode: MODES.start,
    type: TYPES.computer
  });

  const playGame = () => {
    showToast({ show: false, message: null });
    setState((state) => ({
      ...state,
      mode: MODES.playing
    }));
  };

  const playHuman = () => {
    // find something
    showMenu(false)
    setState((state) => ({
      ...state,
      type: TYPES.opponent
    }))
  }

  const playComputer = () => {
    showMenu(false)
    setState((state) => ({
      ...state,
      type: TYPES.computer
    }))
  }

  const makeSelection = (selection) => {
    const computerSelection = CHOICES[generateNumber(0, CHOICES.length)];
    const winner = determineWinner(selection, computerSelection);

    setState((state) => {
      if (state.mode !== 'playing') {
        return {
          ...state
        }
      }

      showToast({ show: true, message: !winner ? 'You Tie' : winner === 'player' ? 'You Win' : 'You Lose' });

      return {
        ...state,
        mode: MODES.done,
        winner: winner || 'tie',
        games: state.games + 1,
        player: {
          ...state.player,
          played: selection,
          score: winner && winner === 'player' ? state.player.score + 1 : state.player.score
        },
        computer: {
          ...state.computer,
          played: computerSelection,
          score: winner && winner === 'computer' ? state.computer.score + 1 : state.computer.score
        }
      }
    })
  }

  const showOptions = () => {
    return (
      <div className="Selections">
        <span className="Selection" onClick={() => makeSelection('Rock')}>
          <Rock size="100" />
        </span>
        <span className="Selection" onClick={() => makeSelection('Paper')}>
          <Paper size="100" />
        </span>
        <span className="Selection" onClick={() => makeSelection('Scissors')}>
          <Scissors size="100" />
        </span>
      </div>
    );
  }

  const getPlayer = () => {
    if (state.mode === 'playing') {
      return showOptions();
    }

    const { played } = state.player;
    const Component = playMap[played] || Pending;

    return <Component size="200" />;
  }

  const getOpponent = () => {
    if (state.mode === 'playing') {
      return <Pending size="200" />
    }

    const { played } = state.computer;
    const Component = playMap[played] || Pending;

    return <Component size="200" />;
  }

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ keyCode }) => {
      // Update coordinates
      switch (keyCode) {
        case 13:
          playGame();
          break;
        case 80:
          makeSelection('Paper');
          break;
        case 82:
          makeSelection('Rock');
          break;
        case 83:
          makeSelection('Scissors');
          break;
      }
    },
    [playGame, makeSelection]
  );


  // Add event listener using our hook
  useEventListener('keyup', handler);

  const toggleMenu = (e) => {
    if (menu) {
      showMenu(false)
    } else {
      showMenu(true)
    }
  }

  const menuFab = () => {
    if (menu) {
      return (
        <svg width="25px" height="25px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="m74.621 66.312l-16.324-16.316 16.312-16.324c1.8828-1.875 1.8828-4.8906 0.007813-6.7734l-1.5156-1.5195c-0.89062-0.91406-2.1094-1.4102-3.3906-1.4102h-0.007813c-1.2812 0-2.4844 0.50391-3.3828 1.4062l-16.32 16.332-16.324-16.312c-1.8711-1.875-4.8828-1.8828-6.7656-0.007812l-1.5195 1.5039c-0.91406 0.89844-1.4141 2.1172-1.4141 3.3945 0 1.2852 0.50391 2.4922 1.4062 3.3945l16.332 16.32-16.316 16.324c-1.8828 1.875-1.8828 4.8906-0.007813 6.7773l1.5156 1.5156c0.89844 0.91406 2.1133 1.4102 3.3945 1.4102 1.2734 0 2.4922-0.50781 3.3906-1.4062l16.316-16.328 16.32 16.309c0.92578 0.93359 2.1562 1.4062 3.3906 1.4062 1.2227 0 2.4453-0.46484 3.3828-1.3984l1.5156-1.5117c0.91797-0.89062 1.4141-2.1094 1.4141-3.3906 0.007812-1.2812-0.49609-2.4922-1.3984-3.3945z" />
        </svg>
      );
    }

    return (
      <svg width="25px" height="25px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="m16 15c-3.3125 0-6 2.6875-6 6s2.6875 6 6 6h68c3.3125 0 6-2.6875 6-6s-2.6875-6-6-6zm0 29c-3.3125 0-6 2.6875-6 6s2.6875 6 6 6h68c3.3125 0 6-2.6875 6-6s-2.6875-6-6-6zm0 29c-3.3125 0-6 2.6875-6 6s2.6875 6 6 6h68c3.3125 0 6-2.6875 6-6s-2.6875-6-6-6z" />
      </svg>
    );
  }

  return (
    <>
      <Header title="Game Time | Two Hands" />
      <div className="Game">
        <Fab v="start" h="start">
          {state.player.score}
        </Fab>
        <div ref={ref}>
          <Fab v="start" h="center" onClick={toggleMenu}>
            {menuFab()}
          </Fab>
          {menu &&
            <Menu
              playHuman={playHuman}
              playComputer={playComputer}
            />
          }
        </div>
        <Fab v="start" h="end">
          {state.computer.score}
        </Fab>
        {state.mode !== MODES.playing &&
          <button className="Button GameButton" onClick={() => playGame()}>
            <div className="Button-inner">
            <span>{state.mode === MODES.done ? 'Play Again' : 'Play'}</span>
            </div>
          </button>
        }
        <div className="Game-side Game-side--primary">
          <PlayerDetail id={user.uid} computer={false} />
          {getPlayer()}
        </div>
        <div className="Game-side Game-side--secondary">
          <PlayerDetail computer={true} />
          {getOpponent()}
        </div>
        <div className={toast && toast.show ? "Toast u-show" : "Toast" }>
          {toast && toast.message &&
            <>
              <p>{toast.message}</p>
              <span onClick={() => showToast({ show: false, message: null })}>&times;</span>
            </>
          }
        </div>
      </div>

      <style jsx>{`
        .Game {
          display: flex;
          height: 100vh;
          position: relative;
          width: 100vw;
        }
        .GameButton {
          background: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          z-index: 1;
        }
        .Game-side {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          position: relative;
          width: 50%;
        }
        .Game-side--primary {
          background: #FFC0CB;
        }
        .Game-side--secondary {
          background: #00FFFF;
        }
        @media (min-width: 320px) and (max-width: 480px) {
          .Game {
            flex-direction: column;
          }
          .Game-side {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default withAuth(Game);
