import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import CreateEmployee from "./components/create_employee";
import DeleteEmployee from "./components/delete_employee";
import EditEmployee from "./components/edit_employee";
import ListEmployees from "./components/list_employees";
import ViewEmployee from "./components/view_employee";
import CreateProject from "./components/create_project";
import DeleteProject from "./components/delete_project";
import EditProject from "./components/edit_project";
import ListProjects from "./components/list_projects";
import Footer from "./components/footer";
import RequestTable from "./components/request_employees";
import "./assets/styles/footer.css";
import DirectorDashboard from "./components/DirectorDashboard";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createemployee" exact element={<CreateEmployee />} />
          <Route path="/listemployee" element={<ListEmployees />} />
          <Route path="/view/:_id" element={<ViewEmployee />} />
          <Route path="/edit/:_id" element={<EditEmployee />} />
          <Route path="/requestemployees" element={<RequestTable />} />
          <Route path="/delete/:_id" element={<DeleteEmployee />} />
          <Route path="/createproject" exact element={<CreateProject />} />
          <Route path="/listproject" element={<ListProjects />} />
          <Route path="/editproject/:_id" element={<EditProject />} />
          <Route path="/deleteproject/:_id" element={<DeleteProject />} />
          <Route path="/director-dashboard" element={<DirectorDashboard />} />
        </Routes>
      </body>

      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
