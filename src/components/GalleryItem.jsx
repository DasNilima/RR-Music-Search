import { useState } from 'react'

export default function GalleryItem(props){
    let [view, setView] = useState(false)
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>Song Title: {props.songTitle}</p>
            <p>Artist: {props.artist}</p>
            {view ? <p>Artist: {props.artist}</p> : <></>}
        </div>
    )
}

