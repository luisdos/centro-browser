import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [url, setUrl] = useState("https://wikipedia.org");
  const iframeRef = useRef(null);

  const handleNavigate = (newUrl) => {
    setUrl(newUrl);
  };

  const handleReload = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };
  return (
   <div className="app">
      <Navbar
        currentUrl={url}
        onNavigate={handleNavigate}
        onReload={handleReload}
      />
      <iframe
        ref={iframeRef}
        src={url}
        className="webview"
        title="Webview"
      ></iframe>
    </div>
  );
}

export default App;
