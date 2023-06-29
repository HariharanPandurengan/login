import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <p>Home</p>
            <button onClick={()=>navigate("/")}>login</button>
        </>
     );
}

export default Home;