import { useFormStatus } from "react-dom";

const SubmitButton = ({ text, pendingText }) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn btn-neutral mt-4">
      {pending ? pendingText : text}
    </button>
  );
};

export { SubmitButton };
