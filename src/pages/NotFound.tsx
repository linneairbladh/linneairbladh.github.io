import Page from "../components/Page";
import { ReactComponent, attributes } from "../static/notfound.md";

const NotFound: React.FC = () => {
  return (
    <Page attributes={attributes}>
      <div className="markdown">
        <ReactComponent />
      </div>
    </Page>
  );
};

export default NotFound;
