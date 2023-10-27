import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";
import SettingPage from "./settingPageComponents/SettingPage";

function App() {
  return (
    <>
      <MyHeader />
      <SettingPage />
      {/* <MyBody /> */}
      <MyFooter />
    </>
  );
}

export default App;
