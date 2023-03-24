import ReactDOM from "react-dom/client";
import Chat from "./src/component/chat";
import "./index.css";
import SecondChat from "./src/component/SecondChat";
const App = () => {
  return (
    <div className="flex justify-between">
      <Chat />
      <SecondChat />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
