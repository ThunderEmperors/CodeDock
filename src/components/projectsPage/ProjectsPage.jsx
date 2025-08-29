import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newProjectName, setNewProjectName] = useState('');

  const token = localStorage.getItem('token');
  const API_URL = import.meta.env.VITE_API_URL + '/snippets';

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch snippets');
      setProjects(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newProjectName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create project');
      setProjects([...projects, data.data]);
      setNewProjectName('');
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteProject = async (id) => {
    try {
      const res = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete project');
      setProjects(projects.filter((project) => project._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Projects</h1>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading && <p>Loading projects...</p>}

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="New project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button onClick={createProject} disabled={!newProjectName}>
          Create
        </button>
      </div>

      <ul>
        {projects.map((project) => (
          <>
          <Link to={`/project`} state={{ id : project._id }}>
          <li key={project._id} style={{ marginBottom: '0.5rem' }}>
            {project.name}
          </li>
          </Link>
          <button
          onClick={() => deleteProject(project._id)}
          style={{ marginLeft: '1rem' }}
        >
          Delete
        </button>
        </>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
