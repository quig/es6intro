import React from 'react'

const controlFlowIfElse = {
  url:
    'https://codesandbox.io/embed/7w42om5z81?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=9',
  title: 'Control flow - if, else',
  explanation: () => (
    <div className="content">
      <h1>Control flow</h1>
      <p>
        When your program contains more than one statement, the statements are
        executed as if they are a story, from top to botom.
      </p>
      <pre>
        let number = 2;
        {'\n'}
        let square = number * number;
        {'\n'}
        console.log(square); //4
      </pre>
      <p>
        However, you may want to change the code depending on the situation. For
        this, you can use what is called a conditional statement. Conditional
        execution is created with the <strong>if</strong> keyword in JavaScript.
        In the simple case, we want some code to be executed if, and only if, a
        certain condition holds. We might, for example, want to show the square
        of the input only if the input is positive.
      </p>
      <pre>
        let number = 2;
        {'\n'}
        if(number &#62; 0) &#123;
        {'\n'} let square = number * number;
        {'\n'} console.log(square); //4
        {'\n'}
        &#125;
      </pre>
      <p>
        If you change number by a string like "dog", nothing will be displayed.
      </p>
      <p>
        The statement after the if is wrapped in braces <strong>&#123;</strong>{' '}
        and <strong>&#125;</strong> in this example. The braces can be used to
        group any number of statements into a single statement, called a block.
        You could also have omitted them if the block contained a single
        statement, but to avoid having to think about whether they are needed,
        most JavaScript programmers use them in every wrapped statement like
        this.
      </p>
      <p>
        You often won’t just have code that executes when a condition holds
        true, but also code that handles the other case. This alternate path is
        represented by the second arrow in the diagram. You can use the{' '}
        <strong>else</strong> keyword, together with <strong>if</strong>, to
        create two separate, alternative execution paths.
      </p>
      <pre>
        let number = "dog";
        {'\n'}
        if(!Number.isNaN(number)) &#123;
        {'\n'} let square = number * number;
        {'\n'} console.log(square);
        {'\n'}
        &#125;else&#123;
        {'\n'} console.log("Ce n'est pas un nombre"); //Ce n'est pas un nombre
        {'\n'}
        &#125;
      </pre>
      <p>
        If you have more than two paths to choose from, you can “chain” multiple
        if/else pairs together. Here’s an example:
      </p>
      <pre>
        let number = 0;
        {'\n'}
        if(number &#60; 0) &#123;
        {'\n'} console.log("Number is negative");
        {'\n'}
        &#125;else if(number &#62; 0)&#123;
        {'\n'} console.log("Number is positive");
        {'\n'}
        &#125;else&#123;
        {'\n'} console.log("Number is 0"); //Number is 0{'\n'}
        &#125;
      </pre>
      <p>
        Another way to write simple conditional statement is the use of ternary
        condition. Written as follow <strong>condition ? expr1 : expr2</strong>{' '}
        {'\n'}
        If condition is true, the operator returns the value of expr1;
        otherwise, it returns the value of expr2.
      </p>
      <pre>number > 0 ? "Number is positive" : "Number is negative" </pre>
      <p>
        It is often used in day to day JavaScript programming as a simple
        alternative to the standard if/else statement.
      </p>
      <p>
        <strong>YOUR TURN !!!</strong> Pikachu is getting stronger, he wants to
        learn a new move. However, pokemons are not allowed to have more than 4
        different moves. Change the code to check if pikachu can indeed learn a
        new move.
      </p>
      <ul>
        <li>
          if moves have already 4 moves, bind to <code>result</code> the value{' '}
          <code>true</code>, otherwise bind the value
          <code>false</code>
        </li>
      </ul>
    </div>
  ),
}

export default controlFlowIfElse
