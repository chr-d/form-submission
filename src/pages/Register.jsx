import { ErrorBoundary } from "react-error-boundary";
import { registerNewsletter } from "../api";
import { ErrorFallback, Instructions } from "../components";
import { SubmitButton } from "../components/shared";

const Register = () => {
  const submitAction = async (formData) => {
    const email = formData.get("email");
    await registerNewsletter(email);
  };
  return (
    <div className="flex flex-col items-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={submitAction}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
            <legend className="fieldset-legend">Register to our newsletter</legend>
            <label className="label">Email</label>
            <input className="input w-full" name="email" placeholder="Email" />
            <SubmitButton text="Register" pendingText="Registering..." />
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path="/register.md" />
    </div>
  );
};

export default Register;
