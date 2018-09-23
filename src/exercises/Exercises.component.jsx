import React from "react";
import oak from "../assets/professoroak.png";
import exo1 from "../assets/exo1-example.png";

const exos = [
  {
    url: "",
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
            outcome. Tests are automaticcaly run when the code is being
            modified. You can also open the codesandbox in another tab, then by
            creating an account, you can keep a copy of your work.
          </p>
          <p>
            Have fun and please, don't choose <code>'Bulbizarre'</code> :/
          </p>
        </div>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/v6lyo318m0?verticallayout=1&codemirror=1&previewwindow=tests&highlights=2,3,4",
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
        <img src={exo1} alt="Example 1" />
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
      "https://codesandbox.io/embed/jjvkr0xmo9?verticallayout=1&codemirror=1&previewwindow=tests&highlights=6",
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
      "https://codesandbox.io/embed/8x33rv4o50?verticallayout=1&codemirror=1&previewwindow=tests",
    explanation: () => (
      <div className="content">
        <h1>Everything is Object !!!</h1>
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
          let namePikachu = "Pikachu"; let attackPikcahu = 100; let
          defensePikachu = 20; let nameMiaouss = "Miaouss"; let attackMiaouss =
          50; ...
        </pre>
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
            a list of <code>moves</code> moves including{" "}
            <code>'thunder, 'surf','fly'</code>.
          </li>
        </ul>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/v3154o8495?verticallayout=1&codemirror=1&previewwindow=tests",
    explanation: () => (
      <div className="content">
        <h1>Functions</h1>
        <p>
          We could Calculate the damage every time we need but the actual
          formula is much more complexe. Instead create a function{" "}
          <code>damage(attacker, defender, move)</code> and make us of it to
          launch thunder on Meowth.
        </p>
        <div>
          <ul>
            <li>
              Create a function <code>damage(attacker, defender, move)</code>{" "}
              calculating the damage (number)
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    url:
      "https://codesandbox.io/embed/0329r4rkrv?verticallayout=1&codemirror=1&previewwindow=tests",
    explanation: () => (
      <div className="content">
        <h1>Time to attack</h1>
        <p>
          The evil rocket team has a new pokemon !!! A geodude !!! Thunder won't
          work on him as he is a ground pokemon. Modify the damage function to
          return 0 if thunder is used on a ground defender. Then modify it again
          to double the damage if the attacker uses surf. OK destroy the rocket
          team by launching a surf on all members one by one !!!
        </p>
      </div>
    )
  }
];
export default exos;
