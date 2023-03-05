import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../../utility/ImageCarousel";
const images = [
    "https://s3.amazonaws.com/dropbox.valentine/assets/blkw.png",
    "https://pbs.twimg.com/media/FKhqe2GXMAMpUKT?format=png", 
    "https://bgcc.org/wp-content/uploads/2021/08/DSC_0564-445x340.jpg",
    "https://bgcc.org/wp-content/uploads/2021/08/Group-with-Ron-Kittle-453x340.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2oOD4CUHhEpTXnW6pmwoelA23MkqDvdcww&usqp=CAU",
    "https://cdn.2kgames.com/2020/03/16/5e7010dd56785valentine_first_carousel.jpg",
    "https://images.squarespace-cdn.com/content/v1/5ab2cd07297114a23a0399da/1527230587942-TAHN89R7E4LTJJP15FSN/Screen+Shot+2018-05-25+at+1.35.44+AM.png"
]
const HomePage = () => (
    <div className="jumbotron">
        <h1>Valentine Boys and Girls Club</h1>
        <ImageCarousel images={images}></ImageCarousel>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn More
        </Link>

    </div>
);

export default HomePage;