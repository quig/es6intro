import React from "react";

const spreadOperator = {
  url: "https://codesandbox.io/embed/r4wr3p6zxp?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=9",
  title: "Spread operator (ES6)",
  explanation: () => (
    <div className="content">
      <h1>Spread operator (ES6)</h1>
      <p>
        Another nice feature introduced by ES6 is the <strong>spread operator</strong> represented by the <code>...</code> syntax. 
        It essentially takes either an array or an object and expands it into its set of items.
      </p>

      <p>
        <strong>Spread operator</strong> should not be confused with <strong>rest operator</strong>:
        <ul>
          <li>When using spread, you are expanding a single variable (array, object) into more</li>
          <li>When using rest, you are collapsing all remaining elements (of function arguments for example) into one array</li>
        </ul>
      </p>
      
      <h2>Spread on array</h2>
      <p>Given the following arrays:</p>
      <pre>
        const firstBadges = ["Boulder", "Cascade", "Thunder"] {"\n"}
        const secondBadges = ["Soul", "Marsh", "Volcano"]
      </pre>
      <p>
        Let's suppose we want to <strong>concat those elements</strong> into one array. In old JavaScript, we would do:
      </p>
      <pre className="oldSyntax">
        const combinedBadges = firstBadges.concat(secondBadges)
      </pre>
      <p>But in ES6, it could be written differently:</p>
      <pre className="newSyntax">
        const combinedBadges = [...firstBadges, ...secondBadges]
      </pre>
      <p>
        We spread elements of <code>firstBadges</code> array and we put them in <code>combinedBadges</code> array, and 
        then we spread elements of <code>secondBadges</code> array and we put them in <code>combinedBadges</code> array. 
        With that new syntax, it is also easy to <strong>add elements</strong> between (this would be more difficult with older syntax).
      </p>
      <pre className="newSyntax">
        const combinedBadges = [...firstBadges, "Rainbow", ...secondBadges,  "Earth"]{"\n"}
      </pre>
      <p>After that operation, value of <code>combinedBadges</code> array is:</p>
      <pre>
        ["Boulder", "Cascade", "Thunder", "Rainbow", "Soul", "Marsh", "Volcano", "Earth"]
      </pre>
      <p>
        Spread operator also allows us to <strong>clone arrays</strong>. Here is an example where <code>clonedBadges</code> array is a clone of <code>firstBadges</code> array:
      </p>
      <pre className="newSyntax">
        const clonedBadges = [...firstBadges]
      </pre>

      <h2>Spread on object</h2>
      <p>Given the following objects:</p>
      <pre>
        const firstProperties = &#123;
        {"\n"} name: "Red",
        {"\n"} badges: 8
        {"\n"}
        &#125;
        {"\n"}
        {"\n"}
        const secondProperties = &#123;
        {"\n"} city: "Pallet Town",
        {"\n"} favoritePokemon: "Pikachu"
        {"\n"}
        &#125;
      </pre>
      <p>
        If we want to <strong>combine all properties</strong> into one object, we can use spread operator and write:
      </p>
      <pre className="newSyntax">
        const combinedProperties = &#123; ...firstProperties, ...secondProperties &#125;
      </pre>
      <p>
        We spread properties of <code>firstProperties</code> object and we put them in <code>combinedProperties</code> object, 
        and then we spread properties of <code>secondProperties</code> object and we put them in <code>combinedProperties</code> array. 
        We can also <strong>add new properties</strong> at the same time:
      </p>
      <pre className="newSyntax">
        const combinedProperties = &#123; ...firstProperties, ...secondProperties, job: "Pokemon trainer" &#125;
      </pre>
      <p>
        After that operation, value of <code>combinedProperties</code> array is:
      </p> 
      <pre>
        &#123;
          {"\n"} name: "Red",
          {"\n"} badges: 8
          {"\n"} city: "Pallet Town",
          {"\n"} favoritePokemon: "Pikachu",
          {"\n"} job: "Pokemon trainer"
          {"\n"}
        &#125;
      </pre>
      <p>
        We can also use spread operator to <strong>clone objects</strong>. 
        Here is an example where <code>clonedProperties</code> object is a clone of <code>firstProperties</code> object:
      </p>
      <pre className="newSyntax">
        const clonedProperties = &#123; ...firstProperties &#125;
      </pre>

      <p>
        <strong>YOUR TURN !!!</strong>
      </p>
      <p>
        You are given a list of cities for each region.
      </p>
      <ul>
          <li>Use spread on array to combine <code>kantoCities</code> and <code>johtoCities</code> into <code>allKantoAndJohtoCities</code></li>
      </ul>
      <p>
        It seems that Hoenn region was forgotten!!! We should correct that.
        Also the mayor of 'Fortree City' which was not provided in the lists, would like not only that his city appears in the final list, 
        but also in first position!
      </p>
      <ul>
          <li>Use spread on array to combine all cities into <code>allCities</code>, including those of Hoenn (make use of <code>allKantoAndJohtoCities</code>). 
          Also add 'Fortree City' as first element of array</li>
      </ul>
      <p>You are given info about Mauville City, but its mayor requests you to append new info 
        and also takes the opportunity to correct property 'region' 
        which was incorrect and to amend info about the name of the trainer for his city.</p>
      <ul>
          <li>Use spread on object to combine all properties into <code>mauvilleCityNewProperties</code>. Also, add property 'trainer' with value 'Meguru'</li>
      </ul>
    </div>
  )
};

export default spreadOperator;
