import LoginProvider from "@/context/LoginContext";
import LoginForm from "@/components/LoginForm";

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
