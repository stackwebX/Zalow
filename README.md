# Zalow (Converted)

This folder contains a conversion of the original Emergent scaffold to your requested stack:

- Frontend: React + Bootstrap + React Router (Vite)
- Backend: Django + Django REST Framework + MySQL

## Quick start

### Backend
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
