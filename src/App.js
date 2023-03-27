import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { Box, Stack} from "@mui/system";

function App() {
  return (
    <Box >
        <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/> 
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
