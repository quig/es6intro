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

  changePage = (idPage) => {
    this.setState({ currentId: idPage });
  };

  render() {
    const currentStep = this.getStep();
    const disablePrevious = !this.existPrevious();
    const disableNext = !this.existNext();
    const pageNav = exos.map((element, index) => (
      <button key={index} 
            className="button is-secondary"
            onClick={() => this.changePage(index)}
            disabled={!!(index === this.state.currentId) }>
            {index + 1}
      </button>
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
          <div className="column page-nav">
            {pageNav && pageNav}
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
