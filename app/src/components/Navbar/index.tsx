import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MelbirdsLogo from "../../assets/logo.png";
import "./Navbar.css";
import { ErrorBoundary } from "../ErrorBoundary";

export function Navbar() {
  const [healthStatus, setHealthStatus] = useState({});

  const HandleClick = () => {
    try {
      if ((healthStatus as any).health !== "ok") {
        return alert("Unhealthy \ud83d\ude22");
      }

      return alert("Healthy \ud83d\ude0a");
    } catch {
      alert("Oops something went wrong");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/health")
      .then((response) => response.json())
      .then(setHealthStatus)
      .catch(console.error);
  }, []);

  return (
    <div className="Navbar">
      <nav>
        <div>
          <Link to="/">
            <img src={MelbirdsLogo} className="Nav-logo" alt="logo" />
          </Link>
        </div>
        <ErrorBoundary>
          <div className="NavLinks-List">
            <ul>
              <li>
                <Link to="/" reloadDocument>Home</Link>
              </li>
              <li>
                <Link to="/random" reloadDocument>Random Bird</Link>
              </li>
              <li>
                <a href="#health-check" onClick={HandleClick}>
                  Health Check
                </a>
              </li>
            </ul>
          </div>
        </ErrorBoundary>
      </nav>
    </div>
  );
}
