import React, {useRef, useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {fadeIn, slideIn} from "../utils/motion.js";
import {EarthCanvas, StarsCanvas} from "../components/index.js";
import Modal from "../components/UI/Modal/Modal.jsx";
import {Link} from "react-router-dom";


const Contact = () => {
    const [modalActive, setModalActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().max(20, 'Name must be 20 characters or less.').required('Name is required.'),
            email: Yup.string().email('Invalid email address.').required('Email is required.'),
            message: Yup.string().required('Message is required.')
        }),

        onSubmit: (values) => {
            console.log(values)
            emailjs.send(
                'service_wlrt3n6',
                'template_kmzzc5g',
                {
                    from_name: values.name,
                    to_name: 'Nikita',
                    from_email: values.email,
                    to_email: 'nikitaandrjeev@gmail.com',
                    message: values.message,
                },
                'Y8niJymjFSzqgFQTr'
            ).then(() => {
                setLoading(false);
                setError(false);
                setModalActive(true);
                values({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false);
                setError(true);
                setModalActive(true);
                console.log(error)
                alert('Something went wrong')
            })
        }
    })
    const submitButton = () => {
        setModalActive(true);
    }
    return (
        <div className="bg-[#212121]">
            <section
                className={`${styles.padding} max-w-7xl container relative z-[1] xl:w-full xl:h-screen xl:mx-auto xl:flex xl:flex-row xl:flex-wrap xl:justify-between xl:items-center xl:inset-0 xl:gap-5`}>
                <div className="xl:flex-row flex-col-reverse flex gap-8 xl:w-full xl:max-h-[730px] xl:justify-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -200
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 6.75,
                                duration: 2,
                                type: "Spring"
                            }
                        }}
                        className="flex-[0.75] bg-white rounded-2xl lg:padding-[1.5rem] xl:h-max p-4 md:p-8 lg:p-4 2xl:p-8"
                    >
                        <h3 className={styles.contactHeadText}>Contact</h3>
                        <p className={styles.contactSubText}>"...build something together"</p>

                        <form
                            ref={formRef}
                            onSubmit={formik.handleSubmit}
                            className="mt-6 flex flex-col gap-8 lg:gap-6 2xl:gap-8"
                        >
                            <label htmlFor="name" className="flex flex-col">
                        <span
                            className={`font-medium mb-4 ${formik.touched.name && formik.errors.name ? 'text-red-400' : ''}`}>{formik.touched.name && formik.errors.name ? formik.errors.name : "Your name"}</span>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="What's your name?"
                                    className="bg-[#d9d9d9] py-4 px-6 placeholder:text-[#000] text-black rounded-lg outlined-none border-none font-medium xl:py-[15px] xl:px-[10px]"
                                />
                            </label>
                            <label htmlFor="email" className="flex flex-col">
                        <span
                            className={`font-medium mb-4 ${formik.touched.email && formik.errors.email ? 'text-red-400' : ''}`}>{formik.touched.email && formik.errors.email ? formik.errors.email : 'Your email'}</span>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="What's your email?"
                                    className="bg-[#d9d9d9] py-4 px-6 placeholder:text-[#000] text-black rounded-lg outlined-none border-none font-medium"
                                />
                            </label>
                            <label htmlFor="message" className="flex flex-col">
                        <span
                            className={`font-medium mb-4 ${formik.touched.message && formik.errors.message ? 'text-red-400' : ''}`}>{formik.touched.message && formik.errors.message ? formik.errors.message : 'Message'}</span>
                                <textarea
                                    id="message"
                                    rows="4"
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="What do you want to say?"
                                    className="bg-[#d9d9d9] py-4 px-6 placeholder:text-[#000] text-black rounded-lg outlined-none border-none font-medium resize-none xl:py-[15px] xl:px-[10px]"
                                />
                            </label>
                            <button
                                type="submit"
                                className="bg-[#212121] py-3 px-8 outline-nonnpm e w-full text-white font-bold shadow-md shadow-primary rounded-xl hover:shadow-none transition duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 0
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 7,
                                duration: 2,
                                type: "Spring"
                            }
                        }}
                        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                    >
                        <EarthCanvas/>
                    </motion.div>
                    <Modal active={modalActive} setActive={setModalActive}>
                        {error
                            ? <h1>Something went wrong</h1>
                            : <h1>Thank you. I will get back to you as soon as possible.</h1>
                        }
                    </Modal>
                </div>
            </section>
            <StarsCanvas/>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 7.25,
                        duration: 2,
                        type: "Spring"
                    }
                }}
                className="relative xl:absolute bottom-6 lg:bottom-12 w-full flex justify-center items-center z-[1]"
            >
                <Link
                    className="
                        text-2xl
                        relative
                        after:content-['']
                        after:block
                        after:w-0
                        after:h-[1px]
                        after:absolute
                        after:bottom-0
                        after:bg-white
                        after:transition-all
                        after:duration-300
                        hover:after:w-full
                    "
                    to="/"
                >
                    Who am I?
                </Link>
            </motion.div>
        </div>
    );
};

export default Contact;
