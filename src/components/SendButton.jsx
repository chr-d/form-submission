import { useFormStatus } from "react-dom";

const SendButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-neutral mt-4">
      {pending ? "Sending..." : "Send"}
    </button>
  );
};

export { SendButton };
