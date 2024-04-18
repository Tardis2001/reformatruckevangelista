import React from "react";

interface CustomImageProps {
    imageSource: string; // Accept string or StaticImageData
    imageStyle: React.CSSProperties;
}

const CustomImage: React.FC<CustomImageProps> = ({
    imageSource,
    imageStyle,
}) => {
    const src = typeof imageSource === "string" ? imageSource : imageSource;

    return (
        <img
            className={"image"}
            src={imageSource}
            alt="image of an electric car"
            style={imageStyle}
        />
    );
};

export default CustomImage;