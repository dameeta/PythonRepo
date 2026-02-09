import { Link } from "react-router-dom"

const Dashboard = () =>{
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to ="/profile">Go to Profile</Link>

    </div>
  );
}
export default Dashboard;