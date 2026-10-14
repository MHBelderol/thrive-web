import { useState, type ChangeEvent, type FormEvent } from 'react'
import { site } from '../../data/site'
import type { ContactFormData } from '../../types'

const emptyForm: ContactFormData = { name: '', email: '', subject: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(emptyForm)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: send `form` to a backend / email service. The template ships without a working form handler.
  }

  return (
    <div className="container-fluid bg-secondary px-0">
      <div className="row g-0">
        <div className="col-lg-6 py-6 px-5">
          <h1 className="display-5 mb-4">Contact For Any Queries</h1>
          <h4 className="lh-base mb-4">
            Have a question or want to work with us? Send us a message and we&apos;ll get back to you shortly.
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="form-floating-1"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="form-floating-1">Full Name</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="form-floating-2"
                    name="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="form-floating-2">Email address</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="form-floating-3"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="form-floating-3">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="form-floating-4"
                    name="message"
                    style={{ height: 150 }}
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="form-floating-4">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <iframe
              className="position-relative w-100 h-100"
              src={site.mapEmbedUrl}
              title="Office location map"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
