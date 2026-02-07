const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000/api";

export async function listStatus() {
  const res = await fetch(`${API_BASE}/status/`);
  if (!res.ok) throw new Error(`Failed to load status list (${res.status})`);
  return res.json();
}

export async function createStatus(client_name) {
  const res = await fetch(`${API_BASE}/status/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client_name }),
  });
  if (!res.ok) throw new Error(`Failed to create status (${res.status})`);
  return res.json();
}
