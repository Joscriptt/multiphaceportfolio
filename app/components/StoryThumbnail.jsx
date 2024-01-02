import Image from "next/image";

const StoryThumbnail = ({ thumbnail, index, setActiveStory, user }) => (
  <button
    className="flex  flex-col items-center mx-3"
    onClick={() => setActiveStory(index)}
  >
    <Image
      width={800}
      height={800}
      className="w-14 h-14 rounded-full ring-1 object-cover hover:ring-2 hover:transition-all duration-200 ease-in-out ring-neutral-600 p-1 "
      src={thumbnail.src}
      alt={thumbnail.alt}
    />
    <span className="text-neutral-600 text-sm mt-2 font-Interegular">
      {user}
    </span>
  </button>
);

export default StoryThumbnail;
