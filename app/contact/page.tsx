import React from "react";
import { Mail, Phone } from "lucide-react";
import { BriefPage } from "../send-brief/SendBrief";

const page = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center text-white pt-[50px] md:pt-[50px] md:px-10 px-4 ">
      {/* <BriefPage /> */}
      <section className="max-w-[1200px] w-full gap-10 grid md:grid-cols-2 grid-cols-1   py-16 lg:py-24">
        <div className="space-y-12  animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Reach <span className="text-primary">Out</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              You can get in touch with <span className=" ">us</span> with all
              your inquiries using other means.
            </p>
          </div>

          {/* Contact Card */}
          <div className="flex flex-col w-full gap-10">
            <a
              target="_blank"
              href="mailto:info@awanidigitals.com"
              className="p-8 h-fit bg-background w-full  border-[#2a2523] hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 rounded-lg border  text-card-foreground shadow-sm"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Mail className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-2xl font-bold">Email Us</h3>
                <a
                  href="mailto:oxgital@gmail.com"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  info@awanidigitals.com
                </a>
              </div>
            </a>

            {/* Phone Card */}
            <div className="p-8 h-fit bg-background w-full  border-[#2a2523] hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 rounded-lg border  text-card-foreground shadow-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Phone className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-2xl font-bold">Call Us</h3>
                <p className="text-muted-foreground">
                  Mon – Fri from 9am to 5pm
                </p>
                <a
                  href="tel:+2349069269821"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  +23400000000
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full hidden md:flex  rounded-2xl overflow-hidden animate-fade-in">
          <img
            src="awaniContact.jpg"
            alt="Professional customer service representative"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/2348183286302"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default page;
