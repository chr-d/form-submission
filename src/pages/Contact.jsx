import { ErrorBoundary } from "react-error-boundary";
import { sendContactForm } from "../api";
import { ErrorFallback, Instructions } from "../components";
import { SubmitButton } from "../components/shared";

const Contact = () => {
  const submitAction = async (formData) => {
    const data = { firstName: formData.get("firstName"), lastName: formData.get("lastName"), email: formData.get("email"), message: formData.get("message") };
    console.log(data);

    await sendContactForm(data);
  };
  return (
    <div className="flex flex-col items-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={submitAction}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
            <legend className="fieldset-legend">Contact Us</legend>
            <label className="label">First Name</label>
            <input className="input w-full" name="firstName" placeholder="First Name" />
            <label className="label">Last Name</label>
            <input className="input w-full" name="lastName" placeholder="Last Name" />
            <label className="label">Email</label>
            <input className="input w-full" name="email" placeholder="Email" />
            <label className="label">Message</label>
            <textarea className="textarea w-full" name="message" placeholder="Your message" rows={4} />
            <SubmitButton text="Send" pendingText="Sending..." />
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path="/contact.md" />
    </div>
  );
};

export default Contact;
