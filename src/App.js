import React, { Component } from "react";
import Header from "./Components/Common/Header";
import Claims from "./Components/Claims";
import Care from "./Components/Care";
import EMB from "./Components/EMB";
import cardData from './mocks/mockCards.json'
import {filter, orderBy, take, slice, map} from 'lodash';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ response: this.mapResponse(res) })
      })
      .catch(err => console.log(err));
  }
  mapResponse = (res) => {
    
    const claimsData = orderBy(filter(res.tableData, ['rptcatg', 'Claims']), ['count'], ['desc']);
    const top3Claims = take(claimsData, 3);
    const nextClaims = this.mapCardFormat(slice(claimsData, 3));
    const finalClaims = [
      {
        "cardTitle": "Top 3",
        "gridContent": map(top3Claims, 'rptname')
      }, ...nextClaims];
    const careData = orderBy(filter(res.tableData, ['rptcatg', 'Care']), ['count'], ['desc']);
    const top3Care = take(careData, 3);
    const nextCare = this.mapCardFormat(slice(careData, 3));
    const finalCare = [
      {
        "cardTitle": "Top 3",
        "gridContent": map(top3Care, 'rptname')
      }, ...nextCare];

    return {claims: finalClaims, care: finalCare};
  }
  mapCardFormat = (arrToMap) => {
    return map(arrToMap, (item) => {
      return {
        cardTitle: "Report " + item.count,
        gridContent: item.rptname,
        link: item.rpturl
      }
    });
  }
  callApi = async () => {
    const response = await fetch('/getDetails');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    
    return (
      <div className="App">
        <Header />
        <Claims cardContent={this.state.response.claims}/>
        <Care cardContent={this.state.response.care}/>
        <EMB cardContent={cardData.navyblueCard}/>
      </div>
    );
  }
}

export default App;
