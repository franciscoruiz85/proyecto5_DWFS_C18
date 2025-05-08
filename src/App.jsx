import Charts from "./components/Charts"
import { ErrorBoundary } from "./components/ErrorBoundary"

function App() {
  return (
    <>
      <ErrorBoundary>
        <Charts />
      </ErrorBoundary>
    </>
  )
}

export default App
