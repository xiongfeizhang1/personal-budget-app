import React from 'react';

class LoginPage extends React.Component{

  componentDidMount(){
    console.log('Loading')

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '978011831013-fha12i2epvdebtk07tmv7cig32ooro4a.apps.googleusercontent.com'
        
      })

      console.log('api inited')

      window.gapi.load('signin2', () => {
        const params = {
          onsuccess: console.log('user finished signing in')
        }
        
        window.gapi.signin2.render('loginButton', params)
      })
    })

  }



  render() {
    return (
      <div>
          <button id= "loginButton">Sign in with Google</button>
      </div>
    );
    
  }
}

export default LoginPage;
