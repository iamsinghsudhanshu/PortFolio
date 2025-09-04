"use client"
import React from "react"

type Errors = {
  name?: string
  email?: string
  message?: string
  general?: string
}

export default function ContactForm() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [errors, setErrors] = React.useState<Errors>({})

  const validate = (): boolean => {
    const next: Errors = {}
    if (!name.trim()) next.name = "Please enter your name."
    if (!email.trim()) next.email = "Please enter your email."
    else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      if (!emailOk) next.email = "Please enter a valid email."
    }
    if (!message.trim()) next.message = "Please enter a message."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setSuccess(false)

    if (!validate()) return

    try {
      setLoading(true)
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("message", message)

      const res = await fetch("https://formspree.io/f/mldwprgo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setSuccess(true)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        const data = await res.json().catch(() => null)
        setErrors({
          general: data?.error || "Something went wrong. Please try again later.",
        })
      }
    } catch (err) {
      setErrors({ general: "Network error. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <section aria-label="Contact form" className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 p-6 sm:p-8 transition-shadow">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-balance">Get in touch</h1>
          <p className="text-sm text-slate-600 mb-6">
            Have a question or proposal? Fill out the form and I’ll get back to you.
          </p>

          {success && (
            <div
              role="status"
              aria-live="polite"
              className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
            >
              ✅ Thanks! Your message has been sent successfully.
            </div>
          )}

          {errors.general && (
            <div
              role="alert"
              className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errors.general}
            </div>
          )}

          <form onSubmit={onSubmit} noValidate>
            <div className="grid gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                    transition-all duration-200 ease-out"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                    transition-all duration-200 ease-out"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a bit about your project or question..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                    transition-all duration-200 ease-out resize-y"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium
                    shadow-sm hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    active:scale-[0.99] transition-all duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
