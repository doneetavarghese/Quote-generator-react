import React, { useState, useEffect } from 'react';
import './Main.css';
import { MDBBtn } from 'mdb-react-ui-kit';

function Main() {
    const [quote, setQuote] = useState("hello");
    const [author, setAuthor] = useState("world");

    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => console.log(error));
    }, []);

    const fetchNewQuote = () => {
        fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 my-5 mx-3" style={{ backgroundColor: "Plum", width: "450px", height: "200px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}  >
                    <h5 style={{color:"MediumVioletRed",fontFamily:"cursive"}}>{quote}</h5>
                    <h6 style={{color:"MediumVioletRed",fontFamily:"cursive"}}> -{author}</h6>
                    <MDBBtn onClick={fetchNewQuote} className='mx-5 my-5' color='info'>Info</MDBBtn>
                </div>
            </div>
        </div>
    );
}

export default Main;










