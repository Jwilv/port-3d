import { motion } from "framer-motion"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import StarWrapper from './hoc/SectionWrapper';
import React from 'react';

interface Email {
  name: string
  email: string
  message: string
}

const Contact = () => {

  const formRef = useRef<HTMLFormElement | null>(null);

  const [formValue, setFormValue] = useState<Email>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send("service_s0t6erq", "template_y3wr5ss", {
      from_name: formValue.name,
      to_name: "Juan Wilvers",
      from_email: formValue.email,
      to_email: "juan.ignacio.wilvers@gmail.com",
      message: formValue.message
    }, "Hl5TW_2sG6WksOCf_")
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setFormValue({
        name: '',
        email: '',
        message: '',
      })
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again later.");
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  //template_y3wr5ss
  //service_s0t6erq
  //Hl5TW_2sG6WksOCf_

  const [loading, setLoading] = useState(false);

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p
          className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        >get in touch</p>
        <h3
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >Contact</h3>

        <form
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >

          <label className="flex flex-col">
            <p className="text-white font-medium mb-4">Your Name</p>
            <input
              type="text"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>


          <label className="flex flex-col">
            <p className="text-white font-medium mb-4">Your Email</p>
            <input
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>


          <label className="flex flex-col">
            <p className="text-white font-medium mb-4">message</p>
            <textarea
              rows={7}
              name="message"
              value={formValue.message}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary "
            onClick={() => setLoading(true)}
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </motion.div>
    </div>
  )
}


const Wrapper = () => {
  return (
    <StarWrapper idName={"contact"}>
      <Contact />
    </StarWrapper>
  )
}

export default Wrapper