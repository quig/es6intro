import React from 'react'

const bitOfMaths = {
  url:
    'https://codesandbox.io/embed/jjvkr0xmo9?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=6',
  title: 'Arithmetic operations',
  explanation: () => (
    <div className="content">
      <h1>Arithmetic operations</h1>
      <p>
        The main thing to do with numbers is arithmetic. Arithmetic operations
        such as addition or multiplication take two number values and produce a
        new number from them. Here is what they look like in JavaScript:{' '}
        <code>100 + 4 * 11</code>
      </p>
      <p>
        The <strong>+</strong> and <strong>*</strong> symbols are called{' '}
        <strong>operators</strong>. The first stands for addition, and the
        second stands for multiplication. Putting an operator between two values
        will apply it to those values and produce a new value. But does the
        example mean “add 4 and 100, and multiply the result by 11” or is the
        multiplication done before the adding? As you might have guessed, the
        multiplication happens first. But as in mathematics, you can change this
        by wrapping the addition in parentheses: <code>(100+4)*11</code>
      </p>
      <p>
        For subtraction, there is the <strong>-</strong> operator, and division
        can be done with the <strong>/</strong> operator.
      </p>
      <p>
        <strong>YOUR TURN !!!</strong> Pikachu wants to use thunder on the evil
        Miaouss. Thunder is a powerful attack with a power of 120 !!! Using the
        folowing formula <code> damage = power * attack / defense</code>{' '}
        Calculate the damage done on the Miaouss.
      </p>
      <ul>
        <li>
          Use arithmetic operations to compute the result and bind it to the
          variable <code>damage</code>
        </li>
      </ul>
    </div>
  ),
}

export default bitOfMaths
