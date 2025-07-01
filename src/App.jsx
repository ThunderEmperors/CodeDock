import './App.css'
import ElementBuilder from './components/snippetDeck/ElementBuilder'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import { PrivateRoute } from './PrivateRoute'
import LoginPage from './components/pages/Login'
import RegisterPage from './components/pages/Register'
import Dashboard from './components/pages/Dashboard'
import { PublicRoute } from './PublicRoute'
import ProjectsPage from './components/projectsPage/ProjectsPage'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
            <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path='/project'
            element={
              <PrivateRoute>
                <ElementBuilder />
              </PrivateRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <ProjectsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
