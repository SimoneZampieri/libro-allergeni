import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const DefLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-yellow-600 p-4 text-cennter text-white">
        <div className="flex h-16 justify-center items-center">
          <img
            src="/logo-spiga-removebg-preview.png"
            alt="Logo"
            className="h-full object-contain"
          />
        </div>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-yellow-600 p-4 text-center text-white">
        <p>Designed By:</p>
        <a
          href="https://github.com/SimoneZampieri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </footer>
    </div>
  );
};

export default DefLayout;
