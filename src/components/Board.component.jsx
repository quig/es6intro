import React from "react";
import Content from "./Content.component";
import exos from "../exercises/Exercises.component";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      step: undefined
    };
  }

  getStep = () => exos[this.state.currentId];

  existPrevious = () => !!(exos.length > 0 && this.state.currentId > 0);
  existNext = () =>
    !!(exos.length > 0 && this.state.currentId < exos.length - 1);

  next = () => {
    if (this.existNext()) {
      this.setState({ currentId: this.state.currentId + 1 });
    }
  };

  previous = () => {
    if (this.existPrevious()) {
      this.setState({ currentId: this.state.currentId - 1 });
    }
  };

  handleSelectChange = event => {
    const idPage = event.target.value;
    this.setState({ currentId: Number(idPage) });
  };

  render() {
    const currentStep = this.getStep();
    const disablePrevious = !this.existPrevious();
    const disableNext = !this.existNext();
    const listSelect = exos.map((element, index) => (
      <option key={element.title} value={index}>
        {index} - {element.title}
      </option>
    ));

    return (
      <div className="navigation">
        <div className="columns is-centered">
          <div className="column">
            <button
              className="button is-primary"
              onClick={this.previous}
              disabled={disablePrevious}
            >
              Previous
            </button>
          </div>

          <div className="column">
            <div className="select">
              <select
                value={this.state.currentId}
                onChange={this.handleSelectChange}
              >
                {listSelect}
              </select>
            </div>
          </div>

          <div className="column">
            <button
              className="button is-primary"
              onClick={this.next}
              disabled={disableNext}
            >
              Next
            </button>
          </div>
        </div>
        {currentStep && <Content step={currentStep} />}
      </div>
    );
  }
}
