import React from 'react'
import objects from '../../assets/objects.png'
import arrays from '../../assets/arrays.png'

const objectsContent = {
  url:
    'https://codesandbox.io/embed/8x33rv4o50?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests',
  title: 'Objects/Arrays',
  explanation: () => (
    <div className="content">
      <h1>Objects</h1>
      <p>
        You may have noticed in one of the previous exercices. We created a
        variable to represent the name of the pokemon Pikachu. Pikachu has also
        attack points, health points, defense points, experience points and much
        more information. For those of you familiar with Pokemon, the game has
        over 151 pokemons each with its own characteristics. Imagine the hassle it would be
        to create as many variables as there are pokemons, with different names
        for each variable.
      </p>
      <pre>
        let namePikachu = "Pikachu" {"\n"}
        let attackPikachu = 100 {"\n"}
        let defensePikachu = 20 {"\n"} 
        let nameMiaouss = "Miaouss"{"\n"} 
        let attackMiaouss = 50; ...
      </pre>
      <p>
        JavaScript comes with a handy solution called <strong>Classes</strong>,
        but we will come to that later. In the meantime, I'd like to introduce
        you to something called <strong>Objects</strong>. Objects allow us to
        group values—including other objects—to build more complex structures.
      </p>
      <p>
        Values of object types are arbitrary collections of properties. One
        way to create an object is by using braces as an expression.
      </p>
      <pre>
        let red = &#123;
        {'\n'} name: "red",
        {'\n'} badges: 3,
        {'\n'} pokemons: ["pikachu", "rondoudou", "canarticho"]
        {'\n'}
        &#125;
      </pre>
      <p>
        You can then access the property by using the dot-notation, as follow:
      </p>
      <img src={objects} alt="Object example" />
      <h1>Arrays</h1>
      <p>
        You notice that the property <code>pokemons</code> is slightly different
        from the usual types we have seen until now. We call this an{' '}
        <strong>Array</strong>. An <strong>Array</strong> is a dataset used
        specifically for storing sequences of values. It is called an array and
        is written as a list of values between square brackets, separated by
        commas.
      </p>
      <p>
        The notation for getting the elements inside an array also uses
        square brackets.
      </p>
      <img src={arrays} alt="Array example" />
      <p>
        The first index of an array is zero, not one. So the first element is
        retrieved with primeNumbers[0]. Zero-based counting has a long tradition
        in technology and in certain ways makes a lot of sense, but it takes
        some time to get used to it.
      </p>
      <p>
        Arrays come with a special property called <code>length</code> which gives us the
        number of elements in the array. So to retrieve the last element,
        knowing the index starts at 0, I just have to seek{' '}
        <code>primeNumbers[primeNumbers.length - 1]</code>
      </p>
      <p>
        <strong>YOUR TURN !!!</strong> Pikachu is super cool, he has plenty of
        attacks and also statistics such as health points, attack, defense,
        speed. We could create several variables for each but instead, let's
        create an <strong>Object</strong> containing all we need.{' '}
      </p>
      <p>I want a Pikachu with the folowing properties and values: </p>
      <ul>
        <li>
          <code>attack</code> and value <code>100</code>
        </li>
        <li>
          <code>defense</code> and value <code>80</code>
        </li>
        <li>
          <code>speed</code> and value <code>110</code>
        </li>
        <li>
          a list of <code>moves</code> moves including <code>'thunder'</code>,{' '}
          <code>'surf'</code> and <code>'fly'</code>.
        </li>
      </ul>
    </div>
  ),
}

export default objectsContent
