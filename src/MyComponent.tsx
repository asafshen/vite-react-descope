import { useUser,useSession, Descope } from "@descope/react-sdk"

function MyComponent() {
	const { isAuthenticated, isSessionLoading} = useSession();
	const { isUserLoading } = useUser();

	const isLoading = isSessionLoading || isUserLoading;

	if (isLoading) {
		return <div>Loading...</div>;
	}
  return (
    <div>
      <h2>MyComponent</h2>
			{isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
			<Descope flowId="sign-up-or-in" />

    </div>
  )
}

export default MyComponent
