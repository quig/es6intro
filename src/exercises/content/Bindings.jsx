import React from 'react'

import strings from '../../assets/strings.png'

const bindings = {
  url:
    'https://codesandbox.io/embed/v6lyo318m0?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=2,3,4',
  title: 'Variables',
  explanation: () => (
    <div className="content">
      <h1>Variables</h1>
      <p>
        Programming consists in the manipulation of data. You can create, read,
        write, store, modify data and so much more. As many other programming
        languages, JavaScript provides a thing called a <strong>binding</strong>{' '}
        or <strong>variable</strong>:
      </p>
      <p>
        <code>const player = 'Red'</code>
      </p>
      <p>
        In this example, the special keywork <strong>const</strong> indicates
        that this sentance is going to define a binding. It is followed by the
        name of the binding, in this case <strong>player</strong> and if we want
        to immediately give it a value, by an <strong> = </strong> operator and
        an expression (here <strong>'Red'</strong>
        ).
      </p>
      <p>
        Now I have created my variable, I can use it in various places in my
        program.
      </p>
      <img src={strings} alt="Example 1" />
      <p className="is-italic">
        The previous output can be obtained through the console view in your
        browser. In chrome, just use Ctrl + Shift + J or ⌥ + ⌘ + J
      </p>
      <p>In JavaScript, we define 3 main kinds of values </p>
      <ul>
        <li>
          numbers, which are numeric values written as you would expect{' '}
          <code>21</code> or <code>5.009</code> or even <code>2.998e8</code>
        </li>
        <li>
          booleans, written as <code>true</code> or <code>false</code>
        </li>
        <li>
          strings, representing texts enclosed by quotes{' '}
          <code>`Bulbizarre, utilise fouets lianes`</code>{' '}
          <code>'Bulbizarre rate son attaque'</code>{' '}
          <code>"Bulbizarre est échangé contre un Rondoudou"</code>.{' '}
          <p>
            You can use single quotes, double quotes, or backticks to mark
            strings, as long as the quotes at the start and the end of the
            string match.
          </p>
        </li>
      </ul>
      <p>
        <strong>YOUR TURN !!!</strong> First, let's create some variables and
        bind to them values.
      </p>
      <ul>
        <li>
          Bind to the variable <code>pokemon</code> a value among{' '}
          <code>Bulbizarre</code>, <code>Salamèche</code>
          and <code>Carapuce</code>
        </li>
        <li>
          Bind to <code>attackPoints</code> a number below or equal to 30
        </li>
        <li>
          Bind to <code>isMyPokemonTheBestEver</code> the keyword{' '}
          <code>true</code>
        </li>
      </ul>
    </div>
  ),
}

export default bindings
