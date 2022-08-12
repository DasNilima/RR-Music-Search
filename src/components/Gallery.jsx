import { useContext } from 'react'
import GalleryItem from './GalleryItem'
import { DataContext } from '../context/DataContext'

const Gallery = () => {
    let dataContext = useContext(DataContext)
    let galleryItems = dataContext.map ((item, i ) => {
        return <GalleryItem key={i} item={item} />
    })
    return (
        <div>
            {galleryItems}
        </div>
    )
}
export default Gallery

