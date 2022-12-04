import { useNavigate } from "react-router-dom";
import "./header.css";

type HeaderProps = {
  redirect?: string;
};

const Header = ({ redirect }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header style={{ textAlign: "center" }}>
      <div
        className="logo"
        style={{ cursor: redirect ? "pointer" : "default" }}
        onClick={() => redirect && navigate(redirect)}
      >
        <span translate="no">OldNews</span>
      </div>
    </header>
  );
};

export default Header;
