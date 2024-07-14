import AdminAsideDashboard from "@/components/AdminAsideDashboard";
import ListOfComponents from "@/components/ListOfComponents";


export default function SlugList() {
  return (
    <>
      <div
        className="flex flex-row flex-nowrap h-screen"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <AdminAsideDashboard />
        <div className="flex-grow flex items-center justify-center">
            <ListOfComponents />
        </div>
      </div>
    </>
  );
}
