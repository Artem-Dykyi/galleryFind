export const Searchbar = ({ submitChange, valueSearch, onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="form-button">
          <span className="button-label">Search</span>
        </button>

        <input
          value={valueSearch}
          className="inputForm"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={submitChange}
        />
      </form>
    </header>
  );
};
