import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function SEO() {
  const location = useLocation();

  // map pathnames to SEO data
  const seoData = {
    "/": {
      title: "Home | Notes Site",
      description: "Welcome to the Notes Site homepage",
    },
    "/about": {
      title: "About | Notes Site",
      description: "Learn more about Notes Site",
    },
    "/notes": {
      title: "Notes | Notes Site",
      description: "Browse study notes and resources",
    },
  };

  // fallback values
  const { title, description } = seoData[location.pathname] || {
    title: "Notes Site",
    description: "Default description for Notes Site",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
