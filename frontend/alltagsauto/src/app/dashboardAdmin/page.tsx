import AsideDashboard from "@/components/AsideDashboard";
import FormCarsFormik from "@/components/forms/FormsCars";



export default function DashboardAdmin() {
    return (
        <div className="flex flex-row">
        <AsideDashboard />
        <FormCarsFormik />
        </div>
    );
}