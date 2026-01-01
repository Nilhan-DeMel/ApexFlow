# ApexFlow Architecture Map

- **Frontend:** /src/frontend (Micro-modular HTML/JS)
- **Backend:** /src/backend (Stateless Node.js)
- **Core Modules:**
  - `auth_service.js`: Handles user identity and session management.
- **Routing:** /src/backend/routes.js
- **Brain:** /.context/ (Read-Only for Workers, Write for Architects)
