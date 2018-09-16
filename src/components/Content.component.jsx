import React from "react";

export default ({ step }) => {
  return (
    <div>
      <div className="explanation">{step.explanation()}</div>
      {step.url && (
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
};
