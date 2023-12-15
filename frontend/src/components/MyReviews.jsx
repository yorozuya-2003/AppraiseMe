import { useState, useEffect, React } from "react";
import axios from 'axios';
import "../styles/myreviews.css";
import API_BASE_URL from "./ApiConfig";
import { useNavigate,Link } from "react-router-dom";

export default function MyReviews() {
    let loggedInUser = JSON.parse(localStorage.getItem("user"));
    let userEmail = null;
    const navigate = useNavigate();

    // console.log(loggedInUser)

    useEffect(() => {
        if(loggedInUser){
            userEmail = loggedInUser.email;
        }
        else {
            navigate('/');
        }
    }, [loggedInUser]);

    const [reviewModel, setReviewModel] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [reviewModelResponse] = await Promise.all([
                    axios.get(`${API_BASE_URL}/get_user_reviews/${userEmail}`)
                ]);
    
                console.log(reviewModelResponse.data.reviews);
                setReviewModel(reviewModelResponse.data.reviews);

            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, []);
    
  return (
    <div className='myreviews'>
      <h1>My Reviews</h1>
      <div className='reviewlist'>
        
      {reviewModel.map((item, index) => (
            <div style={{width:'100%'}} key={index} className='reviewdiv'>
                <div>
                    <h3 style={{}}>To: <img src={item.img} alt="" /> {item.First_name} {item.Second_name}</h3>
                    <p>{item.sentence}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <button className='continue-btn'>Edit</button>
                    <button className='continue-btn'>Delete</button>
                </div>
            </div>
        ))}

      </div>
    </div>
  )
}