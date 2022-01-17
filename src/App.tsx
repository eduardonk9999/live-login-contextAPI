import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Login } from "./components/Login"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { AuthProvider } from "./context/AuthProvider"

function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <Switch>
        <Route path="/profile">
          <ProtectedLayout>
            <h2>Olá Sou o Profile</h2>
          </ProtectedLayout>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
     </BrowserRouter>
   </AuthProvider>
  )
}

export default App
