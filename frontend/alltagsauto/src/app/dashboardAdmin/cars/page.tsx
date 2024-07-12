import AsideDashboard from "@/components/AsideDashboard";
import CardList from "@/components/CardList";



export default function Cars() {
    return (
        <div className="flex flex-row">
            <AsideDashboard/>
            <CardList />
        </div>
    );
}