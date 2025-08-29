import { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  const { loading, user } = useAuth();

  useEffect(() => {
    if(!loading && user){
      navigate('/', { replace: true }); 
    }
  }, [loading, user]);



  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Login
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Login
        </button>
      </form>

      <div className="text-center text-gray-600 text-sm mt-4">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-blue-500 hover:underline font-medium"
        >
          Create one
        </Link>
      </div>

    </div>
  );
}
