import React from "react";

export default class TabelaJanta extends React.Component {
  render() {
    return (
      <div>
        {this.props.arrayJanta.map((row) => (
          <div>
            <div>
              <h4>Principais: </h4>
              {row.principal}
            </div>
            <div>
              <h4>Pães: </h4>
              {row.paes}
            </div>
            <div>
              <h4>Frutas: </h4>
              {row.frutas}
            </div>
            <div>
              <h4>Sucos: </h4>
              {row.sucos}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
