import React from 'react'
import classes from '../../assets/classes.png'

const classesContent = {
  url:
    'https://codesandbox.io/embed/4rywynr394?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests',
  title: 'Classes (ES6)',
  explanation: () => (
    <div className="content">
      <h1>Classes (ES6)</h1>
      <p>
        {' '}
        A <strong>class</strong> defines the shape of a type of object—what
        methods and properties it has. Such an object is called an instance of
        the class.
      </p>
      <p>
        Imagine having a farm of rabbits, each with its own specificities
        (different name or color for example). You can create a class <code>Rabbit</code>
        representing the definition of what is a rabbit, then instanciate
        rabbits depending on your needs.
      </p>
      <img src={classes} alt="Rabbits" />
      <p>
        The <code>class</code> keyword starts a class declaration, which allows
        us to define a constructor and a set of methods all in a single place.
        Any number of methods may be written inside the declaration’s braces.
        The one named <code>constructor</code> is treated specially. It
        provides the actual constructor function, which will be bound to the
        name Rabbit. The <code>new</code> keyword allows us to call the
        constructor of the class.
      </p>
      <p className="is-italic">
        The variable called <code>this</code> in the constructor automatically
        points to the object that it was called on.
      </p>
      <p>
        A class definition can inherit from another class which means share its
        properties and methods. Although it is often used in React, we will not
        dig into inheritance for now.
      </p>
      <p>
        <strong>YOUR TURN !!!</strong> Pikachu and Miaouss are instances of the
        class Pokemon.
      </p>
      <ul>
        <li>
          Create a class <code>Pokemon</code> with the following properties:{' '}
          <code>name</code>, <code>attack</code>, <code>defense</code>,{' '}
          <code>speed</code> and <code>moves</code>
        </li>
      </ul>
    </div>
  ),
}

export default classesContent
