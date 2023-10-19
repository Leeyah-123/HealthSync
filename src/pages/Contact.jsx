import ContactForm from '../components/simple/contact/ContactForm';

const Contact = () => {
  return (
    <div className="opacity-90 bg-white m-3 md:m-16">
      <header className="w-3/4 mx-auto space-y-2 ">
        <h2 className="text-lemon font-bold text-2xl sm:text-3xl capitalize">
          contact us
        </h2>
        <h3>Get in touch and let us know how we can help you.</h3>
      </header>

      <ContactForm />
    </div>
  );
};

export default Contact;
