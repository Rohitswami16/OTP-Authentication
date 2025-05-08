import { Link } from "react-router-dom";
import { FaHome, FaCog } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authSession");
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <h1>Analytics Dashboard</h1>
      <h2 onClick={handleLogout} style={{ cursor: "pointer", color: "white" }}>
        Logout
      </h2>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link to="/" className={styles.sidebarIcon}>
        <FaHome />
      </Link>
      <Link to="/settings" className={styles.sidebarIcon}>
        <FaCog />
      </Link>
    </div>
  );
};

const Footer = () => (
  <footer className={styles.footer}>
    &copy; 2025, All Rights Reserved.
  </footer>
);

const Dashboard = () => {
  const inventoryChartRef = useRef(null);
  const ordersChartRef = useRef(null);
  const batteryChartRef = useRef(null);
  const marginChartRef = useRef(null);

  useEffect(() => {
    // inventory chart
    const inventoryChart = new Chart(inventoryChartRef.current, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Inventory",
            data: [70, 80, 75, 90, 85, 95, 93],
            borderColor: "#ffa500",
            tension: 0.4,
            fill: true,
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: "#E79500",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#fff" },
          },
          y: {
            beginAtZero: true,
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "#fff" },
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });

    // order chart
    const ordersChart = new Chart(ordersChartRef.current, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Orders",
            data: [50, 60, 55, 70, 65, 75, 65],
            borderColor: "#ff0055",
            tension: 0.4,
            fill: true,
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: "#D40A50",
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#fff" },
          },
          y: {
            beginAtZero: true,
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "#fff" },
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });

    // battery chart
    const batteryChart = new Chart(batteryChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Remaining", "Consumed"],
        datasets: [
          {
            data: [65, 35],
            backgroundColor: ["#007bff", "#ffcc00"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                size: 14,
              },
              color: "#ffffff",
            },
          },
        },
      },
      plugins: [
        {
          id: "centerText",
          beforeDraw: function (chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;
            ctx.restore();

            const fontSize = (height / 8).toFixed(2);
            ctx.font = `${fontSize}px Arial`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";

            const centerX = width / 2;
            const centerY = height / 2;

            ctx.fillStyle = "#ffffff";
            ctx.fillText("65%", centerX, centerY);
            ctx.save();
          },
        },
      ],
    });

    // margin chart
    const marginChart = new Chart(marginChartRef.current, {
      type: "line",
      data: {
        labels: [
          "12th Oct",
          "13th Oct",
          "14th Oct",
          "15th Oct",
          "16th Oct",
          "17th Oct",
        ],
        datasets: [
          {
            label: "Margin %",
            data: [40, 50, 80, 60, 90, 75],
            borderColor: "#aaff00",
            backgroundColor: "rgba(170, 255, 0, 0.2)",
            tension: 0.4,
            fill: true,
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: "#aaff00",
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#fff" },
          },
          y: {
            beginAtZero: true,
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "#fff" },
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });

    return () => {
      inventoryChart.destroy();
      ordersChart.destroy();
      batteryChart.destroy();
      marginChart.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="dashboard-container">
        {/* Inventory Card */}
        <div className="main">
          {/* Left Side - Inventory & Orders */}

          <div className="smallcard">
            <div className="card-header">
              <span>Inventory</span>
              <span>7 days ▼</span>
            </div>
            <h2 className="card-value">93%</h2>
            <div className="chart-box">
              <canvas ref={inventoryChartRef}></canvas>
            </div>
          </div>
          <br />
          <div className="smallcard">
            <div className="card-header">
              <span>Orders</span>
              <span>7 days ▼</span>
            </div>
            <h2 className="card-value">65%</h2>
            <div className="chart-box">
              <canvas ref={ordersChartRef}></canvas>
            </div>
          </div>
        </div>

        {/* Battery card*/}
        <div className="main">
          <div className="right-side">
            <div className="card-header1">
              <span>Battery</span>
              <span>...</span>
            </div>
            <div className="battery-card">
              <div className="battery-chart">
                <canvas ref={batteryChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        {/* Margin Card */}
        <div className="main">
          <div className="card-large">
            <div className="card-header3">
              <span>Margin %</span>
              <span>7 days ▼</span>
            </div>
            <div className="chart-box3">
              <canvas ref={marginChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
