import React from "react";

const restOperator = {
  url: "https://codesandbox.io/embed/7yrw596x5x?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=3",
  title: "Rest operator (ES6)",
  explanation: () => (
    <div className="content">
      <h1>Rest operator (ES6)</h1>
      <p>
        ES6 also introduces the <strong>rest operator</strong> represented by the <code>...</code> syntax. 
        It enables:
        <ul>
          <li>when destructuring, to extract remaining elements</li>
          <li>when used as functions arguments, to handle a variable number of function parameters</li>
        </ul>
      </p>
      <h2>Rest for destructuring</h2>
      <p>Let's go back to previous example:</p>
      <pre>
        const badges = ["Boulder", "Cascade", "Thunder", "Rainbow"]
      </pre>
      <p>We want to extract the first badge, the second badge and the rest. For that, we can use the rest operator:</p>
      <pre className="newSyntax">
        const [firstBadge, secondBadge, ...otherBadges] = badges
      </pre>
      <p>By doing this, <code>otherBadges</code> is an array containing the last two badges:</p>
      <pre>
        ["Thunder", "Rainbow"]
      </pre>
      <h2>Rest for function arguments</h2>
      <p>With rest operator, we can also handle functions with variable number of function parameters:</p>
      <pre className="newSyntax">
        function display(...badges) &#123;
        {"\n"} badges.forEach(badge => console.log(badge))
        {"\n"} 
        &#125;
      </pre>
      <p>Inside <code>display</code> function, <code>badges</code> is an array containing all the parameters provided to the function. 
         This function can be called with any number of arguments:</p>
      <pre>
        display("Boulder") {"\n"}
        display("Boulder", "Cascade", "Thunder") {"\n"}
        display() {"\n"}
      </pre>
      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <p>You are given a list of pokemons.</p>
      <ul>
        <li>Use rest operator to extract last three elements of <code>pokemons</code> array into <code>lastThreePokemons</code> array</li>
        <li>Use rest operator and transform <code>sumAttack</code> function into a function that can accept any number of arguments</li>
      </ul>
    </div>
  )
};

export default restOperator;
