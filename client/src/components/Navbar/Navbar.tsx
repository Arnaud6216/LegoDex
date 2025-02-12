import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleBackToCategory = () => {
    navigate("/");
  };

  return (
    <>
      <header className="navbar-container">
        <button type="button" onClick={handleBackToCategory}>
          Retour aux catégories
        </button>
      </header>
    </>
  );
}

export default Navbar;
