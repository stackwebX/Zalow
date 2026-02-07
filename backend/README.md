# Zalow Backend (Django + DRF + MySQL)

This backend replaces the original FastAPI + MongoDB service with Django REST Framework + MySQL.

## Run locally

1) Create & activate a venv
2) Install deps
```bash
pip install -r requirements.txt
```

3) Create a `.env` from `.env.example` and fill MySQL values.

4) Run migrations + start server
```bash
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

## API

- `GET /api/` -> Hello World
- `GET /api/status/` -> list status checks
- `POST /api/status/` -> create `{ "client_name": "..." }`
