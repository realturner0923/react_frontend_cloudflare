import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Relative path works perfectly both locally (via Vite proxy) 
    // and in production (via Cloudflare Pages Functions)
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => console.error("Error fetching data:", err))
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My Stateless App Frontend</h1>
      {loading ? (
        <p>Connecting to backend...</p>
      ) : (
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <p><strong>Backend Status:</strong> {data.status}</p>
          <p><strong>Database:</strong> {data.database}</p>
        </div>
      )}
    </div>
  )
}

export default App
