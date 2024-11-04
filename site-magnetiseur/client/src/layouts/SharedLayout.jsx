import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Footer } from "../components";

function SharedLayout() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  }
  return (
    <main className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default SharedLayout;
