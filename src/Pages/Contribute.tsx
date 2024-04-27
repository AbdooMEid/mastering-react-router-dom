import TextArea from "../components/UI/TextArea.tsx";
import Button from "../components/UI/Button.tsx";
import {useLocation} from "react-router-dom";

const ContributePage = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h2 className={"text-center mb-3"}>Email : {location.state.email}</h2>
      <h2 className={"text-center mb-3"}>Issue : 🐛 Bug Report</h2>
      <form className={"space-y-3 max-w-sm mx-auto"}>
        <TextArea/>
        <Button width={"w-full"}>Submit new issue</Button>
      </form>
    </div>
  );
};

export default ContributePage;