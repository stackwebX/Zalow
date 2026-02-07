import { useEffect, useState } from 'react'
import { createStatus, listStatus } from '../services/api.js'

export default function Status() {
  const [items, setItems] = useState([])
  const [clientName, setClientName] = useState('')
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')

  async function refresh() {
    setErr('')
    setLoading(true)
    try {
      const data = await listStatus()
      setItems(data)
    } catch (e) {
      setErr(e.message || String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { refresh() }, [])

  async function onSubmit(e) {
    e.preventDefault()
    setErr('')
    if (!clientName.trim()) return
    try {
      await createStatus(clientName.trim())
      setClientName('')
      await refresh()
    } catch (e) {
      setErr(e.message || String(e))
    }
  }

  return (
    <div>
      <h2 className="mb-3">Status Checks</h2>

      <form className="row g-2 mb-3" onSubmit={onSubmit}>
        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="Client name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100" type="submit">
            Create
          </button>
        </div>
      </form>

      {err && <div className="alert alert-danger">{err}</div>}

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Client</th>
                <th>Timestamp</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {items.map((x) => (
                <tr key={x.id}>
                  <td>{x.client_name}</td>
                  <td>{new Date(x.timestamp).toLocaleString()}</td>
                  <td className="text-muted" style={{maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{x.id}</td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-muted">No status checks yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
