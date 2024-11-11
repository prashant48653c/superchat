import Hero from "@/components/landing/hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/footer"
 
export default function Home() {
  return (
   <main className="w-full">
    <Navbar/>
   <Hero/>
   <Footer/>
 </main>
  );
}
