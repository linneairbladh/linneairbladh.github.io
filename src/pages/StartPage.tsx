import { ReactComponent, attributes } from "../static/start.md";
import Page from "../components/Page";

const StartPage: React.FC = () => {
  return (
    <Page attributes={attributes}>
      <div className="flex flex-row markdown">
        <ReactComponent />
      </div>
    </Page>
  );
};

export default StartPage;
