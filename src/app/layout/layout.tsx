import { Container } from "@mantine/core";
import { About } from "@pages/about";
import { ContactUs } from "@pages/contact-us";
import { Feature } from "@pages/features";
import { Mission } from "@pages/mission";
import { OurServices } from "@pages/our-services";
import { Prices } from "@pages/prices";
import { Testimonials } from "@pages/testimonials";
import { Works } from "@pages/works";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
// import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Container fluid size="lg" px={80} py={32}>
        <Header />
        <main>
          <About />
          <Mission />
          <OurServices />
          <Works />
          <Prices />
          <Testimonials />
          <ContactUs />
          {/* <Feature /> */}
        </main>
      </Container>
      <Footer />
    </>
  );
};
