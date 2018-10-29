import React from 'react'
import oak from '../../assets/professoroak.png'

const welcome = {
  url: '',
  title: 'Introduction',
  explanation: () => (
    <div className="content">
      <h1>Introduction to modern JavaScript</h1>
      <h4>ECA NodeJS/React - November 7th 2018</h4>
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
          This tutorial was designed to be the material used 
          for the first course of Expedia Code Academy NodeJS and React.
        </p>
        <p>
          Our goal is to introduce you to JavaScript and some awesome things you
          can do with the language. Don't worry if you've never done programming
          in JavaScript before, we'll start with the basics.
        </p>
        <p>
          Each exercice will have a description of the tasks to be done and a
          codesandbox where you can code the answer and see directly the
          outcome. Tests are automatically run when the code is being modified.
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
