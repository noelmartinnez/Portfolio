import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { useResponsive } from "../hooks/useResponsive";

const FreelanceCard = ({
  index,
  name,
  client,
  description,
  image,
  live_link,
  isMobile,
  isTablet,
  t,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)} className="h-full">
    <Tilt
      options={{ max: 25, scale: 1, speed: 450 }}
      className={`bg-tertiary p-5 rounded-2xl shadow-card border border-white/10 h-full ${
        isTablet ? "sm:w-[400px]" : "sm:w-[360px]"
      } w-full`}
    >
      <div className="relative w-full h-[230px]">
        {image ? (
          <img
            src={image}
            alt={name}
            width={360}
            height={230}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full rounded-2xl bg-black-100 flex items-center justify-center text-white/40 font-black text-[40px]">
            {name?.charAt(0)}
          </div>
        )}

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_link, "_blank", "noopener,noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-white text-[16px]"
            title={t("freelance.viewSite")}
          >
            ↗
          </div>
        </div>
      </div>

      <div
        className={`mt-5 flex flex-col ${
          isMobile || isTablet ? "items-center text-center" : ""
        }`}
      >
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-1 text-secondary text-[14px] font-semibold">{client}</p>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Freelance = () => {
  const { t, data } = useLanguage();
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`w-full ${
          isMobile || isTablet ? "flex flex-col items-center justify-center text-center" : ""
        }`}
      >
        <p className={`${styles.sectionSubText} select-none`}>{t("freelance.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText} select-none`}>{t("freelance.title")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${
          isMobile || isTablet ? "text-center mx-auto" : ""
        }`}
      >
        {t("freelance.paragraph")}
      </motion.p>

      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-1 gap-7 mt-14 justify-items-center items-stretch"
            : "flex flex-wrap items-stretch gap-7 mt-20"
        }`}
      >
        {data.freelance.map((item, index) => (
          <FreelanceCard
            key={item.id}
            index={index}
            isMobile={isMobile}
            isTablet={isTablet}
            t={t}
            {...item}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Freelance, "freelance");
