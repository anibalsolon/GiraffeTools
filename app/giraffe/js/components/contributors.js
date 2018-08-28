import React from "react";

import { shuffle } from "../utils/utils";

const Contributor = contributor => {
  return (
    <li>
      <img className="avatar-image" src={contributor.avatar_url} />
      <br />
      <div id="contributor-tag">
        <a href={contributor.html_url} target="_blank">
          {" "}
          <b>@{contributor.login}</b>
        </a>
      </div>
    </li>
  );
};

class Contributors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: null
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/TimVanMourik/GiraffeTools/contributors")
      .then(response => response.json())
      .then(contributors => this.setState({ contributors }));
  }

  render() {
    const { contributors } = this.state;

    return (
      <div className="container-fluid" id="contributors">
        <div class="container">
          <div class="row">
            <div class="col">
              <h3>All contributors</h3>
              <div className="card mb-12 text-center">
                <ul className="contributor-list">
                  {contributors &&
                    shuffle(contributors).map(contributor => (
                      <Contributor key={contributor.id} {...contributor} />
                    ))}
                </ul>
              </div>
            </div>
            <div class="col">
              Most contributors have contributed to this Open Source project with Gitcoin. If you want to help grow this platform, you can donate or fund projects and issues directly!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contributors;
