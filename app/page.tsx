import Content from "./components/content";
import Hero from "./components/hero";
import Timer from "./components/timer";
import Form from "./components/form";

export default function Home() {
  return (
    <>
      <Timer />
      <Hero />
      <Content hideCards />
      <Form />
    </>
  );
}
