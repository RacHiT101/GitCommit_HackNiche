import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard , MdReviews } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { RiTakeawayFill } from "react-icons/ri";




import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {

  const count = JSON.parse(localStorage.getItem("countData"));
  console.log(count);
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<FaTruck className="h-7 w-7" />}
          title={"New Orders"}
          subtitle={"80+"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Revenue"}
          subtitle={"₹20000"}
        />
        <Widget
          icon={<FaConciergeBell className="h-7 w-7" />}
          title={"Dine In"}
          subtitle={"50"}
        />
        <Widget
          icon={<RiTakeawayFill className="h-6 w-6" />}
          title={"Takeaway"}
          subtitle={"40"}
        />
        <Widget
          icon={<MdReviews className="h-7 w-7" />}
          title={"Reviews"}
          subtitle={"3 new reviews"}
        />
        <Widget
          icon={<FaTruck className="h-6 w-6" />}
          title={"Total Orders"}
          subtitle={"400"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Complex Table , Task & Calendar */}

      <div className="mt-10">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          // total={total}
          count={count}
        />
      </div>
      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
