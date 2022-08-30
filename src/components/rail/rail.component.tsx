import React from 'react'
import useNavigation from '../../hooks/use-navigation'
import { Rail } from '../../services/get-rails'

import styles from './rail.module.css'

type RailProps = {
  rail: Rail
  isFocused: boolean
}

const RailComponent: React.FC<RailProps> = ({ rail, isFocused }) => {
  const { focusedIndex } = useNavigation({
    isActive: isFocused,
    direction: 'horizontal',
    limit: rail.cards.length - 1,
  })

  return (
    <div className={`${styles.rail} ${isFocused ? styles.railFocused : ''}`}>
      <p className={styles.cardTitle}>{rail.title}</p>
      <ul className={styles.cardList} style={{ transform: `translateX(-${284 * focusedIndex}px)`}}>
        {rail.cards.map((card, index) => (
          <li
            className={`${styles.card} ${isFocused && focusedIndex === index ? styles.cardFocused : ''}`}
          >{card.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RailComponent
