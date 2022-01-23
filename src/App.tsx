import './App.less';
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "anthenticated-app/anthenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
