"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name looks too short.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = values.phone.replace(/\D/g, "").slice(-10);
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[6-9]\d{9}$/.test(digits)) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please share a little more detail (min. 10 characters).";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-sm border border-gold-500/30 bg-gold-50 p-10 text-center"
      >
        <CheckCircle2 size={40} className="text-gold-600" />
        <h3 className="font-display text-2xl text-ink-900">Thank you!</h3>
        <p className="max-w-sm text-sm text-ink-700">
          Your message has been received. Pournima will get back to you
          shortly. For urgent queries, feel free to call or WhatsApp
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5 w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-maroon-600">
              <AlertCircle size={13} /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink-800">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-1.5 w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400"
            placeholder="98765 43210"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-maroon-600">
              <AlertCircle size={13} /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink-800">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1.5 w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-maroon-600">
            <AlertCircle size={13} /> {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-ink-800">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="mt-1.5 w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 flex items-center gap-1 text-xs text-maroon-600">
            <AlertCircle size={13} /> {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink-800">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5 w-full resize-none rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400"
          placeholder="Tell us briefly about your requirement..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-maroon-600">
            <AlertCircle size={13} /> {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-sm border border-maroon-600/30 bg-maroon-50 p-3 text-sm text-maroon-700">
          <AlertCircle size={16} />
          Something went wrong sending your message. Please try again, or
          contact us directly via phone or WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
