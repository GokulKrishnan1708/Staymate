export const initialData = {
  students: [
    { id: 1, name: 'Arun Kumar', regNo: '23MCA014', department: 'MCA', room: 'A-204', phone: '98765 43210', status: 'Active' },
    { id: 2, name: 'Priya S.', regNo: '23MCA031', department: 'MCA', room: 'C-105', phone: '98765 12098', status: 'Active' },
    { id: 3, name: 'Rahul M.', regNo: '23BCA118', department: 'BCA', room: 'B-208', phone: '99887 12345', status: 'Active' }
  ],
  rooms: [
    { id: 1, room: 'A-101', block: 'Block A', floor: '1', capacity: 4, occupied: 4 },
    { id: 2, room: 'A-204', block: 'Block A', floor: '2', capacity: 4, occupied: 2 },
    { id: 3, room: 'B-208', block: 'Block B', floor: '2', capacity: 3, occupied: 3 },
    { id: 4, room: 'C-105', block: 'Block C', floor: '1', capacity: 4, occupied: 2 }
  ],
  complaints: [
    { id: 1, issue: 'Ceiling fan not working', student: 'Rahul M.', location: 'B-208', submitted: 'Today, 2:10 PM', priority: 'Medium', status: 'Pending' },
    { id: 2, issue: 'Water leakage', student: 'Arun K.', location: 'A-104', submitted: 'Today, 11:30 AM', priority: 'High', status: 'In Progress' },
    { id: 3, issue: 'Wi-Fi connectivity', student: 'Priya S.', location: 'C-105', submitted: 'Yesterday', priority: 'Low', status: 'Resolved' }
  ],
  leaves: [
    { id: 1, student: 'Priya S.', from: '2026-10-02', to: '2026-10-04', reason: 'Family function', applied: 'Today', status: 'Pending' },
    { id: 2, student: 'Arun K.', from: '2026-10-05', to: '2026-10-06', reason: 'Personal', applied: 'Yesterday', status: 'Approved' }
  ],
  notices: [
    { id: 1, title: 'Water maintenance', body: 'Water maintenance is scheduled today from 4:00 PM to 5:00 PM.', posted: 'Today', author: 'Admin' },
    { id: 2, title: 'Monthly hostel meeting', body: 'All residents are requested to attend the monthly hostel meeting.', posted: 'Yesterday', author: 'Warden' }
  ]
};
