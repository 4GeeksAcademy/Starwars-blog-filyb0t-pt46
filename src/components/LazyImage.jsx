// src/components/LazyImage.jsx
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    effect="blur"
    placeholderSrc="https://via.placeholder.com/400x300?text=Loading..."
    onError={(e) => {
      e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
    }}
    className="card-img-top"
  />
);

export default LazyImage;
