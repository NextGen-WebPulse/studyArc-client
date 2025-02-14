import { Toaster } from "react-hot-toast";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
