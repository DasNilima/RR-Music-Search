import GalleryItem from './GalleryItem'

const Gallery = function(props) {
    let galleryItems = props.data.map ((item, i ) => {
        return <GalleryItem key={i} item={item} />
    })
    return (
        <div>
            {galleryItems}
        </div>
    )
}
export default Gallery

