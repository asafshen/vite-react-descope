import { AuthProvider } from '@descope/react-sdk'
import './App.css'
import MyComponent from './MyComponent'

function App() {

  return (
		<AuthProvider
			projectId={import.meta.env.VITE_DESCOPE_PROJECT_ID!}
		>
			<>
				<h1>Vite + React</h1>
				<MyComponent />
			</>
		</AuthProvider>
  )
}

export default App
