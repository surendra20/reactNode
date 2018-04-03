import React, { Component } from "react";
import IteratableCards from "./IteratableComponents/getIteratableCard";
import cx from "classnames";

export default class Care extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      detailsTitle: "",
      showFullScreen: false,
      fullScreenHeight: "400px"
    };
    this.openDetails = this.openDetails.bind(this);
  }
  componentDidUpdate() {
    try {
      // this.detailContainer.style.display = "table";
    } catch (error) {
      console.log(error);
    }
  }
  closeDetails() {
    try {
      this.detailContainer.style.display = "none";
      this.setState({
        showDetails: false
      });
    } catch (error) {
      console.log(error);
    }
  }
  openFullScreen() {
    this.setState({
      showFullScreen: !this.state.showFullScreen
    });
    try {
      this.setState({
        fullScreenHeight: !this.state.showFullScreen ? "100vh" : "400px"
      });
    } catch (error) {
      console.log(error);
    }
  }
  openDetails(e) {
    this.setState({
      showDetails: true,
      detailsTitle: e.target.text,
    });
  }
  renderDetails() {
    try {
      this.detailContainer.style.display = "table";
    } catch (error) {
      console.log(error);
    }
    const { fullScreenHeight } = this.state;
    return (
      <div
        ref={el => {
          this.detailContainer = el;
        }}
        className=" fade-in"
        id="surprise"
        style={{ display: "none" }}
      >
        <div className="gwos-package">
          <div
            className="gwos-board "
            ref={el => {
              this.containerDetailsScreen = el;
            }}
          >
            <div className="gwos-board-title fill gw-blue-dark">
              <h4>
                {this.state.detailsTitle}
                <small>&#8212; subtitle</small>
              </h4>
              <ul className="menu controls">
                <li>
                  <a
                    className="button fill gw-blue-dark float-right"
                    onClick={e => this.closeDetails()}
                  >
                    X
                    <i className="fa fa-close fa-2x" />
                  </a>
                  <a
                    className="button fill gw-green-dark float-right"
                    onClick={e => this.openFullScreen()}
                  >
                    {this.state.showFullScreen ? "--" : "[]"}
                    <i className="fa fa-close fa-2x" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="gwos-card-body"> </div>
            <div
              style={{
                display: "block",
                height: `${fullScreenHeight}`,
                width: "100%",
                background: "#fff",
                borderTop: "#ccc 1px solid",
                padding: "1rem"
              }}
            >
              report date will appear here
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const classNames = {
      cardClass: "gw-blue-dark",
      anchorClass: "gw-blue"
    };
    const classFullScreen = cx("small-24 medium-24 large-24 x-large-24 row", {
      "gwos-max-screen": this.state.showFullScreen
    });
    const props = { ...this.props, classNames };
    return (
      <div className="App">
        <div className="row expanded">
          <div className={`${classFullScreen}`}>
            {this.state.showDetails && this.renderDetails()}
          </div>
          <div className="small-24 medum-24 large-24 x-large-24 ">
            <h5 className="white" style={{ paddingLeft: "25" }}>
              Care
            </h5>
            <div className="contain">
              <div className="row">
                <div className="row__inner">
                  <div className="tile" style={{ marginLeft: "-220px" }}>
                    <div className="tile__media" />
                  </div>
                  <IteratableCards {...props} onEvent={this.openDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
