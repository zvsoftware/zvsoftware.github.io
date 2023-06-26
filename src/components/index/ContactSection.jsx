import { Form, Input } from '../Form';


export function ContactForm() {
    return (
    <Form action='https://api.zoarvalleysoftware.com/contact' method='POST'>
        <fieldset class='w-100%'>
            <label for='message'>Describe what we can do for you:</label><br/>
            <textarea class='mb-4 w-100% min-h-[10rem] h-[100%] text-black' name='message' required></textarea>
        </fieldset>

        <div class='grid place-content-center md:grid-cols-2 gap-8 mb-8'>
            <Input name='name' label='Your name:' type='text'/>
            <Input name='email' label='Your email:'type='email'/>
            <Input name='company' label='Your company name (optional):'type='text'required={ false }/>
        </div>

        <button class='mx-auto md:mx-0 btn w-fit bg-primary block font-medium'>Submit Form</button>
    </Form>
    );
}

export default function ContactSection() {
    return (
    <section aria-label='Contact Form' class="z-20 md:text-left grid place-content-center md:place-content-start">
        <div class='mb-8'>
            <h2 class='text-5xl font-medium mb-2' id='contact'>Request a Quote</h2>
            <p>Or send an email directly to <a href='mailto:zoarvalleysoftware@gmail.com' class='underline text-blue-400'>zoarvalleysoftware@gmail.com</a></p>
        </div>
        <ContactForm/>
    </section>
    );
}