import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidUpdate(prevProps) {
    if (this.props.step !== prevProps.step) {
      this.setState({ show: false });
    } else if (!this.state.show) {
      this.setState({ show: true });
    }
  }

  render() {
    const step = this.props.step;
    const showSandbox = step.url && this.state.show;
    return (
      <div>
        <div className="explanation">{step.explanation()}</div>
        {showSandbox && (
          <iframe
            title="codeSandbox"
            src={step.url}
            style={{
              width: "90%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden"
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        )}
      </div>
    );
  }
}
