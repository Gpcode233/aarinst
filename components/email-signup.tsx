"use client"

import { useActionState, useId } from "react"
import { subscribe, type SubscribeState } from "@/app/actions"

const initialState: SubscribeState = { status: "idle", message: "" }

type EmailSignupProps = {
  label?: string
  className?: string
}

export function EmailSignup({
  label = "Get new research in your inbox",
  className = "",
}: EmailSignupProps) {
  const [state, formAction, pending] = useActionState(subscribe, initialState)
  const inputId = useId()
  const messageId = useId()

  return (
    <form className={`email-signup ${className}`} action={formAction} noValidate>
      <label className="email-signup-label" htmlFor={inputId}>
        {label}
      </label>
      <div className="email-signup-bar">
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          aria-invalid={state.status === "error"}
          aria-describedby={state.message ? messageId : undefined}
          disabled={pending || state.status === "success"}
        />
        <button type="submit" disabled={pending || state.status === "success"}>
          {pending ? "Joining…" : state.status === "success" ? "Subscribed" : "Subscribe"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="email-signup-message" id={messageId} role="status" data-status={state.status}>
        {state.message}
      </p>
    </form>
  )
}
