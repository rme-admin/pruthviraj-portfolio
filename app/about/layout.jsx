import Footer from "@/components/Footer";

export const metadata = {
  title: "Pruthviraj B | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
