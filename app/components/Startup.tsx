/*"use client";

import React, { useState, useActionState } from "react";
import MDEditor from "@uiw/react-md-editor";

import { formScehma } from "@/lib/Validation";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { saveUser } from "@/lib/actions";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
 
  const router = useRouter();
const isPending=false
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formScehma.parseAsync(formValues);
console.log("Form values", formValues);
    
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

        console.log("Validation errors", fieldErorrs);

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      return {
        ...prevState,
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />

        {error.title && <p className="startup-form_error">{error.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />

        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;

function handleFormSubmit(state: { error: string; status: string; }): { error: string; status: string; } | Promise<{ error: string; status: string; }> {
  throw new Error("Function not implemented.");
}*/
"use client";

import React, { useState, useActionState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

// ✅ Validation schema & server action
import { formScehma } from "@/lib/Validation";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const router = useRouter();

  // ✅ Handle form submission with zod validation
  type FormState = {
  status: "INITIAL" | "SUCCESS" | "ERROR";
  error: string;
};
  const handleFormSubmit = async (prevState:FormState, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formScehma.parseAsync(formValues); // ✅ Validate form values with zod

      // ✅ Append pitch to formData so it's passed to server
      formData.set("pitch", pitch);

      const result = await saveUser(prevState, formData);

      if (result.status === "SUCCESS") {
        console.log("Form submitted successfully", result);
        router.push(`/startup/${result._id}`);
      }

      return { ...prevState, status: result.status };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

       const formattedErrors: Record<string, string> = {};
for (const key in fieldErrors) {
  const messages = fieldErrors[key];
  if (messages && messages.length > 0) {
    formattedErrors[key] = messages[0]; // get the first error message
  }
}
setErrors(formattedErrors);
        console.log("Validation errors", fieldErrors);

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  // ✅ useActionState for form handling
  const [formAction, isPending] = useActionState<FormState, FormData>(
  handleFormSubmit,
  {
    error: "",
    status: "INITIAL",
  }
);


  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {/* ✅ Fix: was `error.title` instead of `errors.title` */}
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value || "")}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
