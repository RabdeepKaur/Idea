import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col min-h-screen">
      <main className="font-work-sans flex-grow">
        <Navbar/>
{children}


      </main>
      <Footer/>
     </div> 
    );
  }