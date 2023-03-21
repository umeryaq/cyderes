import { ErrorBoundry, QueryProvider } from "components";
import RouteComponent from "routes";

function App() {
  return (
    <QueryProvider>
      <ErrorBoundry>
        <RouteComponent />
      </ErrorBoundry>
    </QueryProvider>
  );
}

export default App;
