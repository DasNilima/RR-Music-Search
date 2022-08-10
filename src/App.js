import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://itunes.apple.com/search?term=" + { search })
      const resData = await response.json()
      if (resData.resultCount > 0) {
        setData(resData.results)
      }
      else {
        setMessage("Not found")
      }
    }
    if (search)
    fetchData()
  }, [search])
  
    return (
        <div>
        <SearchBar handleSearch={setSearch} />
            {message}
        <Gallery songs={data}/>
        </div>
    )
}

export default App


