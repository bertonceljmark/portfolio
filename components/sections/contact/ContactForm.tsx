import { FormEvent, ReactNode, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Hourglass,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

const EMAIL_JS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "";
const EMAIL_JS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "";
const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || "";

const FormField = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};

const ContactForm = () => {
  const [state, setState] = useState<"loading" | "idle" | "sent">("idle");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setState("loading");

    await emailjs.sendForm(
      EMAIL_JS_SERVICE_ID,
      EMAIL_JS_TEMPLATE_ID,
      form.current,
      {
        publicKey: EMAIL_JS_PUBLIC_KEY,
      }
    );

    setState("sent");
  };

  return (
    <Window className="m-3">
      <WindowHeader>Say hi</WindowHeader>
      <WindowContent>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 text-lg w-96 max-w-full"
        >
          <FormField>
            <label>Name</label>
            <TextInput type="text" name="from_name" />
          </FormField>
          <FormField>
            <label>Email</label>
            <TextInput type="email" name="reply_to" />
          </FormField>
          <FormField>
            <label>Message</label>
            <TextInput name="message" multiline rows={8} />
          </FormField>
          <FormField>
            <Button type="submit" value="Send">
              {state === "idle" && "Send"}
              {state === "loading" && <Hourglass size={16} />}
              {state === "sent" && "Sent ✅"}
            </Button>
          </FormField>
        </form>
      </WindowContent>
    </Window>
  );
};

export default ContactForm;
