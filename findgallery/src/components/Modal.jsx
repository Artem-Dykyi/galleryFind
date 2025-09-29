export const Modal = ({ largePhoto, onClose}) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" >
        <img src={largePhoto} alt="" className="modal-photo"/>
      </div>
    </div>
  );
};