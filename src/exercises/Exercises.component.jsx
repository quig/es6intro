import React from "react";
import oak from "../assets/professoroak.png";

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
            Have fun and please, don't choose <code>'Bulbasaur'</code> :/
          </p>
        </div>
      </div>
    )
  },
  {
    url: "https://codesandbox.io/embed/v6lyo318m0",
    explanation: () => (
      <div>
        <h1>Variables and Pokemon</h1>
        <p>
          First, let's create some variables and bind to them values. Choose
          your first pokemon among <code>'Bulbasaur'</code>,{" "}
          <code>'Charmander'</code>
          and <code>'Squirtle'</code>. Then give them a <strong>number</strong>{" "}
          representing their initial attack points (below 30). Finally using{" "}
          <code>true</code> or <code>false</code>, tell us if your pokemon is
          the best.
        </p>
      </div>
    )
  },
  {
    url: "https://codesandbox.io/embed/jjvkr0xmo9",
    explanation: () => (
      <div>
        <h1>A bit of maths</h1>
        <p>
          Pikachu wants to use thunder on the evil Meowth. Thunder is a powerful
          attack with a power of 120 !!! Using the folowing formula{" "}
          <pre> Damage = Power * Attack / Defense</pre> Calculate the damage
          done on the Meowth.
        </p>
      </div>
    )
  },
  {
    url: "https://codesandbox.io/embed/8x33rv4o50",
    explanation: () => (
      <div>
        <h1>Everything is Object !!!</h1>
        <p>
          Pikachu is super cool, he has plenty of attacks and also statistics
          such as health points, attack, defense, speed. We could create several
          variables for each but instead, let's create an{" "}
          <strong>Object</strong> containing all we need. I want a Pikachu with
          a 100 attack points, 80 defense points, a speed of 110 and a list of
          attack moves including "thunder", "surf" and "fly".
        </p>
      </div>
    )
  },
  {
    url: "https://codesandbox.io/embed/v3154o8495",
    explanation: () => (
      <div>
        <h1>Functions</h1>
        <p>
          We could Calculate the damage every time we need but the actual
          formula is much more complexe. Instead create a function{" "}
          <code>damage(attacker, defender, move)</code> and make us of it to
          launch thunder on Meowth.
        </p>
      </div>
    )
  },
  {
    url: "https://codesandbox.io/embed/0329r4rkrv",
    explanation: () => (
      <div>
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
