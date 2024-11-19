import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        {/* Address */}
        <p className="my-4">{CONTACT.address}</p>
        {/* Phone Number */}
        <p className="my-4">
          <a href={`tel:${CONTACT.phoneNo}`} className="hover:underline">
            {CONTACT.phoneNo}
          </a>
        </p>
        {/* Email */}
        <p className="my-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-neutral-600 hover:text-purple-500"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
