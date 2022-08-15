import { useState, useRef } from 'react'
import AppContainer from './components/AppContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArtistView from './components/ArtistView';
import AlbumView from './components/AlbumView';

const axios = require('axios').default;

function App(){
    let [data, setData] = useState([])
    let searchInput = useRef('')
    const handleSearch = function(event, term) {
        event.preventDefault();
        // Axios allows us to bypass the CORs policy so we can send requests to cross domain urls
        axios.baseURL = 'https://itunes.apple.com'
        if(term) {
          axios.get(`/search?term=${term}`)
            .then((response) => {
                setData(response.data.results)
                
              })
        }
    }

    return (
        <Router>
          <Routes>
            <Route path='/' element={<AppContainer data={data} handleSearch={handleSearch} searchInput={searchInput} />} />
            <Route path="/artist/:artistId" element={<ArtistView />} />
            <Route path="/album/:albumId" element={<AlbumView />} />
          </Routes>
        </Router>
    )
}

export default App
