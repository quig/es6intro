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

  render() {
    const currentStep = this.getStep();
    const disablePrevious = !this.existPrevious();
    const disableNext = !this.existNext();

    return (
      <div className="navigation">
        <div className="columns is-centered">
          <div className="column">
            <button
              className="button is-primary"
              onClick={this.previous}
              disabled={disablePrevious}
            >
              Précedent
            </button>
          </div>
          <div className="column">{this.state.currentId + 1}</div>
          <div className="column">
            <button
              className="button is-primary"
              onClick={this.next}
              disabled={disableNext}
            >
              Suivant
            </button>
          </div>
        </div>
        {currentStep && <Content step={currentStep} />}
      </div>
    );
  }
}
