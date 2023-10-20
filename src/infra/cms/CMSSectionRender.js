import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider";

export function CMSSectionsRenderer({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.ComponentName];
    const isVisible = sectionProps.visible === true || sectionProps.visible === undefined;

    if(!Component) return null;
    if(!isVisible) return null;

    return <Component key={sectionProps.id} {...sectionProps} />;
  });
}
