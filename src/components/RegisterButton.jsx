import { useFormStatus } from "react-dom";

const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-neutral mt-4">
      {pending ? "Registering..." : "Register!"}
    </button>
  );
};

export { RegisterButton };
