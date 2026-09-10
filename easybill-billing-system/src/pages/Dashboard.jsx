import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import SalesChart from '../components/SalesChart';
import InvoiceStatus from '../components/InvoiceStatus';
import RecentInvoices from '../components/RecentInvoices';
import TopCustomers from '../components/TopCustomers';
import Activities from '../components/Activities';
import QuickActions from '../components/QuickActions';
import PaymentsTable from '../components/PaymentsTable';

export default function Dashboard(){
return (
<div className="layout">
<Sidebar/>
<div className="main">
<Navbar/>
<div className="cards">
<StatCard title="Sales" value="₹1,25,000"/>
<StatCard title="Invoices" value="125"/>
<StatCard title="Customers" value="52"/>
<StatCard title="Pending" value="18"/>
</div>
<SalesChart/>
<InvoiceStatus/>
<RecentInvoices/>
<TopCustomers/>
<Activities/>
<QuickActions/>
<PaymentsTable/>
</div>
</div>
)}