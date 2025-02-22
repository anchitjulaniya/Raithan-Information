import React from "react";

interface ImageCardProps {
  Click: () => void;
  imageSrc: string;
  altText: string;
  label: string;
}

const ImageCard: React.FC<ImageCardProps> = ({Click, imageSrc, altText, label }) => {
  return (
    <div onClick={Click} className="mt-5 mb-5 flex flex-col py-3 px-6 items-center justify-between h-fit md:h-[360px] md:min-w-[280px] w-fit gap-7 shadow-lg hover:cursor-pointer rounded-xl">
      <span>
        <img src={imageSrc} className={`max-w-[270px] min-w-[270px]  md:max-w-[180px] w-fit`} alt={altText} />
      </span>
      <span className="text-black w-fit">{label}</span>
    </div>
  );
};

export default ImageCard;
