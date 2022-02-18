import React, { Component } from "react";
import series from "./data";
import Serie from "./Serie";

class SeriesList extends Component {
  render() {
    return (
      <>
        {series.map((serie) => {
          return <Serie serieData={serie} key={serie.id} />;
        })}
      </>
    );
  }
}

export default SeriesList;
