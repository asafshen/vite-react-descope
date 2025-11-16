import { AuthProvider } from "@descope/react-sdk";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <AuthProvider
      projectId={import.meta.env.VITE_DESCOPE_PROJECT_ID!}
      baseUrl={import.meta.env.VITE_DESCOPE_BASE_URL}
	  baseStaticUrl={import.meta.env.VITE_DESCOPE_BASE_STATIC_URL}
    >
      <>
        <h1>Vite + React + Descope</h1>
        <MyComponent />
      </>
    </AuthProvider>
  );
}

export default App;
