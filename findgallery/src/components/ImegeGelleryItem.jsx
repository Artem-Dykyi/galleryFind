export const ImegeGalleryItem = ({ photoUrl, onClickPho}) => {

    
  return (
    <li className="gallery-item" onClick={onClickPho}>
      <img src={photoUrl} alt="" className="gallery-photo-it"/>
    </li>
  );
};