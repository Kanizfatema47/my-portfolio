import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1d125gk', 'template_qnjpo4d', form.current, 'vi5T3kSUvRC78bZ62')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div class="hero min-h-screen ">
            <div class="hero-content flex-col justify-evenly lg:flex-row-reverse">
                <div class="text-center lg:text-left w-1/2 ">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100">
                    <div class="card-body ">
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"name="user_email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea class="input input-bordered" name="message"></textarea>
                            </div>


                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

        // <form ref={form} onSubmit={sendEmail}>
        //   <label>Name</label>
        //   <input type="text" name="user_name" />
        //   <label>Email</label>
        //   <input type="email" name="user_email" />
        //   <label>Message</label>
        //   <textarea name="message" />
        //   <input type="submit" value="Send" />
        // </form>
    );
};
export default Contact;