import React from "react";

const images = [
  {
    imageTitle: "image1",
    src: "https://assets3.novica.net/2015/assets/images/banner/general/jewelry_2022AUG31.mobile.jpg",
  },
  {
    imageTitle: "image2",
    src: "https://www.huaweicentral.com/wp-content/uploads/2021/04/huawei-full-view-display-phone-with-huawei-p30-pro-like-design-img-1.jpg",
  },
  {
    imageTitle: "image3",
    src: "https://png.pngtree.com/template/20211026/ourmid/pngtree-summer-new-clothing-orange-simple-e-commerce-full-screen-banner-image_673023.jpg",
  },
];
const delay = 4500;

function Home () {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img className="image-gallery" src={image.src} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
