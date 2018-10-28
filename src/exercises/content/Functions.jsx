import React from 'react'

const functionsContent = {
  url:
    'https://codesandbox.io/embed/v3154o8495?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests',
  title: 'Functions/Arrow functions (ES6)',
  explanation: () => (
    <div className="content">
      <h1>Functions</h1>
      <p>
        We could Calculate the damage every time we need but the actual formula
        is much more complexe. Instead we can create a <strong>function</strong>
        .
      </p>
      <p>
        A function is a reusable piece of code you can call several times in
        your program. It is a regular binding where the value of the binding is
        a function. For example:
      </p>
      <pre>
        let square = function(x) &#123;
        {'\n'} return x * x;
        {'\n'}
        &#125;
        {'\n'}
        console.log(square(12)); // → 144
      </pre>
      <p className="is-italic">
        console.log() is a function displaying what is given in parameter. Try
        to run the previous code in the console of your browser to understand
        its use.
      </p>
      <p>
        A function is created with an expression that starts with the keyword
        <code>function</code>. Functions have a set of parameters (in this case,
        only x) and a body, which contains the statements that are to be
        executed when the function is called. The function body of a function
        created this way must always be wrapped in braces, even when it consists
        of only a single statement.
      </p>
      <p>
        A function can have multiple parameters or no parameters at all. In the
        following example, makeNoise does not list any parameter names, whereas
        level lists two:
      </p>
      <pre>
        let makeNoise = function() &#123;
        {'\n'} console.log("La team rocket s'envole vers d'autres cieux !!!");
        {'\n'}
        &#125;
        {'\n'}
        makeNoise(); // → La team rocket s'envole vers d'autres cieux !!!
        {'\n'}
        {'\n'}
        let level = function(experience, coefficient) &#123;
        {'\n'} return coefficient * experience / 500;
        {'\n'}
        &#125;
        {'\n'}
        console.log(level(1000, 4)); // 8
      </pre>
      <p>
        Some functions produce a value, such as level and square, and some
        don’t, such as makeNoise, whose only result is a side effect. A return
        statement determines the value the function returns. When control comes
        across such a statement, it immediately jumps out of the current
        function and gives the returned value to the code that called the
        function. A return keyword without an expression after it will cause the
        function to return undefined. Functions that don’t have a return
        statement at all, such as makeNoise, similarly return undefined.
      </p>
      <p>
        Parameters to a function behave like regular bindings, but their initial
        values are given by the caller of the function, not the code in the
        function itself.
      </p>
      <h2>Arrow functions (ES6)</h2>
      <p>
        There’s another notation for functions, instead of the function keyword,
        it uses an arrow <code> =></code> made up of an equal sign and a
        greater-than character.
      </p>
      <pre>
        let level = (experience, coefficient) => coefficient * experience / 500;
      </pre>
      <p>
        When there is only one parameter name, you can omit the parentheses
        around the parameter list. If the body is a single expression, rather
        than a block in braces, that expression will be returned from the
        function. I do personnaly prefer this syntax as it is much more concise
        and make the code easier to read.
      </p>
      <p>
        <strong>YOUR TURN !!!</strong> Create a function calculating the damage
        and make use of it to launch thunder on Meowth. Then create another
        function returning the number of moves pikachu has.
      </p>
      <ul>
        <li>
          Create a function <code>damage(attacker, defender, move)</code>{' '}
          calculating the damage (number)
        </li>
        <li>
          Create a function <code>numberOfMoves()</code> returning the number of
          moves Pikachu has (number)
        </li>
      </ul>
    </div>
  ),
}

export default functionsContent
