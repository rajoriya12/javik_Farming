import { Link } from "react-router-dom";
function ContactCTA() {
    return (
        <section className="py-20 bg-[#1F3D2B] text-white">
            <div className="max-w-4xl mx-auto text-center px-6">

                <h2 className="text-4xl font-bold">
                    Ready To Order Fresh Organic Products?
                </h2>

                <p className="mt-4 text-gray-300">
                    Contact us today and get farm fresh products delivered to your doorstep.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                    <button className="bg-[#D4A017] text-black px-8 py-3 rounded-xl font-semibold">
                    Order Now
                    </button>

                  
                    <button className="border border-white px-8 py-3 rounded-xl">
                         <a href="https://wa.me/+919667612626" target="_blank" rel="noopener noreferrer" className="text-white no-underline">
                            Contact Us
                         </a>
                    </button>

            </div>

        </div>
        </section >
    );
}

export default ContactCTA;