import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const axios = require('axios').default;

function AlbumView() {
    const navigate = useNavigate()
    const { albumId } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        axios.baseURL = 'https://itunes.apple.com'
        axios.get(`/lookup?id=${albumId}&entity=song`)
            .then((response) => {
                setAlbumData(response.data.results)
            })
    }, [albumId])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')
    const renderSongs = justSongs.map((song, i) => {
        return (
            <div>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>The albumId passed was: {albumId}</h2>
            {renderSongs}
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate('/')}>home</button>
        </div>
    )
}

export default AlbumView