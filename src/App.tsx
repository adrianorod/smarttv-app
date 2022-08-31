import { useEffect, useState } from 'react';
import getRailsService, { Rail } from './services/get-rails'
import RailComponent from './components/rail/rail.component';

import styles from './App.module.css';
import logo from './logo.png'

function App() {
  const [rails, setRails] = useState<Rail[]>([])

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
        <div className={styles.rails}>
          {rails.map((rail) => <RailComponent rail={rail} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
