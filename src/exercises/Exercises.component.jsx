import React from "react";
import oak from "../assets/professoroak.png";
import strings from "../assets/strings.png";
import objects from "../assets/objects.png";
import arrays from "../assets/arrays.png";
import literals from "../assets/template-literals.png";
import classes from "../assets/classes.png";
import ronflex from "../assets/ronflex.gif";

const exos = [
  {
    url: "",
    title: "Introduction",
    explanation: () => (
      <div className="content">
        <h1>Welcome to the world of Pokemon</h1>
        <div>
          <img src={oak} alt="Professeur Chen" />
        </div>
        <div>
          <p>
            We are so glad to have you here with us in this awesome journey we
            are about to start together :)
          </p>
          <p>
            Our goal is to introduce you to JavaScript and some awesome things
            you can do with the language. Don't worry if you've never done
            programming before, we'll start with the basics. For those of you
            already familiar with the language, you might want to skip few
            exercices and try some ES6 features.
          </p>
          <p>
            Each exercice will have a description of the expecting tasks and a
            codesandbox where you can code the anwser and see directly the
            outcome. Tests are automaticaly run when the code is being modified.
            You can also open the codesandbox in another tab, then by creating
            an account, you can keep a copy of your work.
          </p>
          <p>
            Have fun and please, don't choose <code>'Bulbizarre'</code> :/
          </p>
          <p className="is-italic">
            Want to know more about JavaScript ? Take a look at
            <a href="https://eloquentjavascript.net"> Eloquent JavaScript</a>,
            our source for inspiration for this tutorial :)
          </p>
        </div>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/v6lyo318m0?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=2,3,4",
    title: "Bindings",
    explanation: () => (
      <div className="content">
        <h1>Bindings and Pokemon</h1>
        <p>
          Programming consists in the manipulation of data. You can create,
          read, write, store, modify data and so much more. As many other
          programming languages, JavaScript provides a thing called a{" "}
          <strong>binding</strong> or <strong>variable</strong>:
        </p>
        <p>
          <code>let player = "Red"</code>
        </p>
        <p>
          In this example, the special keywork <strong>let</strong> indicates
          that this sentance is going to define a binding. It is followed by the
          name of the binding, in this case <strong>player</strong> and if we
          want to immediately give it a value, by an <strong> = </strong>{" "}
          operator and an expression (here <strong>"Red"</strong>
          ).
        </p>
        <p>
          Now I have created my variable, I can use it in various places in my
          program.
        </p>
        <img src={strings} alt="Example 1" />
        <p className="is-italic">
          The previous output can be obtained through the console view in your
          browser. In chrome, just use Ctrl + Shift + J or ⌥ + ⌘ + J
        </p>
        <p>In JavaScript, we define 3 main kinds of values </p>
        <ul>
          <li>
            numbers, which are numeric values written as you would expect{" "}
            <code>21</code> or <code>5.009</code> or even <code>2.998e8</code>
          </li>
          <li>
            booleans, written as <code>true</code> or <code>false</code>
          </li>
          <li>
            strings, representing texts enclosed by quotes{" "}
            <code>`Blubizarre, utilise fouets lianes`</code>{" "}
            <code>'Blubizarre rate son attaque'</code>{" "}
            <code>"Blubizarre est échangé contre un rondoudou"</code>.{" "}
            <p>
              You can use single quotes, double quotes, or backticks to mark
              strings, as long as the quotes at the start and the end of the
              string match.
            </p>
          </li>
        </ul>
        <p>
          <strong>YOUR TURN !!!</strong> First, let's create some variables and
          bind to them values.
        </p>
        <ul>
          <li>
            Bind to the variable <code>pokemon</code> a value among{" "}
            <code>'Bulbizarre'</code>, <code>'Salamèche'</code>
            and <code>'Carapuce'</code>
          </li>
          <li>
            Bind to <code>attackPoints</code> a number below or equal to 30
          </li>
          <li>
            Bind to <code>isMyPokemonTheBestEver</code> the keyword{" "}
            <code>true</code>
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/jjvkr0xmo9?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=6",
    title: "A bit of maths",
    explanation: () => (
      <div className="content">
        <h1>A bit of maths</h1>
        <p>
          The main thing to do with numbers is arithmetic. Arithmetic operations
          such as addition or multiplication take two number values and produce
          a new number from them. Here is what they look like in JavaScript:{" "}
          <code>100+4*11</code>
        </p>
        <p>
          The <strong>+</strong> and <strong>*</strong> symbols are called{" "}
          <strong>operators</strong>. The first stands for addition, and the
          second stands for multiplication. Putting an operator between two
          values will apply it to those values and produce a new value. But does
          the example mean “add 4 and 100, and multiply the result by 11,” or is
          the multiplication done before the adding? As you might have guessed,
          the multiplication happens first. But as in mathematics, you can
          change this by wrapping the addition in parentheses:{" "}
          <code>(100+4)*11</code>
        </p>
        <p>
          For subtraction, there is the <strong>-</strong> operator, and
          division can be done with the <strong>/</strong> operator.
        </p>
        <p>
          <strong>YOUR TURN !!!</strong> Pikachu wants to use thunder on the
          evil Miaouss. Thunder is a powerful attack with a power of 120 !!!
          Using the folowing formula{" "}
          <code> damage = power * attack / defense</code> Calculate the damage
          done on the Miaouss.
        </p>
        <ul>
          <li>
            Use arithmetic operations to compute the result and bind it to the
            variable <code>damage</code>
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/8x33rv4o50?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests",
    title: "Objects",
    explanation: () => (
      <div className="content">
        <h1>(Almost) Everything is an object !!!</h1>
        <p>
          You may have noticed in one of the previous exercices. We created a
          binding to represent the name of the pokemon Pikachu. Pikachu has also
          attack points, health points, defense points, experience points and
          much more information. For those of you familiar with Pokemon, the
          game has over 151 pokemons each with its own caracteristics. Imagine
          the hussle, creating as many variables as there are pokemons with
          different names for each variable.
        </p>
        <pre>
          let namePikachu = "Pikachu"; let attackPikachu = 100; let
          defensePikachu = 20; let nameMiaouss = "Miaouss"; let attackMiaouss =
          50; ...
        </pre>
        <p>
          JavaScript comes with a handy solution called <strong>Classes</strong>
          , but we will come to that later. In the meantime, I'd like to
          introduce you to something called <strong>Objects</strong>. Objects
          allow us to group values—including other objects—to build more complex
          structures.
        </p>
        <p>
          Values of the type object are arbitrary collections of properties. One
          way to create an object is by using braces as an expression.
        </p>
        <pre>
          let red = &#123;
          {"\n"} name: "red",
          {"\n"} badges: 3,
          {"\n"} pokemons: ["pikachu", "rondoudou", "canarticho"]
          {"\n"}
          &#125;
        </pre>
        <p>
          You can then access the property by using the dot-notation, as follow:
        </p>
        <img src={objects} alt="Object example" />
        <p>
          You notice that the property <code>pokemons</code> is slightly
          different from the usual types we have seen until now. We call this an{" "}
          <strong>Array</strong>. An <strong>Array</strong> is a Data Set used
          specifically for storing sequences of values. It is called an array
          and is written as a list of values between square brackets, separated
          by commas.
        </p>
        <p>
          The notation for getting at the elements inside an array also uses
          square brackets.
        </p>
        <img src={arrays} alt="Array example" />
        <p>
          The first index of an array is zero, not one. So the first element is
          retrieved with primeNumbers[0]. Zero-based counting has a long
          tradition in technology and in certain ways makes a lot of sense, but
          it takes some getting used to. Think of the index as the amount of
          items to skip, counting from the start of the array.
        </p>
        <p>
          Arrays come with a special property called length which gives us the
          number of elements in the array. So to retrieve the last element,
          knowing the index starts at 0, I just have to seek{" "}
          <code>primeNumbers[primeNumbers.length - 1]</code>
        </p>
        <p>
          <strong>YOUR TURN !!!</strong> Pikachu is super cool, he has plenty of
          attacks and also statistics such as health points, attack, defense,
          speed. We could create several variables for each but instead, let's
          create an <strong>Object</strong> containing all we need.{" "}
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
            a list of <code>moves</code> moves including <code>'thunder'</code>,{" "}
            <code>'surf'</code> and <code>'fly'</code>.
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/v3154o8495?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests",
    title: "Functions",
    explanation: () => (
      <div className="content">
        <h1>Functions</h1>
        <p>
          We could Calculate the damage every time we need but the actual
          formula is much more complexe. Instead we can create a{" "}
          <strong>function</strong>.
        </p>
        <p>
          A function is a reusable piece of code you can call several times in
          your program. It is a regular binding where the value of the binding
          is a function. For example:
        </p>
        <pre>
          let square = function(x) &#123;
          {"\n"} return x * x;
          {"\n"}
          &#125;
          {"\n"}
          console.log(square(12)); // → 144
        </pre>
        <p className="is-italic">
          console.log() is a function displaying what is given in parameter. Try
          to run the previous code in the console of your browser to understand
          its use.
        </p>
        <p>
          A function is created with an expression that starts with the keyword
          <code>function</code>. Functions have a set of parameters (in this
          case, only x) and a body, which contains the statements that are to be
          executed when the function is called. The function body of a function
          created this way must always be wrapped in braces, even when it
          consists of only a single statement.
        </p>
        <p>
          A function can have multiple parameters or no parameters at all. In
          the following example, makeNoise does not list any parameter names,
          whereas level lists two:
        </p>
        <pre>
          let makeNoise = function() &#123;
          {"\n"} console.log("La team rocket s'envole vers d'autres cieux !!!");
          {"\n"}
          &#125;
          {"\n"}
          makeNoise(); // → La team rocket s'envole vers d'autres cieux !!!
          {"\n"}
          {"\n"}
          let level = function(experience, coefficient) &#123;
          {"\n"} return coefficient * experience / 500;
          {"\n"}
          &#125;
          {"\n"}
          console.log(level(1000, 4)); // 8
        </pre>
        <p>
          Some functions produce a value, such as level and square, and some
          don’t, such as makeNoise, whose only result is a side effect. A return
          statement determines the value the function returns. When control
          comes across such a statement, it immediately jumps out of the current
          function and gives the returned value to the code that called the
          function. A return keyword without an expression after it will cause
          the function to return undefined. Functions that don’t have a return
          statement at all, such as makeNoise, similarly return undefined.
        </p>
        <p>
          Parameters to a function behave like regular bindings, but their
          initial values are given by the caller of the function, not the code
          in the function itself.
        </p>
        <h2>Arrow functions</h2>
        <p>
          There’s another notation for functions, instead of the function
          keyword, it uses an arrow <code> =></code> made up of an equal sign
          and a greater-than character.
        </p>
        <pre>
          let level = (experience, coefficient) => coefficient * experience /
          500;
        </pre>
        <p>
          When there is only one parameter name, you can omit the parentheses
          around the parameter list. If the body is a single expression, rather
          than a block in braces, that expression will be returned from the
          function. I do personnaly prefer this syntax as it is much more
          concise and make the code easier to read.
        </p>
        <p>
          <strong>YOUR TURN !!!</strong> Create a function calculating the
          damage and make use of it to launch thunder on Meowth. Then create
          another function returning the number of moves pikachu has.
        </p>
        <ul>
          <li>
            Create a function <code>damage(attacker, defender, move)</code>{" "}
            calculating the damage (number)
          </li>
          <li>
            Create a function <code>numberOfMoves()</code> returning the number
            of moves Pikachu has (number)
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/7w42om5z81?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=9",
    title: "Control flow - if, else",
    explanation: () => (
      <div className="content">
        <h1>Control flow</h1>
        <p>
          When your program contains more than one statement, the statements are
          executed as if they are a story, from top to botom.
        </p>
        <pre>
          let number = 2;
          {"\n"}
          let square = number * number;
          {"\n"}
          console.log(square); //4
        </pre>
        <p>
          However, you may want to change the code depending on the situation.
          For this, you can use what is called a conditional statement.
          Conditional execution is created with the <strong>if</strong> keyword
          in JavaScript. In the simple case, we want some code to be executed
          if, and only if, a certain condition holds. We might, for example,
          want to show the square of the input only if the input is positive.
        </p>
        <pre>
          let number = 2;
          {"\n"}
          if(number &#62; 0) &#123;
          {"\n"} let square = number * number;
          {"\n"} console.log(square); //4
          {"\n"}
          &#125;
        </pre>
        <p>
          If you change number by a string like "dog", nothing will be
          displayed.
        </p>
        <p>
          The statement after the if is wrapped in braces{" "}
          <strong>&#123;</strong> and <strong>&#125;</strong> in this example.
          The braces can be used to group any number of statements into a single
          statement, called a block. You could also have omitted them if the
          block contained a single statement, but to avoid having to think about
          whether they are needed, most JavaScript programmers use them in every
          wrapped statement like this.
        </p>
        <p>
          You often won’t just have code that executes when a condition holds
          true, but also code that handles the other case. This alternate path
          is represented by the second arrow in the diagram. You can use the{" "}
          <strong>else</strong> keyword, together with <strong>if</strong>, to
          create two separate, alternative execution paths.
        </p>
        <pre>
          let number = "dog";
          {"\n"}
          if(!Number.isNaN(number)) &#123;
          {"\n"} let square = number * number;
          {"\n"} console.log(square);
          {"\n"}
          &#125;else&#123;
          {"\n"} console.log("Ce n'est pas un nombre"); //Ce n'est pas un nombre
          {"\n"}
          &#125;
        </pre>
        <p>
          If you have more than two paths to choose from, you can “chain”
          multiple if/else pairs together. Here’s an example:
        </p>
        <pre>
          let number = 0;
          {"\n"}
          if(number &#60; 0) &#123;
          {"\n"} console.log("Number is negative");
          {"\n"}
          &#125;else if(number &#62; 0)&#123;
          {"\n"} console.log("Number is positive");
          {"\n"}
          &#125;else&#123;
          {"\n"} console.log("Number is 0"); //Number is 0{"\n"}
          &#125;
        </pre>
        <p>
          Another way to write simple conditional statement is the use of
          ternary condition. Written as follow{" "}
          <strong>condition ? expr1 : expr2</strong> {"\n"}
          If condition is true, the operator returns the value of expr1;
          otherwise, it returns the value of expr2.
        </p>
        <pre>number > 0 ? "Number is positive" : "Number is negative" </pre>
        <p>
          It is often used in day to day JavaScript programming as a simple
          alternative to the standard if/else statement.
        </p>
        <p>
          <strong>YOUR TURN !!!</strong> Pikachu is getting stronger, he wants
          to learn a new move. However, pokemons are not allowed to have more
          than 4 different moves. Change the code to check if pikachu can indeed
          learn a new move.
        </p>
        <ul>
          <li>
            if moves have already 4 moves, bind to <code>result</code> the value{" "}
            <code>true</code>, otherwise bind the value
            <code>false</code>
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/qxvon4lw6q?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=2",
    title: "Control flow - loops",
    explanation: () => (
      <div className="content">
        <h1>Control flow, second Part</h1>
        <p>
          Consider a program that outputs all even numbers from 0 to 12. Here is
          one way to write this:
        </p>
        <pre>
          console.log(0); {"\n"}
          console.log(2); {"\n"}
          console.log(4); {"\n"}
          console.log(6); {"\n"}
          console.log(8); {"\n"}
          console.log(10); {"\n"}
          console.log(12);
        </pre>
        <p>
          That works, but the idea of writing a program is to make less work,
          not more. If we needed all even numbers less than 1,000, this approach
          would be unworkable. What we need is a way to run a piece of code
          multiple times. This form of control flow is called a loop.
        </p>
        <pre>
          let number = 0; {"\n"}
          while (number &#8804; 12) &#123;
          {"\n"} console.log(number);
          {"\n"} number = number + 2;
          {"\n"}
          &#125;
        </pre>
        <p>
          A statement starting with the keyword while creates a loop. The word
          <code>while</code> is followed by an expression in parentheses and
          then a statement, much like if. The loop keeps entering that statement
          as long as the expression produces a value that gives true when
          converted to Boolean.
        </p>
        <p>
          The number binding demonstrates the way a binding can track the
          progress of a program. Every time the loop repeats, number gets a
          value that is 2 more than its previous value. At the beginning of
          every repetition, it is compared with the number 12 to decide whether
          the program’s work is finished.
        </p>
        <p>
          Many loops follow the pattern shown in the while examples. First a
          “counter” binding is created to track the progress of the loop. Then
          comes a while loop, usually with a test expression that checks whether
          the counter has reached its end value. At the end of the loop body,
          the counter is updated to track progress.Because this pattern is so
          common, JavaScript and similar languages provide a slightly shorter
          and more comprehensive form, the <strong>for loop</strong>.
        </p>
        <pre>
          for (let number = 0; number &#8804; 12; number = number + 2) &#123;
          {"\n"} console.log(number);
          {"\n"}
          &#125;
        </pre>
        <p>
          This program is exactly equivalent to the earlier even-number-printing
          example. The only change is that all the statements that are related
          to the “state” of the loop are grouped together after for.
        </p>
        <p>
          The parentheses after a for keyword must contain two semicolons. The
          part before the first semicolon initializes the loop, usually by
          defining a binding. The second part is the expression that checks
          whether the loop must continue. The final part updates the state of
          the loop after every iteration. In most cases, this is shorter and
          clearer than a while construct.
        </p>
        <p>
          <strong>YOUR TURN !!!</strong>
        </p>
        <ul>
          <li>
            Change <code>filterPokemon</code> into a function returning a list
            of pokemons with less than 8 characters. Example,{" "}
            <code>filterPokemon(["doduo","roucarnage" ])</code> should return{" "}
            <code>["doduo"]</code>
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/0329r4rkrv?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests",
    title: "Time for some practice",
    explanation: () => (
      <div className="content">
        <h1>Time to attack</h1>
        <p>
          The evil rocket team has a new pokemon !!! A Racaillou !!! Thunder
          won't work on him as he is a ground pokemon. Modify the damage
          function to return 0 if thunder is used on a ground defender. Then
          modify it again to double the damage if the attacker uses surf on
          ground pokemons. OK destroy the rocket team by launching a surf on all
          members one by one !!!
        </p>
        <ul>
          <li>
            Create a function{" "}
            <code>damage(pikachu, rocketTeamMember, attackName)</code> with
            pikachu and rocketTeamMember being objects and attackName a string.
            If "thunder" is used on a "ground" type, damage returns 0. If "surf"
            is used on a ground type, the damage is doubled.
          </li>
          <li> Use surf on all team members using a loop.</li>
        </ul>
      </div>
    )
  },
  {
    url: "",
    title: "Const and let",
    explanation: () => (
      <div className="content">
        <h1>Const and let</h1>
        <p>
          The words <code>var</code> and <code>const</code> can also be used to
          create bindings, in a way similar to <code>let</code>.
        </p>
        <pre>
          var name = "Pierre";
          {"\n"}
          const greeting = "Hello ";
          {"\n"}
          console.log(greeting + name); // Hello Pierre
        </pre>
        <p>
          The first, <code>var</code> (short for “variable”), is the way
          bindings were declared in pre-2015 JavaScript. But you will see it
          less often because it has some confusing properties.
        </p>
        <p>
          The word <code>const</code> stands for constant. It defines a constant
          binding, which points at the same value for as long as it lives. This
          is useful for bindings that give a name to a value so that you can
          easily refer to it later.
        </p>
        <p>
          As a good practice, prefer <code>const</code> if you know your binding
          won't change in the lifetime of your program, otherwise use{" "}
          <code>let</code>.
        </p>
        <p>No practice this time...</p>
        <img src={ronflex} alt="ronflex" />
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/ox7xl02yrq?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests&highlights=3",
    title: "Template literal",
    explanation: () => (
      <div className="content">
        <h1>Template literal</h1>
        <p>
          Backtick-quoted strings have the ability to embed values. When you
          write something inside <code>$&#123;&#125;</code> in a template
          literal, its result will be computed, converted to a string, and
          included at that position.
        </p>
        <img src={literals} alt="Template literal example" />
        <p>
          <strong>YOUR TURN !!!</strong>
        </p>
        <ul>
          <li>
            change the function to return "Go &#60;the pokemon name&#62;, with
            your attack &#60;the pokemon attack + 5&#62;"
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/4rywynr394?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests",
    title: "Classes",
    explanation: () => (
      <div className="content">
        <h1>Classes</h1>
        <p className="is-italic">
          We enter a slightly more advanced side of programming and JavaScript.
          Since the format of this lecture is not appropriate for a complete
          understanding of the language, we will try to keep it simple. However,
          if you are looking for more depth, we strongly advise you to read{" "}
          <a href="https://eloquentjavascript.net"> Eloquent JavaScript</a>{" "}
          where most content of this tutorial come from.
        </p>
        <p>
          {" "}
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
          The <code>class</code> keyword starts a class declaration, which
          allows us to define a constructor and a set of methods all in a single
          place. Any number of methods may be written inside the declaration’s
          braces. The one named <strong>constructor</strong> is treated
          specially. It provides the actual constructor function, which will be
          bound to the name Rabbit. The <code>new</code> keyword allows us to
          call the constructor of the class.
        </p>
        <p className="is-italic">
          the binding called <code>this</code> in the constructor automatically
          points at the object that it was called on.
        </p>
        <p>
          A class definition can inherit from another class which means share
          its properties and methods. Although it is often used in React, we
          will not dig into inheritence for now.
        </p>
        <p>
          <strong>YOUR TURN !!!</strong> Pikachu and Miaouss are instances of
          the class Pokemon.
        </p>
        <ul>
          <li>
            Create a class <code>Pokemon</code> with the following properties:{" "}
            <code>name</code>, <code>attack</code>, <code>defense</code>,{" "}
            <code>speed</code> and <code>moves</code>
          </li>
        </ul>
      </div>
    )
  }
];
export default exos;
