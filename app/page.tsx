import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";



export default function Home() {
  const whatsappNumber = "+917756949838"; 
  const message = "Hi, I’m interested in discussing a web development project. Could you share more information about your services!"; 
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (

    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
     
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
      <Link
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-black-100 text-green rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 p-5"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={40} />
      </Link>
    </main>
  );
}
