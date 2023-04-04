import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser'
import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
import {useFormik} from 'formik';
import * as Yup from "yup";
import Modal from "./UI/Modal/Modal.jsx";

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
        console.log(modalActive)
    }
    console.log(modalActive)
    return (
        <div className="xl:mt12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-contact p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form
                    ref={formRef}
                    onSubmit={formik.handleSubmit}
                    className="mt-12 flex flex-col gap-8"
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
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
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
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label htmlFor="message" className="flex flex-col">
                        <span
                            className={`font-medium mb-4 ${formik.touched.message && formik.errors.message ? 'text-red-400' : ''}`}>{formik.touched.message && formik.errors.message ? formik.errors.message : 'Message'}</span>
                        <textarea
                            id="message"
                            rows="7"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl hover:shadow-none transition duration-300"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>
            <Modal active={modalActive} setActive={setModalActive}>
                {error
                ? <h1>Something went wrong</h1>
                : <h1>Thank you. I will get back to you as soon as possible</h1>
                }
            </Modal>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")
