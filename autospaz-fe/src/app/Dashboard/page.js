import DefaultComponent from "@/components/DefaultComponent";
import InfoDashboard from "@/components/InfoDashboard";
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
