import React, { useEffect, useState } from 'react'
import router from 'next/router';
import { auth, firebase, db } from '../util/firebase';
import Header from '../components/header';

const Home = () => {
  const [state, setState] = useState({ loading: false, loggedIn: false, error: null });

  useEffect(() => {
    if (auth.currentUser) {
      router.push('/game');
      return;
    }

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('Home -> useEffect -> authUser', authUser);
      } else {
        console.log('no user');
      }
    });
    return unsubscribe();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    setState((state) => ({
      ...state,
      loading: true,
      error: null
    }));

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.signInWithPopup(provider)
      .then(() => {
        setState((state) => ({
          ...state,
          loggedIn: true,
          loading: false
        }));
      })
      .then(() => {
        const authUser = auth.currentUser;
        if (authUser) {
          db.collection('players').doc(authUser.uid).set({
            id: authUser.uid,
            displayName: authUser.displayName,
            email: authUser.email,
            avatar: authUser.photoURL
          }).then(() => {
            router.push('/game');
          })
        }
      })
      .catch(err => {
        setState((state) => ({
          ...state,
          error: err,
          loading: false
        }));
        console.log(err);
      });
  }

  const funnyError = (error) => {
    switch (error.code) {
      case 'auth/popup-closed-by-user':
        return 'Why you close that pop up?!';
      default:
        return 'No clue what you did...';
    }
  }

  return (
    <div>
      <Header title="Two Hands" />
      <div className="Auth">
        <div className="Auth-card">
          <h1 className="Heading">Two Hands</h1>
          <h2 className="Subheading">Just another rock, paper, scissors game</h2>
          <button className={state.loading ? "Button is-loading": "Button"} disabled={state.loading} onClick={(e) => handleSignIn(e)}>
            <div className="Button-inner">
              <img src="//www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg" />
              <span>Sign In using google</span>
            </div>
          </button>
          {state.error &&
            <h4 className="Error">{funnyError(state.error)}</h4>
          }
        </div>
      </div>

      <style jsx>{`
      .Auth {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
      }
      .Auth-card {
        padding: 24px 16px;
        text-align: center;
        width: 600px;
      }
      `}</style>
    </div>
  );
}

export default Home;

{/* <form className="Auth" onSubmit={(e) => submitForm(e)}>
  <div className="Auth-card">
    <div className="FormItem">
      <label className="FormItem-label">Email</label>
      <input className="FormItem-input" value={creds.email} onChange={(e) => setCreds({ ...creds, email: e.target.value })} type="text" />
    </div>
    <div className="FormItem">
      <label className="FormItem-label">Password</label>
      <input className="FormItem-input" value={creds.password} onChange={(e) => setCreds({ ...creds, password: e.target.value })} type="password" />
    </div>
    <button className="Button">
      Login
          </button>
  </div>
</form> */}
