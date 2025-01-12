import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

const Root = () => {
  return (
    <Container>
      <Header />
      <main>
        {/* children */} <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Root;
