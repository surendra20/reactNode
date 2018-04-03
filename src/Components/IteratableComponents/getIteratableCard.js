import React, { Component } from "react";
import map from "lodash/map";
import isArray from "lodash/isArray";

export default class IteratableCards extends Component {
  displayGrid(content, anchorClass) {
    if (isArray(content.gridContent)) {
      return map(content.gridContent, (gridContent, i) => {
        return (
          <a key={i} className={`tag fill ${anchorClass}`} onClick={(e) => this.props.onEvent(e)} style={{ zIndex: "345945845" }}>
          {gridContent}
          </a>
        );
      });
    }
    return (
      <a className={`tag fill ${anchorClass}`} onClick={(e) => content.link && window.open(`${content.link}`, '_blank')} style={{ zIndex: "345945845" }}>
        {content.gridContent}
      </a>
    );
  }
  getCards() {
    const { cardContent, classNames } = this.props;
    const individualCard = map(cardContent, (item, i) => {
      return (
        <div key={i} className="tile">
          <div className="tile__media">
            <div className="gwos-package">
              <div className={`gwos-card fill ${classNames.cardClass}`}>
                {isArray(item.gridContent) && (
                  <img
                    src="assets/logo_blue_fade.png"
                    className="fade-in logo-position"
                    alt=""
                  />
                )}
                <div className="gwos-card-title">
                  <h4>{item.cardTitle}</h4>
                </div>
                <div className="gwos-card-body fill black">
                  <div className="grid">
                    {this.displayGrid(item, classNames.anchorClass)}
                  </div>
                </div>
              </div>
              <div className="tile__details" />
            </div>
          </div>
        </div>
      );
    });
    return individualCard;
  }
  render() {
    return this.getCards();
  }
}
