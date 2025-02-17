import Dashboard from "../../components/Dashboard";
import DetailsRental from "../../components/DetailsRental";
import RecentTransaction from "../../components/RecentTransaction";
import Sidebar from "../../components/SideBar";
import "./styles.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className="dashboard-page">
        {/* Sol Sidebar */}
        <Sidebar />

        {/* Ana İçerik (Split into two equal sections) */}
        <div className="main-content">
          <div className="left-section">
            <DetailsRental />
          </div>
          <div className="right-section">
            <div className="dashboard">
              <Dashboard />
            </div>
            <div className="recent-transaction">
              <RecentTransaction />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
