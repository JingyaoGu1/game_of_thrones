import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [allItems, setAllItems] = useState([]); // State for storing all characters

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://thronesapi.com/api/v2/Characters`)
      setItems(result.data)
      setAllItems(result.data)
      setIsLoading(false)

    }
    fetchItems()
  },[query])

  useEffect(() => {
    // Function to filter characters by query
    const filterItems = (query) => {
      if (!query) {
        setItems(allItems); // If query is empty, show all characters
      } else {
        const filtered = allItems.filter(item =>
          item.fullName.toLowerCase().includes(query.toLowerCase())
        );
        setItems(filtered);
      }
    };

    filterItems(query);
  }, [query, allItems]);

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
