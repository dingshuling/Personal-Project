"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("")

  // Set the current URL after component mounts (client-side only)
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  // This function will be called when the form is submitted
  const handleSubmit = (e) => {
    if (isSubmitted) {
      // If already submitted, just reset the form
      setIsSubmitted(false)
      return
    }

    // Otherwise, show loading state
    setIsSubmitting(true)
    // The actual submission will be handled by Formspree
    // This is just to show the loading state
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your health tech startup with data-driven strategies? Let's connect and discuss how I can
            help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="border-0 shadow-lg dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                      <a
                        href="mailto:dingshuling@gmail.com"
                        className="text-base text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
                      >
                        dingshuling@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                      <a
                        href="tel:+15123004955"
                        className="text-base text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
                      >
                        +1 (512) 300-4955
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/shulingding/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
                      >
                        linkedin.com/in/shulingding
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Based in San Francisco, California
                    <br />
                    Available for remote collaboration worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            {isSubmitted ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="h-16 w-16 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xrgwkpaz"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input id="name" name="name" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required className="w-full" />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Company
                    </label>
                    <Input id="company" name="company" className="w-full" />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={5} required className="w-full" />
                  </div>
                </div>

                {/* Hidden field for Formspree to redirect back to your site */}
                {currentUrl && <input type="hidden" name="_next" value={currentUrl} />}

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
