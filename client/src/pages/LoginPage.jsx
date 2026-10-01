import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);

    try {
      if (isSignup) {
        if (!name.trim()) {
          setError('Please enter your name.');
          setSubmitting(false);
          return;
        }
        await signup(name, email, password);
        setSuccess('Account created successfully! Redirecting...');
      } else {
        await login(email, password);
        setSuccess('Login successful! Redirecting...');
      }
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
        <p className="subtitle">
          {isSignup ? 'Join BrightSmile today' : 'Sign in to BrightSmile'}
        </p>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting
              ? (isSignup ? 'Creating Account...' : 'Signing In...')
              : (isSignup ? 'Sign Up' : 'Login')
            }
          </button>
        </form>

        <div className="auth-divider">or</div>

        <p style={{ fontSize: '15px' }}>
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <span className="auth-link" onClick={() => { setIsSignup(!isSignup); setError(''); setSuccess(''); }}>
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </p>

        <Link to="/" className="auth-link" style={{ fontSize: '13px', display: 'block', marginTop: '16px', opacity: 0.6 }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
