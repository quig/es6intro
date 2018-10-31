import React from 'react'

import strings from '../../assets/strings.png'

const bindings = {
  url:
    'https://codesandbox.io/embed/v6lyo318m0?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=2,3,4',
  title: 'Variables/const and let (ES6)',
  explanation: () => (
    <div className="content">
      <h1>Variables</h1>
      <p>
        Programming consists in the manipulation of data. You can create, read,
        write, store, modify data and so much more. As many other programming
        languages, JavaScript provides the notion of <strong>variables</strong>.
      </p>
      <pre>
        let player = 'Red'
      </pre>
      <p>
        Variables are containers for 
        data. <code>let</code> is a special keyword to define a variable. 
        It is followed by the variable name and if we want
        to immediately assign it a value, we add <code>=</code> operator followed by the value.
      </p>

      <p>
        Now that we have created a variable, we can use it in various places in our
        program.
      </p>
      <img src={strings} alt="Example 1" />
      <p className="is-italic">
        The previous output can be obtained through the console view in your
        browser. In Chrome, just use Ctrl + Shift + J or ⌥ + ⌘ + J
      </p>

      <p>In JavaScript, values can be of three types:</p>
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

      <h1>const and let (ES6)</h1>
      <p>There are three special keywords that you can use to define a variable:</p>
      <ul>
        <li><code>var</code> (short for "variable") is the way variables
        were declared before ES6. We advise you not to use it because it has some confusing properties.</li>
        <li><code>let</code> is the way variables should be declared with ES6, if value is meant to change.</li>
        <li><code>const</code> (short for "constant") is the way variables should be declared with ES6, if value will never change.</li>
      </ul>

      <pre className="oldSyntax">
        var name = "Pierre"{"\n"}
        name = "Pierrette"
      </pre>
      <pre className="newSyntax">
        let name = "Pierre"{"\n"}
        name = "Pierrette"
      </pre>
      <pre className="newSyntax">
        const name = "Pierre"
      </pre>

      <p>We don't advise to use <code>var</code> because it is function-scoped contrary to <code>const</code> and <code>let</code>
      which are block-scoped. Check this <a href="https://codesandbox.io/s/xj563k6lw4">experiment</a></p>

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
