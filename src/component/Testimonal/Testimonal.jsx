import fullStar from "../../assets/icons/full-star.svg";
import emptyStar from "../../assets/icons/empty-star.svg";
const ReactRating = require("react-rating"); //If const doesn't work IMPORT will, didn't get to test require but tested import on App.js

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__profile-pic">
        <img src={testimonial.imgsrc} alt="testimonial profile src" />
      </div>
      <div className="testimonial__testimonial-text">
        <div className="testimonial__profile-name">
          <h3 className="testimonial__name">{testimonial.name}</h3>
        </div>
        <div className="testimonial__message-div">
          <h3 className="testimonial__message">testimonial.message</h3>
        </div>
        <div className="testimonial__rating-div">
          <ReactRating
            initialRating={testimonial.stars}
            emptySymbol={<img src={emptyStar} className="icon" />}
            fullSymbol={<img src={fullStar} className="icon" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
