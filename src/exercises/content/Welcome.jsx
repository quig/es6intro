import React from 'react'
import oak from '../../assets/professoroak.png'

const welcome = {
  url: '',
  title: 'Introduction',
  explanation: () => (
    <div className="content">
      <h1>Welcome to the world of Pokemon</h1>
      <div>
        <img src={oak} alt="Professeur Chen" />
      </div>
      <div>
        <p>
          We are so glad to have you here with us in this awesome journey we are
          about to start together{' '}
          <span role="img" aria-label="Smiley">
            🙂
          </span>
        </p>
        <p>
          Our goal is to introduce you to JavaScript and some awesome things you
          can do with the language. Don't worry if you've never done programming
          before, we'll start with the basics. For those of you already familiar
          with the language, you might want to skip few exercices and try some
          ES6 features.
        </p>
        <p>
          Each exercice will have a description of the expecting tasks and a
          codesandbox where you can code the anwser and see directly the
          outcome. Tests are automaticaly run when the code is being modified.
          You can also open the codesandbox in another tab, then by creating an
          account, you can keep a copy of your work.
        </p>
        <p>
          Have fun and please, don't choose <code>Bulbizarre</code> 😐
        </p>
        <p className="is-italic">
          Want to know more about JavaScript ? Take a look at
          <a href="https://eloquentjavascript.net"> Eloquent JavaScript</a>, our
          source for inspiration for this tutorial 🙂
        </p>
      </div>
    </div>
  ),
}

export default welcome
