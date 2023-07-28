"use client";
import React from "react";
import styles from "./customImage.module.scss";
import Image from "next/image";

interface CustomImageProps {
  imageUrl: string;
  alt: string;
  width?: number;
  layout?: "responsive" | "fill";
  sizes?: string;
  height?: number;
  isCircle?: boolean;
}
const CustomImage = ({
  imageUrl,
  alt,
  width,
  sizes,
  layout,
  height,
  isCircle,
}: CustomImageProps) => {
  const className = isCircle ? styles.circle : styles.base;
  return (
    <Image
      width={width}
      height={height || width}
      className={className}
      layout={layout}
      sizes={sizes}
      src={imageUrl}
      alt={alt}
    />
  );
};

export default CustomImage;
