import React from 'react';
import router from 'next/router';
import { auth } from './firebase';

const withAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: 'LOADING',
        user: null
      }
    }

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        console.log('withAuth -> componentDidMount', authUser);
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN',
            user: authUser
          });
          router.push('/game');
        } else {
          router.push('/');
        }
      });
    }

    renderContent() {
      const { user, status } = this.state;
      if (status == 'LOADING') {
        return <h1>Loading ......</h1>;
      } else if (status == 'SIGNED_IN') {
        const props = {
          ...this.props,
          user
        };
        return <Component { ...props } />
      }
    }

    render() {
      return (
        <>
          {this.renderContent()}
        </>
      );
    }
  }
}

export default withAuth;
