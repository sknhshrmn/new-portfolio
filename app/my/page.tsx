import "./globals.css";
import Menu from "@/components/Layout/Menu";
import Typography from "@/components/Shared/Typography";
import { Switch } from "@/components/ui/switch";
import ProfileCard from "@/components/Layout/ProfileCard";
import AboutMeCard from "@/components/Layout/AboutMeCard";
import ExperienceMainCard from "@/components/Layout/ExperienceMainCard";
import { useRouter } from "next/router";
import ToggleLanguage from "@/components/Layout/ToggleLanguage";

export default function Home() {
  const profilePicture = "/profilePicture.jpg";
  const name = "Sakinah Shahriman";
  const position = "Jurutera Perisian";
  const tagline = "Membina. Belajar. Berkembang.";
  const aboutMeText = (
    <>
      Hai! Saya seorang <strong>Jurutera Perisian Full-Stack</strong> dengan
      latar belakang dalam <strong>Mekatronik</strong>, beralih dari
      pengaturcaraan PLC ke dunia <strong>pembangunan web</strong>. Perjalanan
      saya penuh dengan pembelajaran dan pertumbuhan, dan saya sentiasa teruja
      untuk meneroka teknologi baharu serta meningkatkan kemahiran saya.
      <br />
      <br />
      Saya bekerja terutamanya dengan{" "}
      <strong>JavaScript (React.js, Next.js)</strong> di bahagian frontend,
      bersama <strong>Laravel dan Express</strong> untuk backend. Saya gemar{" "}
      <strong>
        menyelesaikan masalah, mengoptimumkan aliran kerja, dan membina
        penyelesaian yang boleh diskalakan
      </strong>{" "}
      untuk menjadikan sistem lebih cekap.
      <br />
      <br />
      Selain daripada menulis kod, saya juga suka{" "}
      <strong>
        bekerjasama dengan pasukan, berkongsi ilmu, dan belajar dari perspektif
        yang berbeza
      </strong>
      . Teknologi sepatutnya memudahkan kehidupan, dan saya sentiasa terbuka
      kepada <strong>idea serta peluang baharu</strong> untuk berkembang.
      <br />
      <br />
      Jika anda ingin berhubung atau bekerjasama, jangan segan untuk menghubungi
      saya! 😊
    </>
  );

  const experiences = [
    {
      title: "Jurutera Perisian",
      company: "INVOKE Solutions Sdn. Bhd.",
      date: "Okt 2023 - Sekarang",
      description:
        "Bermula sebagai pelatih dalam pembangunan full-stack menggunakan Express.js (Node.js) dan React, serta penyesuaian WordPress. Kini sebagai Jurutera Perisian, saya membangunkan UI responsif dengan Next.js dan Tailwind CSS serta mengendalikan backend dengan Laravel, membina RESTful API, dan mengurus pangkalan data MySQL.",
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Laravel",
        "Node.js",
        "Express",
        "MySQL",
      ],
    },
    {
      title: "Jurutera Perisian (PLC)",
      company: "RS-Simulation Asia Sdn. Bhd.",
      date: "Apr 2019 - Sept 2023",
      description:
        "Membangunkan dan mengubah suai program PLC dalam CoDeSys menggunakan Function Block Diagram dan Structured Text. Selain itu, membangunkan aplikasi web dalaman menggunakan Django dan Bootstrap untuk mempercepatkan aliran kerja syarikat.",
      stack: ["Django", "Bootstrap", "JavaScript", "CSS", "PostgreSQL"],
    },
    {
      title: "Jurutera Automasi R&D",
      company: "JKS Engineering Sdn. Bhd.",
      date: "Nov 2017 - Dis 2018",
      description:
        "Mereka konsep sistem automasi 3D dan menghasilkan lukisan teknikal menggunakan SolidWorks. Peranan ini memperkukuhkan kemahiran penyelesaian masalah saya, yang kemudiannya saya gunakan dalam pembangunan perisian.",
      stack: ["SolidWorks"],
    },
  ];

  const resume_link = "/Resume-SitiNursakinahShahriman.pdf";
  const github_link = "https://github.com/sknhshrmn";

  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 pt-20 pb-8 sm:p-8 pb-10 sm:p-10 font-[family-name:var(--font-geist-sans)] max-w-[1200px] mx-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Typography variant="p" className="text-poppins">
            EN
          </Typography>
          <ToggleLanguage />
          <Typography variant="p" className="text-poppins text-primary">
            MY
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Switch />
          <Typography variant="p" className="text-poppins  text-primary">
            Swicth Theme
          </Typography>
        </div>
      </div>
      <main className=" w-auto sm:w-2/3 py-6 flex flex-col gap-12">
        <div id="home">
          <ProfileCard
            profilePicture={profilePicture}
            name={name}
            position={position}
            tagline={tagline}
          />
        </div>
        <section id="about-me">
          <AboutMeCard
            text={aboutMeText}
            resume_link={resume_link}
            github_link={github_link}
          />
        </section>
        <section id="experiences">
          <ExperienceMainCard experiences={experiences} />
        </section>
      </main>
      <Menu />
    </div>
  );
}
