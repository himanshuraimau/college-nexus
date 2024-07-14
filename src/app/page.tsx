import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Navbar from "@/components/navBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background text-text font-sans">
      <Navbar  />
      <Hero/>
      <Form/>
    </div>
  );
}
