import Page from "../components/Page";
import { ReactComponent, attributes } from "../static/nur.md";

const NurPage: React.FC = () => {
  return (
    <Page attributes={attributes}>
      <div className="markdown">
        <ReactComponent />
      </div>
    </Page>
  );
};

export default NurPage;
