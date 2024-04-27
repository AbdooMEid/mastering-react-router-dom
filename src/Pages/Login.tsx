import Input from "../components/UI/Input.tsx";
import Button from "../components/UI/Button.tsx";

const LoginPage = () => {
  return (
    <div>
      <h2 className={"text-center mb-3"}>Login to Contribute</h2>
      <form className={"space-y-3 max-w-sm mx-auto"}>
        <Input placeholder="Email"/>
        <Input placeholder="Password"/>
        <Button width={"w-full"}>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;