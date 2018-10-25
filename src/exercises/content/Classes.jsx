import React from 'react'
import classes from '../../assets/classes.png'

const classesContent = {
  url:
    'https://codesandbox.io/embed/4rywynr394?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests',
  title: 'Classes',
  explanation: () => (
    <div className="content">
      <h1>Classes</h1>
      <p className="is-italic">
        We enter a slightly more advanced side of programming and JavaScript.
        Since the format of this lecture is not appropriate for a complete
        understanding of the language, we will try to keep it simple. However,
        if you are looking for more depth, we strongly advise you to read{' '}
        <a href="https://eloquentjavascript.net"> Eloquent JavaScript</a> where
        most content of this tutorial come from.
      </p>
      <p>
        {' '}
        A <strong>class</strong> defines the shape of a type of object—what
        methods and properties it has. Such an object is called an instance of
        the class.
      </p>
      <p>
        Imagine having a farm of rabbits, each with its own specificities
        (different name or color for example). You can create a class Rabbit
        representing the definition of what is a rabbit, then instanciate
        rabbits depending on your needs.
      </p>
      <img src={classes} alt="Rabbits" />
      <p>
        The <code>class</code> keyword starts a class declaration, which allows
        us to define a constructor and a set of methods all in a single place.
        Any number of methods may be written inside the declaration’s braces.
        The one named <strong>constructor</strong> is treated specially. It
        provides the actual constructor function, which will be bound to the
        name Rabbit. The <code>new</code> keyword allows us to call the
        constructor of the class.
      </p>
      <p className="is-italic">
        the binding called <code>this</code> in the constructor automatically
        points at the object that it was called on.
      </p>
      <p>
        A class definition can inherit from another class which means share its
        properties and methods. Although it is often used in React, we will not
        dig into inheritence for now.
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
