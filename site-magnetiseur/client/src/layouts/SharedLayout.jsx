import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Footer } from "../components";
import ScrollToTop from "../utils/scrollToTop.js";

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
    <div className="page_container">
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SharedLayout;
