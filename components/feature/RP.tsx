import ReactPlayer from "react-player";
interface RPProps {
  video: string;
}
const RP = ({ video }: RPProps) => {
  return (
    <div
      contextMenu="return false"
      className="embed-responsive embed-responsive-16by9 w-full"
    >
      <ReactPlayer
        url={video}
        className="react-player"
        controls
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
        playing={false}
      />
    </div>
  );
};
export default RP;
