const PREFIX = "api/v2";

const PAGES = "pages";

const SUBMISSIONS = "submissions";

const generatePathname = (data: string[]): string => {
  const arr = [PREFIX, ...data];
  return `/${arr.join("/")}/`;
};

export const TYPE_PARAMS = {
  "home.HomePage": "home.HomePage",
  "about.AboutPage": "about.AboutPage",
  "contact.ContactPage": "contact.ContactPage",

  "service.ServiceListingPage": "service.ServiceListingPage",
  "service.ServiceDetailPage": "service.ServiceDetailPage",

  "client.ClientDetailPage": "client.ClientDetailPage",
  "client.ClientListingPage": "client.ClientListingPage",
} as const;

export const SETTING_API = `/${PREFIX}/`;
export const PAGES_API = generatePathname([PAGES]);
export const SUBMISSIONS_API = generatePathname([SUBMISSIONS]);
