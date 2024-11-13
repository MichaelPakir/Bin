import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Facilities from "@/components/Facilities";

export default function Home() {
  return (
    <Container className="py-10">
      <Banner />
      <Facilities />
    </Container>
  );
}
