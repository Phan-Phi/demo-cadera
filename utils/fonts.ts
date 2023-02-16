import { Lato, DM_Sans, Poppins } from "@next/font/google";

const DMSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export { DMSansFont, PoppinsFont };
