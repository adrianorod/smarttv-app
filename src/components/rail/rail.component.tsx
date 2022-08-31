import React from 'react'
import { Rail } from '../../services/get-rails'

import styles from './rail.module.css'

type RailProps = {
  rail: Rail
}

const RailComponent: React.FC<RailProps> = ({ rail }) => {
  return (
    <div className={styles.rail}>
      <p className={styles.cardTitle}>{rail.title}</p>
      <ul className={styles.cardList}>
        {rail.cards.map((card) => (
          <li
            className={styles.card}
          >{card.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RailComponent
