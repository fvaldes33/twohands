import React from 'react';
import { auth } from '../util/firebase';

const Menu = ({ playHuman, playComputer, playerStats }) => {

  const data = playerStats ? playerStats.data() : false;

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('good bye');
      })
      .catch((error) => {
        console.log('good bye error', error);
      })
  }

  return (
    <>
      <div className="Menu">
        <h3 className="Subheading">Two Hands | RPS</h3>
        {data &&
          <div className="Stats">
            <div className="Stats-stat">
              <h4>{data.games || 0}</h4>
              <span>Games</span>
            </div>
            <div className="Stats-stat">
              <h4>{data.wins || 0}</h4>
              <span>Wins</span>
            </div>
            <div className="Stats-stat">
              <h4>{data.loses || 0}</h4>
              <span>Loses</span>
            </div>
            <div className="Stats-stat">
              <h4>{data.ties || 0}</h4>
              <span>Ties</span>
            </div>
          </div>
        }
        <ul className="List">
          <li className="List-heading">
            Menu
          </li>
          {/* <li islink={'true'} onClick={() => playHuman()}>
            <div>Find Opponent</div>
          </li>
          <li islink={'true'} onClick={() => playComputer()}>
            <div>Play Computer</div>
          </li> */}
          <li islink={'true'} onClick={() => handleLogout()}>
            <div>Logout</div>
          </li>
        </ul>
        <ul className="List">
          <li className="List-heading">
            Shortcuts
          </li>
          <li>
            <div>
              <span>Press <code>Enter</code> key to start game</span>
            </div>
          </li>
          <li>
            <div>
              <span>Press <code>r</code> to select Rock</span>
            </div>
          </li>
          <li>
            <div>
              <span>Press <code>p</code> to select Rock</span>
            </div>
          </li>
          <li>
            <div>
              <span>Press <code>s</code> to select Scissor</span>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .Stats {
          display: flex;
          padding: 16px 0;
          margin-bottom: 16px;
          border-bottom: 1px solid #eee;
          width: 100%;
        }
        .Stats-stat {
          align-items: center;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
          min-width: 25%;
          text-align: center;
        }
        .Stats-stat span {
          font-size: 0.75rem;
          color: #262626;
          letter-spacing: 1.5px;
          line-height: 1;
          text-transform: uppercase;
        }
        .Menu {
          background: white;
          border-radius: 5px;
          box-shadow: 0 4px 8px -4px rgba(0,0,0,0.5);
          padding: 24px 16px;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          z-index: 999;
        }
        .Menu code {
          background: #eee;
          border-radius: 4px;
          padding: 4px;
        }
        .Menu .Subheading {
          text-align: center;
          margin-bottom: 0;
        }
        .List {
          margin: 0 0 16px;
          padding: 0;
          list-style: none;
        }
        .List-heading {
          color: #262626;
          letter-spacing: 1.5px;
          line-height: 1;
          padding: 0 8px;
          text-transform: uppercase;
        }
        .List li {
          align-items: center;
          display: flex;
          min-height: 44px;
        }
        .List li div {
          padding: 16px 8px;
          pointer-events: none;
        }
        .List li[islink] {
          cursor: pointer;
        }
        .List li[islink]:hover {
          background: #eee;
        }
        @media (min-width: 320px) and (max-width: 480px) {
          width: 90%;
        }
      `}</style>
    </>
  );
}

export default Menu;
