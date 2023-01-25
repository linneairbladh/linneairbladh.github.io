import { ReactElement } from "react-markdown/lib/react-markdown";
import { FacebookProvider, Page as FacebookPage } from "react-facebook";
interface PageProps {
  children?: any;
  attributes: { title: string; images: string[] };
  facebookPageAppId?: string;
}
const Page: React.FC<PageProps> = (props) => {
  return (
    <div className="h-full w-full bg-white">
      <h1 className="items bg-color-primary text-2xl font-bold text-white">
        <div className="py-3 px-14 text-center">{props.attributes.title}</div>
        <div className="flex  w-full flex-row items-center justify-center">
          {props.attributes.images.map((image: string) => (
            <img
              className="h-15 w-1/5 shadow-md"
              src={image}
              alt="bilder från Konga"
            />
          ))}
        </div>
      </h1>
      <div className="flex h-full w-full  flex-row justify-around gap-8 py-12 px-12">
        {props.children}
        {props.facebookPageAppId && (
          <FacebookProvider appId={props.facebookPageAppId}>
            {/* "3446917935632235" */}
            <FacebookPage
              href="https://www.facebook.com/kongagardenrehab"
              tabs="timeline"
            />
          </FacebookProvider>
        )}
      </div>
    </div>
  );
};

export default Page;
