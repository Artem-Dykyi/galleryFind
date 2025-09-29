import { ImegeGalleryItem } from "./ImegeGelleryItem"

export const ImageGallery = ({ itemPhotos, onOpen }) => {
  return (
   <ul className="gallery">
    {itemPhotos.map((item) =>(
        <ImegeGalleryItem 
            key={item.id}
            photoUrl={item.webformatURL} 
            onClickPho = {() => onOpen(item.largeImageURL)}          
        />
    ))}
    
    </ul>
  );
};