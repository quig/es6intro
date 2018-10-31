import React from 'react'

const timeToAttack = {
  url:
    'https://codesandbox.io/embed/0329r4rkrv?codemirror=1&expanddevtools=1&hidenavigation=1&previewwindow=tests',
  title: 'Practice time',
  explanation: () => (
    <div className="content">
      <h1>Practice time</h1>
      <p>
        The evil rocket team has a new pokemon !!! A Racaillou !!! Thunder won't
        work on him as he is a ground pokemon. Modify the damage function to
        return 0 if thunder is used on a ground defender. Then modify it again
        to double the damage if the attacker uses surf on ground pokemons. Finally, 
        destroy the rocket team by launching a surf on all members one by one
        !!!
      </p>
      <ul>
        <li>
          Create a function{' '}
          <code>damage(pikachu, rocketTeamMember, attackName)</code> with
          <code>pikachu</code> and <code>rocketTeamMember</code> being objects and <code>attackName</code> a string. If
          "thunder" is used on a "ground" type, damage returns 0. If "surf" is
          used on a ground type, the damage is doubled.
        </li>
        <li> Use surf on all team members using a loop.</li>
      </ul>
    </div>
  ),
}

export default timeToAttack
