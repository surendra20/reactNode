import React, { Component } from "react";
import moment from "moment";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isShown: "is-hidden"
    };
  }
  _toggleFunc = e => {
    if (e.type === "mouseover") {
      this.setState({
        isShown: "is-shown"
      });
    } else if (e.type === "mouseout") {
      this.setState({
        isShown: "is-hidden"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className={"gwos-header fill black"}>
          <div className={"brand-box fill black"}>
            <a onClick={() => window.location.reload()}>
              <img src={require("../../logo.png")} alt="Logo" />
              <span className={"white"}>
                Enterprise <strong>Reporting</strong>
              </span>
            </a>
          </div>

          <div className={"controls"}>
            <ul className={"menu dropdown"} />

            <ul
              className={"menu tool-bar dropdown right"}
              onMouseOver={e => this._toggleFunc(e)}
              onMouseOut={e => this._toggleFunc(e)}
            >
              <li>
                <a href="#" className="button round">
                  <i className="fa fa-th" />
                </a>
              </li>

              <li style={{ position: "relative" }}>
                <a href={"#"} className={"button round user-data"}>
                  <span className="avatar">
                    <img src="./assets/user.png" alt="Profile pic" />
                  </span>
                  Sachin Moharil
                </a>
                <ul className={`menu header-sub-menu ${this.state.isShown}`}>
                  <li className="header-user-menu">
                    <a href={"#"}>
                      <i className={"fa fa-cogs"} /> Account Settings
                    </a>
                  </li>
                  <li className="header-user-menu">
                    <a href={"#"}>
                      <i className={"fa fa-comments"} /> Feedback
                    </a>
                  </li>
                  <li className="header-user-menu">
                    <a href={"#"}>
                      <i className={"fa fa-question-circle"} /> Help Center
                      &amp; F.A.Q
                    </a>
                  </li>
                  <li className="header-user-menu">
                    <a href={"#"}>
                      <i className={"fa fa-power-off"} /> Sign Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={"gwos-sub-header fill black marqueetainer"}
          style={{ borderTop: "1px #333 solid", overflow: "hidden" }}
        >
          <div className={"marquee"}>
            <p>
              <i className="fa fa-cog fa-spin" /> REMIDER! Reports need to BE
              DELIVERED TODAY {moment().format(`MM/DD/YYYY`)}
            </p>
            <p className="gw-yellow">
              Remember to label and reports accurately…{" "}
            </p>
            <p>
              Be <b>SURE</b> your <b>DATA</b> <i className="fa fa-table" /> is{" "}
              <b>COMPLETE</b> <i>before</i> exporting!{" "}
            </p>
          </div>
        </div>
        <div className="gwos-body">
          <div className="row">
            <div className="small-24">&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}
