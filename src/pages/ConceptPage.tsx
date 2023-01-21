import Page from "../components/Page";
import { ReactComponent, attributes } from "../static/concept.md";

const ConceptPage: React.FC = () => {
  return (
    <Page attributes={attributes}>
      <div className="markdown">
        <ReactComponent className="markdown" />
      </div>
    </Page>
  );
};

export default ConceptPage;
