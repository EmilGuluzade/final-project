import React from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";
const Gallery = () => {
  const images = [
    [
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-1.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-2.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-3.webp",
      },
    ],
    [
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-4.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-5.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-6.webp",
      },
    ],
    [
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-7.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-8.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-9.webp",
      },
    ],
    [
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-4.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-5.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-2.webp",
      },
    ],
    [
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-3.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-1.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-6.webp",
      },
    ],
    [
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-7.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-8.webp",
      },
      {
        src: "https://big-skins.com/frontend/foxic-html-demo/images/gallery/gallery-9.webp",
      },
    ],
  ];

  return (
    <>
      <Helmet>
        <title> Gallery </title>
      </Helmet>
      <div class="page-title text-center my-5 ">
        <div class="title">
          <h1>GALLERY</h1>
        </div>
      </div>
      <section className="gallery container  flex-column">
        {images.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((image, imageIndex) => (
              <article key={imageIndex}>
                <img src={image.src} />
              </article>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
