import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions";
import GoogleIcon from "../../assets/googleIcon.png";

class GoogleOAuth extends React.Component {
  constructor(props) {
    super(props);
    this.loginButtonRef = React.createRef();
  }
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "310843219453-5095c545f3dlj071nnd2b6g7kq7p6ahj.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
          //enable login button
          this.loginButtonRef.current.classList.toggle("disabled");
        });
    });
  }

  onAuthChange = isSignedIn => {
    //isSignedIn value given by listen() from google
    if (isSignedIn) {
      //set state in redux store as signedIn: true
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  handleLogin = () => {
    if (this.auth) {
      if (this.props.isSignedIn) {
        this.auth.signOut();
      } else {
        this.auth.signIn();
      }
    }
  };

  render() {
    return (
      <div>
        <button ref={this.loginButtonRef} onClick={this.handleLogin} className="loginButton">
          <img
            style={{ width: "20px", height: "20px", margin: "0 0.5rem", color: "#000" }}
            src={GoogleIcon}
            alt="GoogleLogo"
          />
          {this.props.isSignedIn ? "Sign Out" : "Sign In with Google"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { isSignedIn } }) => ({ isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleOAuth);
