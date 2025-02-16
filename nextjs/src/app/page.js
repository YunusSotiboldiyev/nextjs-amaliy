import Layout from "./components/Layout";
import Booking from "./components/Booking";
import WithUs from "./components/WithUs";

export default function Home() {
  return (
    <Layout>
      <Booking />
      <WithUs />
    </Layout>
  );
}
