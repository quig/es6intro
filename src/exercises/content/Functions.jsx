import React from 'react'

const functionsContent = {
  url:
    'https://codesandbox.io/embed/v3154o8495?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests',
  title: 'Functions/Arrow functions (ES6)',
  explanation: () => (
    <div className="content">
      <h1>Functions</h1>
      <p>
        We could calculate the damage every time we need but the actual formula
        is much more complex. Instead, we can create a <strong>function</strong>.
      </p>
      <p>
        A function is a reusable piece of code you can call several times in
        your program. It is a regular variable where the value of the variable is
        a function. For example:
      </p>
      <pre>
        let square = function(x) &#123;
        {'\n'} return x * x
        {'\n'}
        &#125;
        {'\n'}
        console.log(square(12)) // → 144
      </pre>
      <p className="is-italic">
        console.log() is a function displaying what is given in parameter. Try
        to run the previous code in the console of your browser to understand
        its use.
      </p>
      <p>
        A function is created with an expression that starts with the keyword <code>function</code>. 
        Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be
        executed when the function is called. The function body of a function
        created this way must always be wrapped in braces, even when it consists
        of only a single statement.
      </p>
      <p>
        A function can have multiple parameters or no parameters at all. In the
        following example, <code>makeNoise</code> does not have any parameter, 
        whereas <code>level</code> have two parameters:
      </p>
      <pre>
        let makeNoise = function() &#123;
        {'\n'} console.log("La team rocket s'envole vers d'autres cieux !!!")
        {'\n'}
        &#125;
        {'\n'}
        makeNoise(); // → La team rocket s'envole vers d'autres cieux !!!
        {'\n'}
        {'\n'}
        let level = function(experience, coefficient) &#123;
        {'\n'} return coefficient * experience / 500
        {'\n'}
        &#125;
        {'\n'}
        console.log(level(1000, 4)) // 8
      </pre>
      <p>
        Some functions produce a value, such as <code>level</code> and <code>square</code>, and some
        don’t, such as <code>makeNoise</code>, whose only result is a side effect. A <code>return</code> statement 
        determines the value the function returns. When control comes
        across such a statement, it immediately jumps out of the current
        function and gives the returned value to the code that called the
        function. A <code>return</code> keyword without an expression after it, will cause the
        function to return <code>undefined</code>. Functions that don’t have a return
        statement at all, such as <code>makeNoise</code>, similarly return <code>undefined</code>.
      </p>
      <p>
        Parameters to a function behave like regular variables, but their initial
        values are given by the caller of the function, not the code in the
        function itself.
      </p>
      <h2>Arrow functions (ES6)</h2>
      <p>
        There’s another notation for functions, instead of the <code>function</code> keyword,
        it uses an arrow <code> =></code> made up of an equal sign and a
        greater-than character.
      </p>
      <pre className="newSyntax">
        let level = (experience, coefficient) => &#123;
        {'\n'} return coefficient * experience / 500
        {'\n'}
        &#125;
      </pre>      
      <p>
        If the body is a single expression, braces can be omitted. 
        Also <code>return</code> keyword can be omitted in that case. 
        This expression will naturally be returned by the function. 
        We do personnaly prefer this syntax as it is much more concise
        and make the code easier to read.
      </p>
      <pre className="newSyntax">
        let level = (experience, coefficient) => coefficient * experience / 500
      </pre>
      <p>Please also note that if there is only one parameter name, you can omit 
        the parentheses around the parameter list. </p>
      <p>
        <strong>YOUR TURN !!!</strong> Create a function calculating the damage
        and make use of it to launch thunder on Miaouss. Then create another
        function returning the number of moves pikachu has.
      </p>
      <ul>
        <li>
          Create a function <code>damage(attacker, defender, move)</code>{' '}
          calculating the damage (which is a number)
        </li>
        <li>
          Create a function <code>numberOfMoves()</code> returning the number of
          moves Pikachu has (which is a number)
        </li>
      </ul>
    </div>
  ),
}

export default functionsContent
