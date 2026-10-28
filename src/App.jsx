import { useEffect, useMemo, useState } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/searchbox/searchbox.component';
import './App.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('loading');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMonsters() {
      setStatus('loading');

      try {
        const response = await fetch(USERS_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error('Unable to load monsters');
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Unexpected API response');
        }

        setMonsters(data);
        setStatus('success');
      } catch (error) {
        if (!controller.signal.aborted) {
          setStatus('error');
        }
      }
    }

    loadMonsters();
    return () => controller.abort();
  }, [retryCount]);

  const filteredMonsters = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(query)
    );
  }, [monsters, searchTerm]);

  return (
    <main className="app-container">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        value={searchTerm}
        onChangeHandler={(event) => setSearchTerm(event.target.value)}
      />

      {status === 'loading' && <p role="status">Loading monsters…</p>}
      {status === 'error' && (
        <div role="alert" className="app-feedback">
          <p>We couldn't load the monsters. Check your connection and try again.</p>
          <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
            Try again
          </button>
        </div>
      )}
      {status === 'success' && (
        filteredMonsters.length > 0
          ? <CardList monsters={filteredMonsters} />
          : <p role="status">No monsters match your search.</p>
      )}
    </main>
  );
}

export default App;
