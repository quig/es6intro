import React from 'react'

const controlFlowLoop = {
  url:
    'https://codesandbox.io/embed/qxvon4lw6q?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=2',
  title: 'Control flow - loops',
  explanation: () => (
    <div className="content">
      <h1>Control flow - loops</h1>
      <p>
        Consider a program that outputs all even numbers from 0 to 12. Here is
        one way to write this:
      </p>
      <pre>
        console.log(0) {'\n'}
        console.log(2) {'\n'}
        console.log(4) {'\n'}
        console.log(6) {'\n'}
        console.log(8) {'\n'}
        console.log(10) {'\n'}
        console.log(12)
      </pre>
      <p>
        That works, but the idea of writing a program is to make less work, not
        more. If we needed all even numbers less than 1000, this approach would
        be unworkable. What we need is a way to run a piece of code multiple
        times. This form of control flow is called a <strong>loop</strong>.
      </p>
      <pre>
        let number = 0; {'\n'}
        while (number &#8804; 12) &#123;
        {'\n'} console.log(number)
        {'\n'} number = number + 2
        {'\n'}
        &#125;
      </pre>
      <p>
        A statement starting with the keyword <code>while</code> creates a loop. The 
        word <code>while</code> is followed by an expression in parentheses and then
        a statement, much like <code>if</code>. The loop keeps executing that statement as
        long as the expression produces a value that gives true when converted
        to Boolean.
      </p>
      <p>
        The variable <code>number</code> shows how a variable can be used to track 
        the progress of a program. Every time the loop repeats, <code>number</code> gets 
        incremented by 2. At the beginning of every repetition, it
        is compared with the number 12 to decide whether we should exit the loop.
      </p>
      <p>
        Many loops follow the pattern shown in the <code>while</code> examples. 
        First a “counter” binding is created to track the progress of the loop. Then
        comes a while loop, usually with a test expression that checks whether
        the counter has reached its end value. At the end of the loop body, the
        counter is updated to track progress. Because this pattern is so common,
        JavaScript and similar languages provide a slightly shorter and more
        comprehensive form, the <code>for</code> loop.
      </p>
      <pre>
        for (let number = 0; number &#8804; 12; number = number + 2) &#123;
        {'\n'} console.log(number)
        {'\n'}
        &#125;
      </pre>
      <p>
        This program is exactly equivalent to the earlier even-number-printing
        example. The only change is that all the statements that are related to
        the “state” of the loop are grouped together after <code>for</code>.
      </p>
      <p>
        The parentheses after a <code>for</code> keyword must contain two semicolons. The
        part before the first semicolon initializes the loop, usually by
        defining a variable. The second part is the expression that checks
        whether the loop must continue or not. The final part updates the value of the
        variable after every iteration. In most cases, this is shorter and clearer
        than a <code>while</code> syntax.
      </p>
      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <ul>
        <li>
          Change <code>filterPokemon</code> into a function returning a list of
          pokemons with less than 8 characters. Example,{' '}
          <code>filterPokemon(["doduo","roucarnage" ])</code> should return{' '}
          <code>["doduo"]</code>
        </li>
      </ul>
    </div>
  ),
}

export default controlFlowLoop
