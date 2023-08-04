import DefaultComponent from "@/components/Globales/DefaultComponent";
import InfoDashboard from "@/components/Dashboard/InfoDashboard";
import DashboardProvider from "@/context/DashboardContext";

function page() {
  return (
    <DashboardProvider>
      <DefaultComponent>
        <InfoDashboard />
      </DefaultComponent>
    </DashboardProvider>
  );
}

export default page;
