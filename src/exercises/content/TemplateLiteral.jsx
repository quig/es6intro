import React from 'react'
import literals from '../../assets/template-literals.png'

const templateLiteral = {
  url:
    'https://codesandbox.io/embed/ox7xl02yrq?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=3',
  title: 'Template literals (ES6)',
  explanation: () => (
    <div className="content">
      <h1>Template literals (ES6)</h1>
      <p>
        Backtick-quoted strings have the ability to embed values, this is what we call <strong>template literal</strong>. When you write
        something inside <code>$&#123;&#125;</code> in a template literal, its
        result will be computed, converted to a string, and included at that
        position. Supposing we have defined <code>const pokemon = "Pikachu"</code>. Old syntax is:</p>
      <pre className="oldSyntax">
        
        const sentence = "My favorite pokemon is " + pokemon + "!"
      </pre>
      <p>New syntax is:</p> 
      <pre className="newSyntax">
        const sentence = `My favorite pokemon is $&#123;pokemon&#125;!`
      </pre>   
      <img src={literals} alt="Template literal example" />
      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <ul>
        <li>
          Change the function to return "Go &#60;the pokemon name&#62;, with
          your attack &#60;the pokemon attack + 5&#62;"
        </li>
      </ul>
    </div>
  ),
}

export default templateLiteral
