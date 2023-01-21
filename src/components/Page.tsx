import { ReactElement } from "react-markdown/lib/react-markdown";

interface PageProps {
  children?: any;
  attributes: { title: string; images: string[] };
}
const Page: React.FC<PageProps> = (props) => {
  return (
    <div className="w-full h-full bg-white">
      <h1 className="text-2xl text-white font-bold bg-color-primary items">
        <div className="py-3 px-14 text-center">{props.attributes.title}</div>
        <div className="flex flex-row justify-center w-full">
          {props.attributes.images.map((image: string) => {
            return (
              <img
                className="shadow-md w-1/5 h-21"
                src={image}
                alt="bilder från Konga"
              />
            );
          })}
        </div>
      </h1>
      {props.children}
    </div>
  );
};

export default Page;
