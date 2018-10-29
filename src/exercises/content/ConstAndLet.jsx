import React from 'react'
import ronflex from '../../assets/ronflex.gif'

const constAndLet = {
  url: '',
  title: 'Const and let (ES6)',
  explanation: () => (
    <div className="content">
      <h1>Const and let (ES6)</h1>
      <p>
        The words <code>var</code> and <code>const</code> can also be used to
        create bindings, in a way similar to <code>let</code>.
      </p>
      <pre>
        var name = "Pierre";
        {'\n'}
        const greeting = "Hello ";
        {'\n'}
        console.log(greeting + name); // Hello Pierre
      </pre>
      <p>
        The first, <code>var</code> (short for “variable”), is the way bindings
        were declared in pre-2015 JavaScript. But you will see it less often
        because it has some confusing properties.
      </p>
      <p>
        The word <code>const</code> stands for constant. It defines a constant
        binding, which points at the same value for as long as it lives. This is
        useful for bindings that give a name to a value so that you can easily
        refer to it later.
      </p>
      <p>
        As a good practice, prefer <code>const</code> if you know your binding
        won't change in the lifetime of your program, otherwise use{' '}
        <code>let</code>.
      </p>
      <p>No practice this time...</p>
      <img src={ronflex} alt="ronflex" />
    </div>
  ),
}

export default constAndLet
