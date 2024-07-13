import AsideDashboard from "@/components/AsideDashboard";
import InProgress from "./../../components/InProgress";
import UserDetail from "@/components/UserDetail";


export default function User() {
  return (
    <>
 <div className="flex flex-row flex-nowrap h-screen" style={{ height: 'calc(100vh - 5rem)' }}>
        <AsideDashboard />
        <div className="flex-grow flex items-center justify-center">
          <UserDetail />
        </div>
      </div>
    </>
  );
}
