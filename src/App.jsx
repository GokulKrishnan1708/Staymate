```jsx
import React, { useState } from "react";

import LoginPage from "./pages/LoginPage.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import Modal from "./components/Modal.jsx";

import DashboardPage from "./dashboard/DashboardPage.jsx";
import RoomsPage from "./rooms/RoomsPage.jsx";
import StudentsPage from "./students/StudentsPage.jsx";
import ComplaintsPage from "./complaints/ComplaintsPage.jsx";
import LeavePage from "./leave/LeavePage.jsx";
import NoticesPage from "./notices/NoticesPage.jsx";

import { initialData } from "./data/initialData.js";

export default function App() {
  // ==============================
  // AUTHENTICATION STATE
  // ==============================

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // ==============================
  // APPLICATION STATE
  // ==============================

  const [page, setPage] = useState("dashboard");
  const [data, setData] = useState(initialData);
  const [modal, setModal] = useState("");
  const [form, setForm] = useState({});

  // ==============================
  // LOGIN HANDLER
  // ==============================

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setPage("dashboard");
  };

  // ==============================
  // LOGOUT HANDLER
  // ==============================

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setPage("dashboard");
  };

  // ==============================
  // UPDATE COMPLAINT / LEAVE
  // ==============================

  const update = (key, id, status) => {
    setData((current) => ({
      ...current,
      [key]: current[key].map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      ),
    }));
  };

  // ==============================
  // FORM INPUT HANDLER
  // ==============================

  const change = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // ==============================
  // SAVE STUDENT / ROOM / NOTICE
  // ==============================

  const save = () => {
    const id = Date.now();

    // Add Student
    if (modal === "student") {
      setData((current) => ({
        ...current,

        students: [
          ...current.students,

          {
            id,
            name: form.name || "New Student",
            regNo: form.regNo || "Pending",
            department: form.department || "MCA",
            room: form.room || "Unassigned",
            phone: form.phone || "—",
            status: "Active",
          },
        ],
      }));
    }

    // Add Room
    if (modal === "room") {
      setData((current) => ({
        ...current,

        rooms: [
          ...current.rooms,

          {
            id,
         room: form.room || "R-" + id.toString().slice(-3),

            block: form.block || "Block A",
            floor: form.floor || "1",
            capacity: Number(form.capacity) || 4,
            occupied: 0,
          },
        ],
      }));
    }

    // Add Notice
    if (modal === "notice") {
      setData((current) => ({
        ...current,

        notices: [
          {
            id,
            title: form.title || "New Notice",
            body: form.body || "",
            posted: "Just now",
            author: "Admin",
          },

          ...current.notices,
        ],
      }));
    }

    setForm({});
    setModal("");
  };

  // ==================================================
  // SHOW LOGIN PAGE BEFORE SHOWING THE APPLICATION
  // ==================================================

  if (!isLoggedIn) {
    return (
      <LoginPage
        onLogin={handleLogin}
      />
    );
  }

  // ==================================================
  // MAIN STAYMATE APPLICATION
  // ==================================================

  return (
    <AppLayout
      page={page}
      setPage={setPage}
      user={user}
      onLogout={handleLogout}
    >
      {/* ==============================
          DASHBOARD
      ============================== */}

      {page === "dashboard" && (
        <DashboardPage
          data={data}
          setPage={setPage}
          openStudent={() => setModal("student")}
          openRoom={() => setModal("room")}
          openNotice={() => setModal("notice")}
        />
      )}

      {/* ==============================
          STUDENTS
      ============================== */}

      {page === "students" && (
        <StudentsPage
          students={data.students}
          onAdd={() => setModal("student")}
        />
      )}

      {/* ==============================
          ROOMS
      ============================== */}

      {page === "rooms" && (
        <RoomsPage
          rooms={data.rooms}
          onAdd={() => setModal("room")}
        />
      )}

      {/* ==============================
          COMPLAINTS
      ============================== */}

      {page === "complaints" && (
        <ComplaintsPage
          complaints={data.complaints}
          onStatus={(id, status) =>
            update(
              "complaints",
              id,
              status
            )
          }
        />
      )}

      {/* ==============================
          LEAVE
      ============================== */}

      {page === "leave" && (
        <LeavePage
          leaves={data.leaves}
          onStatus={(id, status) =>
            update(
              "leave",
              id,
              status
            )
          }
        />
      )}

      {/* ==============================
          NOTICES
      ============================== */}

      {page === "notices" && (
        <NoticesPage
          notices={data.notices}
          onAdd={() => setModal("notice")}
        />
      )}

      {/* ==============================
          MODAL
      ============================== */}

      {modal && (
        <Modal
          title={
            modal === "student"
              ? "Add Student"
              : modal === "room"
              ? "Add Room"
              : "Post Notice"
          }
          onClose={() => {
            setModal("");
            setForm({});
          }}
        >
          <form
            className="form-grid"
            onSubmit={(event) => {
              event.preventDefault();
              save();
            }}
          >
            {/* ==============================
                STUDENT FORM
            ============================== */}

            {modal === "student" && (
              <>
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={change}
                  required
                />

                <Field
                  label="Register Number"
                  name="regNo"
                  value={form.regNo}
                  onChange={change}
                />

                <Field
                  label="Department"
                  name="department"
                  value={form.department}
                  onChange={change}
                />

                <Field
                  label="Room"
                  name="room"
                  value={form.room}
                  onChange={change}
                />

                <Field
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={change}
                />
              </>
            )}

            {/* ==============================
                ROOM FORM
            ============================== */}

            {modal === "room" && (
              <>
                <Field
                  label="Room Number"
                  name="room"
                  value={form.room}
                  onChange={change}
                  required
                />

                <Field
                  label="Block"
                  name="block"
                  value={form.block}
                  onChange={change}
                />

                <Field
                  label="Floor"
                  name="floor"
                  value={form.floor}
                  onChange={change}
                />

                <Field
                  label="Capacity"
                  name="capacity"
                  type="number"
                  value={form.capacity}
                  onChange={change}
                />
              </>
            )}

            {/* ==============================
                NOTICE FORM
            ============================== */}

            {modal === "notice" && (
              <>
                <Field
                  label="Notice Title"
                  name="title"
                  value={form.title}
                  onChange={change}
                  required
                />

                <label className="field full-field">
                  <span>Notice Details</span>

                  <textarea
                    name="body"
                    value={form.body || ""}
                    onChange={change}
                    required
                    placeholder="Write the announcement..."
                  />
                </label>
              </>
            )}

            {/* ==============================
                MODAL BUTTONS
            ============================== */}

            <div className="form-actions full-field">
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setModal("");
                  setForm({});
                }}
              >
                Cancel
              </button>

              <button
                className="primary-button"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      )}
    </AppLayout>
  );
}

// ==================================================
// REUSABLE FORM FIELD
// ==================================================

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <label className="field">
      <span>{label}</span>

      <input
        name={name}
        type={type}
        value={value || ""}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
```
