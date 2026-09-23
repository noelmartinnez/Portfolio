import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import SplitHeading from "./fx/SplitHeading";
import { useMediaQuery } from "../hooks/useResponsive";
import { useInView } from "../hooks/useInView";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const { ref: globeRef, inView: globeInView, seen: globeSeen } = useInView("600px");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // El globo 3D es lo más pesado de la página: fuera en móvil.
  const showGlobe = useMediaQuery("(min-width: 701px)");

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1100px)");
    setIsMobile(mobileQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    mobileQuery.addEventListener("change", handleMobileChange);

    return () => mobileQuery.removeEventListener("change", handleMobileChange);
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de los campos
    if (!form.name || !form.email || !form.message) {
      toast.error(t("contact.errorFields"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ie60odq", 
        "template_e1czo9b",
        {
          from_name: form.name,
          to_name: "Noel",
          from_email: form.email,
          to_email: "info@noelmartinez.es",
          message: form.message,
        },
        "alHX2coKHrcsj3AIC"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(t("contact.success"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error(t("contact.errorGeneric"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-center xl:text-left select-none`}>{t("contact.subtitle")}</p>
        <SplitHeading as="h3" text={t("contact.title")} className={`${styles.sectionHeadText} text-center xl:text-left select-none`} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Campos de entrada */}
          <label className="flex flex-col">
            <span className={`text-white font-medium mb-4 select-none ${isMobile ? "text-center" : ""}`}>
              {t("contact.nameLabel")}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>
          <label className="flex flex-col">
            <span className={`text-white font-medium mb-4 select-none ${isMobile ? "text-center" : ""}`}>
              {t("contact.emailLabel")}
            </span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=""
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium block w-full pl-10 p-2.5"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className={`text-white font-medium mb-4 select-none ${isMobile ? "text-center" : ""}`}>
              {t("contact.messageLabel")}
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={isMobile ? "" : t("contact.messagePlaceholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[16px]"
              style={{ resize: "none" }}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary select-none mx-auto xl:mx-0"
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </motion.div>
      {showGlobe && (
        <motion.div
          ref={globeRef}
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          {/* El planeta (modelo de ~3 MB) solo se carga al acercarse. */}
          {globeSeen && (
            <Suspense fallback={null}>
              <EarthCanvas active={globeInView} />
            </Suspense>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact", "#050816");
