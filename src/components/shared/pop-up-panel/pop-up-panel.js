import React from "react";
import styles from "./pop-up-panel.module.scss";
import Portfolio from "./../../portfolio/portfolio";
import portfolioData from "../../portfolio/portfolio-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PopUpPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      password: "",
      showValidaitonLabel: false
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      // the click is inside the popup continue what you was doing
      return;
    }

    this.handleClickOutside();
  }
  handleClickOutside() {
    this.props.closePopup();
  }
        
  submit = (e) => {
    e.preventDefault();
    if (this.state.password === "secretpassword") {
      this.setState({showValidaitonLabel: false});
      sessionStorage.setItem("loggedIn", true)
      this.props.passwordAccepted();
      return true;
    } else {
      this.setState({showValidaitonLabel: true});
    }
  }

  updatePassword(e) {
    this.setState({showValidaitonLabel: false});
    this.setState({password: e.target.value});
  }
  
  render() {
    let validationLabel;
    if(this.state.showValidaitonLabel) {
      validationLabel = <div className={styles.validationLabel}>The password is incorrect.</div>
    }
    return (
      <div ref={node => this.node = node} className={styles.popup}>  
        <div className={styles.popupInner}>
          <h2>{this.props.text}</h2>
          <form onSubmit={(e) => this.submit(e) ? this.props.passwordAccepted: null}>
            Password: <input onChange={this.updatePassword.bind(this)} type="password"></input>
            <button className={styles.button} type="submit">Submit</button>
            <button className={styles.button} onClick={this.props.closePopup}>Cancel</button>
            {validationLabel}
          </form> 
        </div>  
      </div>  
    );
  }
}