import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionSection } from "./PageFAQDisplayQuestionSection/PageFAQDisplayQuestionSection";
import { PagehomeHerosectionRecord } from "./PagehomeHerosectionRecord";
import { SEOBlock } from "./SeoBlock";

export const cmsSections = {
  PagefaqDisplayquestionSectionRecord: (props) => (
    <PageFAQDisplayQuestionSection {...props} />
  ),
  CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: (props) => (
    <PagehomeHerosectionRecord {...props} />
  ),
  CommonFooterRecord: (props) => <Footer {...props} />,
};
