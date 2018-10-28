import React from "react";

const destructuring = {
  url: "https://codesandbox.io/embed/o4q78673yz?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=9",
  title: "Destructuring (ES6)",
  explanation: () => (
    <div className="content">
      <h1>Destructuring (ES6)</h1>
      <p>
        A very commonly used feature introduced by ES6 is <strong>destructuring</strong>. 
        Destructuring consists in unpacking
        values from an array, or properties from objects, into distinct
        variables.
      </p>
      
      <h2>Array destructuring</h2>
      <p>Given the following <code>badges</code> array:</p>
      <pre>
        const badges = ["Boulder", "Cascade", "Thunder", "Rainbow", "Soul",
        "Marsh", "Volcano", "Earth"]
      </pre>
      <p>
        Supposing we want to extract the third, sixth and seventh badges into
        three variables <code>thirdBadge</code>, <code>sixthBadge</code> and{" "}
        <code>seventhBadge</code> respectively, we could write:
      </p>
      <pre className="oldSyntax">
        const thirdBadge = badges[2]
        {"\n"}
        const sixthBadge = badges[5]
        {"\n"}
        const seventhBadge = badges[6]
      </pre>
      <p>But in ES6, it could be written in a shorter way:</p>
      <pre className="newSyntax">const [,,thirdBadge,,,sixthBadge,seventhBadge,] = badges</pre>
      <p>This is the exact equivalent of the three lines above!</p>
      
      <h2>Object destructuring</h2>
      <p>Given the following <code>pokemonTrainer</code> object:</p>
      <pre>
        const pokemonTrainer = &#123;
        {"\n"} name: "Red",
        {"\n"} badges: 8,
        {"\n"} city: "Pallet Town",
        {"\n"} favoritePokemon: "Pikachu"
        {"\n"}
        &#125;
      </pre>
      <p>
        Supposing we want to extract the properties <code>name</code>,{" "}
        <code>badges</code> and <code>favoritePokemon</code> into three
        variables having same names as corresponding property, we could write:
      </p>
      <pre className="oldSyntax">
        const name = pokemonTrainer.name
        {"\n"}
        const badges = pokemonTrainer.badges
        {"\n"}
        const favoritePokemon = pokemonTrainer.favoritePokemon
      </pre>
      <p>
        But again, it is not elegant; especially because we have to repeat <code>pokemonTrainer.</code>
        Here is how you would do in ES6:
      </p>
      <pre className="newSyntax">const &#123; name, badges, favoritePokemon &#125; = pokemonTrainer</pre>
      <p>
        This is the exact equivalent of the three lines above! If we don't
        want to have a variable whose name is different from property, we can
        use <strong>alias</strong> as such:
      </p>
      <pre className="newSyntax">const &#123; name: firstName, badges &#125; = pokemonTrainer</pre>
      <p>These two lines are equivalent to:</p>
      <pre className="oldSyntax">
        const firstName = pokemonTrainer.name
        {"\n"}
        const badges = pokemonTrainer.badges
      </pre>
      <p>
        <strong>Object destructuring</strong> is particularly convenient when dealing with
        functions receiving <strong>objects as arguments</strong>! Let's imagine a function <code>displayInfo</code> which 
        displays info about a Pokemon trainer (represented as an object like 
        <code>pokemonTrainer</code> defined above). Old version would be:
      </p>

      <pre className="oldSyntax">
        const displayInfo = (trainer) => &#123;
        {"\n"} console.log( `$&#123; trainer.name &#125; lives in $&#123; trainer.city &#125; 
        and his favorite Pokemon is $&#123; trainer.favoritePokemon &#125;`)
        {"\n"}
        &#125;
      </pre>

      <p>
        With object destructuring, we would have:
      </p>
      <pre className="newSyntax">
        const displayInfo = (&#123;name, city, favoritePokemon&#125;) => &#123;
        {"\n"} console.log( `$&#123; name &#125; lives in $&#123; city &#125; and 
        his favorite Pokemon is $&#123; favoritePokemon &#125;`)
        {"\n"}
        &#125;
      </pre>
      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <ul>
        <li>Use array destructuring to extract values from pokemons array into three variables <code>bulbizarre</code>, <code>salameche</code> and <code>carapuce</code> (ignore <code>smogogo</code>)</li>
        <li>Use object destructuring and aliases to extract <code>type</code> and <code>friendshipWithRed</code> from <code>salameche</code> object into variables <code>salamecheType</code> and <code>salamecheFriendshipWithRed</code> respectively</li>
        <li>Edit <code>sumFriendship</code> function which takes a pokemon as parameter (such as <code>bulbizarre</code> variable) so that it returns the sum of its <code>friendshipWithRed</code> and <code>friendshipWithBlue</code></li>
      </ul>
    </div>
  )
};

export default destructuring;
