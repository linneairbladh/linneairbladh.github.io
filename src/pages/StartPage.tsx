import { ReactComponent, attributes } from "../static/start.md";

import Page from "../components/Page";

const StartPage: React.FC = () => {
  return (
    <Page attributes={attributes} facebookPageAppId="3446917935632235">
      <div className="markdown">
        <ReactComponent />
      </div>
    </Page>
  );
};

export default StartPage;
