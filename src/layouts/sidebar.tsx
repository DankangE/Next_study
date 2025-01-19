"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSettings, FiHelpCircle } from "react-icons/fi";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineBarChart,
} from "react-icons/ai";
import { BiPackage, BiBox } from "react-icons/bi";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarStyle: React.CSSProperties = {
    position: "relative", // 화면에 고정
    top: 0, // 상단 고정
    left: 0, // 왼쪽 고정
    height: "110vh", // 화면 전체 높이
    backgroundColor: "white",
    borderRight: "1px solid #ddd",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    transition: "width 0.3s ease",
    width: collapsed ? "80px" : "250px", // 축소/확장 상태
    display: "flex",
    flexDirection: "column",
    zIndex: 1000, // 다른 요소 위에 배치
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#f3f4f6",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  };

  const logoStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: "#4f46e5",
    fontSize: "1.5rem",
  };

  const navStyle: React.CSSProperties = {
    flex: 1,
    padding: "16px",
  };

  const navItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "6px",
    color: "#555",
    textDecoration: "none",
    marginBottom: "10px",
    transition: "background-color 0.2s ease, color 0.2s ease",
  };

  const navItemHoverStyle: React.CSSProperties = {
    backgroundColor: "#f3f4f6",
    color: "#4f46e5",
  };

  const navItemOutStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#555",
  };

  const footerStyle: React.CSSProperties = {
    padding: "16px",
    borderTop: "1px solid #ddd",
  };

  const userInfoStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const avatarStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    backgroundColor: "#e5e7eb",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#555",
    marginRight: "10px",
  };

  return (
    <aside style={sidebarStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={logoStyle}>{collapsed ? "SM" : "SideMenu"}</div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ cursor: "pointer" }}
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link
              href="/"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <AiOutlineDashboard size={20} />
              {!collapsed && (
                <span style={{ marginLeft: "12px" }}>Dashboard</span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/statistics"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <AiOutlineBarChart size={20} />
              {!collapsed && (
                <span style={{ marginLeft: "12px" }}>Statistics</span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <AiOutlineUser size={20} />
              {!collapsed && <span style={{ marginLeft: "12px" }}>Users</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/inventory"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <BiPackage size={20} />
              {!collapsed && (
                <span style={{ marginLeft: "12px" }}>Inventory</span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <BiBox size={20} />
              {!collapsed && <span style={{ marginLeft: "12px" }}>Orders</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div style={footerStyle}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link
              href="/settings"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <FiSettings size={20} />
              {!collapsed && (
                <span style={{ marginLeft: "12px" }}>Settings</span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/help"
              style={navItemStyle}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, navItemHoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, navItemOutStyle)
              }
            >
              <FiHelpCircle size={20} />
              {!collapsed && <span style={{ marginLeft: "12px" }}>Help</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* User Info */}
      <div style={footerStyle}>
        <div style={userInfoStyle}>
          <div style={avatarStyle}>YD</div>
          {!collapsed && (
            <div>
              <div style={{ fontWeight: "bold", color: "#333" }}>Yodankang</div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                ekffy99@gmail.com
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
