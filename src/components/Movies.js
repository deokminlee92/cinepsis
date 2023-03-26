import React, { useState } from "react";
import { Modal, show, Button } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500";

export default function Movies({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} alt="" />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            View more
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMG + poster_path}
                alt=""
              />
              <h3>{title}</h3>
              <h4>ImDb: {vote_average}</h4>
              <h5>Release date : {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

// import "../styles/Carousel.css";
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import styles from "../styles/Carousel.css";

// //images
// import img1 from "../assets/images/david-clode-SqZkJNJkHx0-unsplash.jpg";
// import img2 from "../assets/images/mailchimp-04X1Yp9hNH8-unsplash (2).jpg";
// import img3 from "../assets/images/mailchimp-mpwF3Mv2UaU-unsplash.jpg";
// import img4 from "../assets/images/marc-kleen-c7Umv8l6DEo-unsplash.jpg";

// // import required modules
// import { Pagination, Navigation, EffectFade } from "swiper";

// export default function App() {
//   // Refactoring SwiperSlides
//   // const photos = { img1, img2, img3, img4 };

//   return (
//     <div className={styles.container}>
//       <Swiper
//         pagination={
//           {
//             // type: "fraction",
//           }
//         }
//         navigation={true}
//         modules={[Pagination, Navigation, EffectFade]}
//         effect={"fade"}
//         // className="mySwiper"
//         className={styles.myswiper}
//       >
//         {/* Refactoring SwiperSlide  */}
//         {/* {photos.map((photo, i) => (
//           <SwiperSlide className={styles.swiperslide}>
//             <img src={`../assets/images/${photo.toString()}`} alt="" />
//           </SwiperSlide>
//         ))} */}
//         <SwiperSlide>
//           <img src={img1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img4} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
