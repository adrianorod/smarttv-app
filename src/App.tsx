import { useEffect, useState } from 'react';
import getRailsService, { Rail } from './services/get-rails'
import RailComponent from './components/rail/rail.component';
import useNavigation from './hooks/use-navigation';

import styles from './App.module.css';
import logo from './logo.png'

function App() {
  const [rails, setRails] = useState<Rail[]>([])

  const { focusedIndex } = useNavigation({ isActive: true, direction: 'vertical', limit: rails.length - 1 })

  useEffect(() => {
    const getRails = async () => {
      const data = await getRailsService()
      setRails(data)
    }

    getRails()
  }, [])

  return (
    <div className={styles.appContainer}>
      <header>
        <img src={logo} alt="Star Wars" />
      </header>
      <main className={styles.mainContent}>
        <div className={styles.rails} style={{ transform: `translateY(-${425 * focusedIndex}px)` }}>
          {rails.map((rail, index) => <RailComponent rail={rail} isFocused={focusedIndex === index} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
