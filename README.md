# StayMate — React + Vite frontend

A modular React frontend prototype for a hostel management system. Each activity is separated into its own page/module so tasks can be assigned and developed independently.

## Modules
- `src/dashboard/` — dashboard metrics, quick actions, occupancy and recent activity
- `src/rooms/` — room listing, search, add-room workflow
- `src/students/` — student listing, search, add-student workflow
- `src/complaints/` — complaint list and status updates
- `src/leave/` — leave applications and approve/reject actions
- `src/notices/` — notice listing and post-notice workflow
- `src/layouts/` — shared navigation, header, theme toggle
- `src/components/` — reusable modal, table and search toolbar
- `src/data/initialData.js` — demo data, ready to replace with API calls

## Run
Requires Node.js 18+.

```bash
npm install
npm run dev
```

If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`.

## Notes
This is a frontend prototype. Data is held in React state and resets on refresh. Authentication, persistence, role permissions and backend API integration are not implemented yet. Replace demo state with your Express/MongoDB API when the backend is ready.
