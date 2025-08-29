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
import Navbar from './components/Navbar'
import About from './components/pages/About'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route
            path='/about'
            element={
              <About />
            }
          />
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
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/projects'
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
