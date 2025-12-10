import React from "react";
import { useTranslation } from "react-i18next";
import StagePopup from "../components/StagePopup";

interface AboutProps {
  setCurrentPage: (
    page: "home" | "about" | "skills" | "projects" | "contact"
  ) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-20 mx-auto max-w-7xl">
      {/* Pop-up Stage/Alternance */}
      <StagePopup setCurrentPage={setCurrentPage} />

      {/* Header Section */}
      <div className="max-w-3xl mx-auto mb-20 space-y-8 text-center">
        <h1 className="text-6xl font-bold text-transparent md:text-8xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text">
          {t("about.title")}
        </h1>

        <p className="text-xl leading-relaxed text-gray-400 md:text-2xl">
          {t("about.description")}
        </p>

        {/* Decorative bars */}
        <div className="flex justify-center gap-4 pt-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>
      </div>

      {/* Ma passion pour l'informatique */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
              {t("about.passionTitle")}
            </span>
          </h2>

          <div className="p-6 space-y-4 border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl md:p-8">
            <p className="text-lg leading-relaxed text-gray-300">
              {t("about.passionIntro")}
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              {t("about.passionLycee")}
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              {t("about.passionBUT")}
            </p>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="mb-20">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
            {t("about.titleFormations")}
          </span>
        </h2>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
          {/* Formation 1 */}
          <div className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50">
            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
              {t("about.titleF1")}
            </h3>
            <p className="mb-1 font-medium text-yellow-400">
              {t("about.institutionF1")}
            </p>
            <p className="mb-3 text-sm italic text-gray-500">
              {t("about.periodF1")}
            </p>
            <p className="leading-relaxed text-gray-400">
              {t("about.descriptionF1")}
            </p>
          </div>

          {/* Formation 2 */}
          <div className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400/50">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                {t("about.titleF2")}
              </h3>
              <span className="px-3 py-1 text-xs font-semibold text-yellow-400 border rounded-full bg-yellow-400/20 border-yellow-400/30 whitespace-nowrap">
                {t("about.mentionF2")}
              </span>
            </div>
            <p className="mb-1 font-medium text-yellow-400">
              {t("about.institutionF2")}
            </p>
            <p className="mb-3 text-sm italic text-gray-500">
              {t("about.periodF2")}
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold text-gray-300">
                  {t("about.specialitiesLabelF2")}
                </span>{" "}
                {t("about.specialitiesF2")}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-gray-300">
                  {t("about.optionLabelF2")}
                </span>{" "}
                {t("about.optionF2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="mb-20">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">
            {t("about.titleExperiences")}
          </span>
        </h2>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
          {/* Experience 1 */}
          <div className="p-6 transition-all duration-300 border-2 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border-amber-500/30 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 hover:border-amber-500/50">
            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
              {t("about.titleE1")}
            </h3>
            <p className="mb-1 font-medium text-amber-400">
              {t("about.companyE1")}
            </p>
            <p className="mb-3 text-sm italic text-gray-500">
              {t("about.periodE1")}
            </p>
            <p className="leading-relaxed text-gray-400">
              {t("about.descriptionE1")}
            </p>
          </div>

          {/* Experience 2 */}
          <div className="p-6 transition-all duration-300 border-2 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border-amber-500/30 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30 hover:border-amber-500/50">
            <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
              {t("about.titleE2")}
            </h3>
            <p className="mb-1 font-medium text-amber-400">
              {t("about.companyE2")}
            </p>
            <p className="mb-3 text-sm italic text-gray-500">
              {t("about.periodE2")}
            </p>
            <p className="mb-3 leading-relaxed text-gray-400">
              {t("about.descriptionE2")}
            </p>

            <div className="mb-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">•</span>
                <p className="text-sm text-gray-300">{t("about.Tirer1E2")}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">•</span>
                <p className="text-sm text-gray-300">{t("about.Tirer2E2")}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">•</span>
                <p className="text-sm text-gray-300">{t("about.Tirer3E2")}</p>
              </div>
            </div>

            {t("about.projectLinkE2") && (
              <a
                href={t("about.projectLinkE2")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border-amber-500/30 hover:border-amber-500/50"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("about.projectButtonE2")}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* SWERC Section */}
      <section className="mb-20">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          <span className="text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text">
            {t("about.swercTitle")}
          </span>
        </h2>

        <div className="max-w-4xl p-8 mx-auto transition-all duration-300 border bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-yellow-500/30 rounded-2xl hover:scale-105">
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("about.swercDesc1")}
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("about.swercDesc2")}
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            {t("about.swercDesc3")}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {t("about.swercLink") && (
              <a
                href={t("about.swercLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 mt-6 text-sm font-medium text-yellow-400 transition-all duration-300 border rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-500/30 hover:border-yellow-500/50"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("about.swercButton")}
              </a>
            )}

            {t("about.swercLink") && (
              <a
                href={t("about.swercLinkedInLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 mt-6 text-sm font-medium text-yellow-400 transition-all duration-300 border rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-500/30 hover:border-yellow-500/50"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("about.swercLinkedInButton")}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Et au-delà du code ? */}
      <section className="mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-center text-transparent md:text-4xl bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text">
              {t("about.beyondCodeTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Sport */}
            <div className="p-6 transition-all duration-300 border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl">
                  <img src="/icons/sport.svg" alt="Sport" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("about.sportTitle")}
                </h3>
              </div>
              <p className="mb-3 leading-relaxed text-gray-300">
                {t("about.sportDesc1")}
              </p>
              <p className="leading-relaxed text-gray-300">
                {t("about.sportDesc2")}
              </p>
            </div>

            {/* Piano */}
            <div className="p-6 transition-all duration-300 border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl">
                  <img src="/icons/piano.svg" alt="Piano" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("about.pianoTitle")}
                </h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                {t("about.pianoDesc")}
              </p>
            </div>

            {/* Jeux vidéo */}
            <div className="p-6 transition-all duration-300 border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-gradient-to-br from-yellow-500 to-amber-400 rounded-xl">
                  <img
                    src="/icons/videoGames.svg"
                    alt="Jeux vidéo"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("about.gamingTitle")}
                </h3>
              </div>
              <p className="mb-3 leading-relaxed text-gray-300">
                {t("about.gamingDesc1")}
              </p>
              <p className="leading-relaxed text-gray-300">
                {t("about.gamingDesc2")}
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg italic text-center text-gray-400">
            {t("about.beyondCodeConclusion")}
          </p>
        </div>
      </section>

      {/* Download CV Button */}
      <div className="pt-8 text-center">
        <a
          href={t("buttons.cvLink")}
          download={t("buttons.nameDownload")}
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-black transition-all duration-300 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl hover:shadow-2xl hover:shadow-yellow-400/40 hover:scale-110"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {t("buttons.downloadCV")}
        </a>
      </div>
    </div>
  );
};

export default About;