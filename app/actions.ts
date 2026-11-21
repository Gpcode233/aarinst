"use server"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  // TODO: persist the subscriber (mailing-list provider or database).
  // Until this is wired up, submissions are validated but not stored.

  return { status: "success", message: "Thank you — you're on the list." }
}
