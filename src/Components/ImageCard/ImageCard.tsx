import React from "react";

interface ImageCardProps {
  Click: () => void;
  imageSrc: string;
  altText: string;
  label: string;
}

const ImageCard: React.FC<ImageCardProps> = ({Click, imageSrc, altText, label }) => {
  return (
    <div onClick={Click} className="mb-5 flex flex-col py-3 px-6 items-center justify-between h-[200px] w-fit gap-7 shadow-lg md:shadow-none hover:cursor-pointer md:hover:shadow-lg rounded-xl">
      <span>
        <img src={imageSrc} className={`max-w-[120px] h-auto fit`} alt={altText} />
      </span>
      <span className="text-black w-fit">{label}</span>
    </div>
  );
};

export default ImageCard;
