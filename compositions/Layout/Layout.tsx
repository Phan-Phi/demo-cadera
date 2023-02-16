import BackToTop from "@/components/BackToTop";
import { Box, Stack, styled } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <BackToTop />
      <MainChildren>{children}</MainChildren>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled(Stack)({
  minHeight: "100vh",
  overflow: "hidden",
});

const MainChildren = styled(Box)({
  flexGrow: 1,
  overflow: "hidden",
});
