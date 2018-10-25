import React from 'react'
import literals from '../../assets/template-literals.png'

const templateLiteral = {
  url:
    'https://codesandbox.io/embed/ox7xl02yrq?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=3',
  title: 'Template literal',
  explanation: () => (
    <div className="content">
      <h1>Template literal</h1>
      <p>
        Backtick-quoted strings have the ability to embed values. When you write
        something inside <code>$&#123;&#125;</code> in a template literal, its
        result will be computed, converted to a string, and included at that
        position.
      </p>
      <img src={literals} alt="Template literal example" />
      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <ul>
        <li>
          change the function to return "Go &#60;the pokemon name&#62;, with
          your attack &#60;the pokemon attack + 5&#62;"
        </li>
      </ul>
    </div>
  ),
}

export default templateLiteral
