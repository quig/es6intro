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
        Functions that operate on other functions, either by taking them as
        arguments or by returning them, are called higher-order functions. One
        area where higher-order functions shine is data processing.
      </p>
      <h2>For each</h2>
      <p>
        {' '}
        There is a built-in array method, forEach, that will execute a function
        for each array element.
      </p>
      <img src={foreach} alt="foreach example" />
      <h2>Filter</h2>
      <p>It filters out the elements in an array that don’t pass a test.</p>
      <img src={filter} alt="filter example" />
      <p>
        The function uses the argument named test, a function value, to fill a
        “gap” in the computation, the process of deciding which elements to
        collect. Note how the filter function, rather than deleting elements
        from the existing array, builds up a new array with only the elements
        that pass the test. This function is pure. It does not modify the array
        it is given.
      </p>
      <h2>Map</h2>
      <p>
        The map method transforms an array by applying a function to all of its
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
        <code>reduce()</code> or find which are also particulary useful in some
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
        <li>Find the names of the dragon pokemons. </li>
      </ul>
    </div>
  ),
}

export default highOrderFunction
