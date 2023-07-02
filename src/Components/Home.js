import { useNavigate } from "react-router-dom";
import "../App.css"

function Home() {
    const navigate = useNavigate();
    return ( 
        <section id="home">
            <p>LOGGED IN</p>
            <button onClick={()=>navigate("/")}>login page</button>
        </section>
     );
}

export default Home;