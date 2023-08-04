import LoginProvider from "@/context/LoginContext";
import LoginForm from "@/components/Login/LoginForm";

function page() {
  return (
    <>
      <LoginProvider>
        <LoginForm />
      </LoginProvider>
    </>
  );
}

export default page;
