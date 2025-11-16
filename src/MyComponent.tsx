import { useUser, useSession, Descope } from "@descope/react-sdk";

function MyComponent() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { isUserLoading, user } = useUser();

  const isLoading = isSessionLoading || isUserLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Hi there</h2>
      {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
	  {isAuthenticated && user && (
		<div>
		  <p>User ID: {user.userId}</p>
		  <p>User Email: {user.email}</p>
		  <code>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		  </code>
		</div>
	  )}
      {!isAuthenticated && <Descope flowId="sign-up-or-in" />}
    </div>
  );
}

export default MyComponent;
