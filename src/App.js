import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box } from "@mui/system";

function App() {
  return (
    <Box >
      <Navbar/>
      <Sidebar/>
      {/* <Feed/>
      <Rightbar/> */}
    </Box>
  );
}

export default App;
