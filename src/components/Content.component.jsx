import React from "react";

export default ({ step = {url:"", explanation: () => (<div>Default</div>)},  }) => {
  return (
    <div>
      <div>{step.explanation()}</div>
      <iframe 
        src={step.url}
        style={{width:'90%', height:'500px', border:'0', borderRadius: '4px', overflow:'hidden'}} 
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/> 
    </div>
  );
};
