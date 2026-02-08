import { AuthProvider } from "@descope/react-sdk";
import "./App.css";
import MyComponent from "./MyComponent";

// localStorage.setItem("__descope_activity_refresh", "true");

function App() {
  return (
    <AuthProvider
      projectId={import.meta.env.VITE_DESCOPE_PROJECT_ID!}
      baseUrl={import.meta.env.VITE_DESCOPE_BASE_URL}
	    baseStaticUrl={import.meta.env.VITE_DESCOPE_BASE_STATIC_URL}
    >
      <>
        <h1>Vite + React + Descope</h1>
        <h2>{import.meta.env.VITE_ENV_LABEL || 'Development'}</h2>
        <h3><a href={import.meta.env.VITE_APP_URL || window.location.origin}>{import.meta.env.VITE_APP_URL || window.location.origin}</a></h3>
        <MyComponent />
      </>
    </AuthProvider>
  );
}

export default App;
