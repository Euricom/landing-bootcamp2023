"use client";
import React from "react";
import styles from "./customImage.module.scss";
import Image from "next/image";

interface CustomImageProps {
  imageUrl: string;
  alt: string;
  width: number;
  height?: number;
  isCircle?: boolean;
}
const CustomImage = ({
  imageUrl,
  alt,
  width,
  height,
  isCircle,
}: CustomImageProps) => {
  const className = isCircle ? styles.circle : styles.base;
  return (
    <Image
      width={width}
      height={height || width}
      className={className}
      src={imageUrl}
      alt={alt}
    />
  );
};

export default CustomImage;
