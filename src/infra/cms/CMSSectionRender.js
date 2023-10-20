import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider";

export function CMSSectionsRenderer({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.ComponentName];

    if(!Component) return null;

    return <Component key={sectionProps.id} {...sectionProps} />;
  });
}