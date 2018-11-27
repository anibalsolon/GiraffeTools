import React from "react";
import { getCookie, validateEmail } from "../utils";

class SlackInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      emailValid: true,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const token = getCookie("csrftoken");
    const email = this.state.value;
    if (!validateEmail(email)) {
      this.setState({
        emailValid: false
      });
      return;
    } else {
      this.setState({
        emailValid: true
      });
    }
    const body = JSON.stringify({ email });

    const headers = {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    // #TODO: CSRF protection is turned off, because I couldn't get this to work!
    // Fix this!!
    return fetch("/api/send_slack_invite", {
      method: "POST",
      headers,
      credentials: "same-origin",
      body
    })
      .then(response => {
        if (response.status == 200) {
          setState({
            submitted: true
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log("Oops, something went wrong there");
      });

    event.preventDefault();
  }

  render() {
    const { emailValid, submitted } = this.state;

    return (
      <div className="container text-center" id="slack-info">
        <p>
          Would you like to join the GiraffeTools Slack? Fill in your email
          address here, and you'll automatically receive an invitation link in
          your inbox!
        </p>
        <img src="/static/img/separator_red.svg" className="separator-red" />
        <div>
          <label>
            <h3>Email:</h3>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
          <div
            className={
              "alert alert-success alert-dismissible fade" +
              (submitted ? " show" : "")
            }
            role="alert"
          >
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for signing up! Check your email for the Slack invite!
          </div>
          <div
            className={
              "alert alert-danger alert-dismissible fade" +
              (emailValid ? "" : " show")
            }
            role="alert"
          >
            Please enter a valid email address
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SlackInvite;
