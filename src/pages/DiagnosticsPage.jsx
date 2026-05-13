import React, { useState, useEffect } from 'react';

export default function DiagnosticsPage() {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    imageLoadable: false,
    corsIssue: false,
    testMessage: ''
  });

  useEffect(() => {
    // Test if we can load an external image
    const testImage = new Image();
    testImage.onload = () => {
      setStatus(prev => ({ ...prev, imageLoadable: true }));
    };
    testImage.onerror = () => {
      setStatus(prev => ({ ...prev, corsIssue: true }));
    };
    testImage.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg';

    // Check network status
    const handleOnline = () => setStatus(prev => ({ ...prev, online: true }));
    const handleOffline = () => setStatus(prev => ({ ...prev, online: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{
      padding: '2rem',
      background: '#0a0a0a',
      color: '#00b366',
      minHeight: '100vh',
      fontFamily: 'monospace'
    }}>
      <h1>Diagnostics: Image Loading</h1>
      <hr />

      <div style={{ marginBottom: '2rem' }}>
        <h2>Status Check</h2>
        <p>Online: <strong>{status.online ? '✓ YES' : '✗ NO'}</strong></p>
        <p>External Images Loadable: <strong>{status.imageLoadable ? '✓ YES' : '✗ NO'}</strong></p>
        <p>CORS Issue: <strong>{status.corsIssue ? '✓ YES - Images blocked' : '✗ NO'}</strong></p>
      </div>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#111', borderRadius: '4px' }}>
        <h2>Common Causes</h2>
        <ul>
          <li>{!status.online && '🔴 No internet connection - Check WiFi/Network'}</li>
          <li>{status.corsIssue && '🔴 CORS or firewall blocking images - Try VPN or different network'}</li>
          <li>{!status.imageLoadable && !status.online && '🔴 Both issues present'}</li>
          {status.imageLoadable && <li>✅ Images should load fine</li>}
        </ul>
      </div>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#111', borderRadius: '4px' }}>
        <h2>Solution</h2>
        <p>If images won't load:</p>
        <ol>
          <li>Check your internet connection</li>
          <li>Check if you're behind a firewall/proxy blocking external images</li>
          <li>Try using a VPN or different network</li>
          <li>Try accessing Wikimedia Commons directly in your browser</li>
        </ol>
      </div>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#111', borderRadius: '4px' }}>
        <h2>Test Image</h2>
        <p>This will show if the image can load:</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg"
          alt="Test rainforest image"
          style={{
            maxWidth: '100%',
            maxHeight: '400px',
            marginTop: '1rem',
            borderRadius: '4px',
            border: '2px solid #00b366'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            const msg = document.getElementById('error-msg');
            if (msg) msg.style.display = 'block';
          }}
        />
        <div id="error-msg" style={{ display: 'none', color: '#ff6b6b', marginTop: '1rem' }}>
          ✗ Image failed to load. Check internet connection or network restrictions.
        </div>
      </div>
    </div>
  );
}

