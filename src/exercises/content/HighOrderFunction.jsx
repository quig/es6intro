import React from 'react'
import foreach from '../../assets/foreach.png'
import filter from '../../assets/filter.png'
import map from '../../assets/map.png'
import composability from '../../assets/composability.png'

const highOrderFunction = {
  url:
    'https://codesandbox.io/embed/l5o8n744m?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=3',
  title: 'Higher-order functions',
  explanation: () => (
    <div className="content">
      <h1>Higher-order functions</h1>
      <p>
        Functions which takes functions as parameter, are called <strong>higher-order functions</strong>. One
        area where higher-order functions shines is data processing.
      </p>
      <h2>forEach: execute function on each element</h2>
      <p>
        {' '}
        There is a built-in array method <code>forEach</code> that takes as parameter a function that will
        be executed on each element of the array.
      </p>
      <img src={foreach} alt="foreach example" />
      <h2>filter: filter out elements</h2>
      <p>Array method <code>filter</code> takes as parameter a function that returns a Boolean (we can call it the "test").
      This function is executed on each element of the array. For one element, if it returns <code>True</code>,
      element is kept. Otherwise, it is filtered out.</p>
      <img src={filter} alt="filter example" />
      <p>
        Note how the <code>filter</code> function, rather than deleting elements
        from the existing array, builds up a new array with only the elements
        that pass the test. This function is pure. It does not modify the array
        it is given.
      </p>
      <h2>map: create a new array with the results of calling a function on each element</h2>
      <p>
        The <code>map</code> method transforms an array by applying a function to all of its
        elements and building a new array from the returned values. The new
        array will have the same length as the input array, but its content will
        have been mapped to a new form by the function.
      </p>
      <img src={map} alt="map example" />
      <h2>Composability</h2>
      <p>
        Higher-order functions start to shine when you need to compose
        operations. Here is an example:
      </p>
      <img src={composability} alt="composability example" />
      <p>
        You can see it as a pipeline: we start with an array of trainers, filter
        out the ones having a city defined, and only output the name of these
        trainers.
      </p>
      <p className="is-italic">
        There are others functions such as <code>some()</code>,{' '}
        <code>reduce()</code> or <code>find</code> which are also particulary useful in some
        cases but not presented here. You might want to take a look at this page
        for more information:{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
          MDN Firefox
        </a>
      </p>
      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <ul>
        <li>Find the names of the dragon pokemons. You might use array built-in method <code>includes</code>.</li>
      </ul>
    </div>
  ),
}

export default highOrderFunction
