import { Link, useParams } from "react-router";
import Header from "../components/Header";

function Project() {
    const { id } = useParams();
    return(
       <>
            <h2>
                Project { id }
            </h2>
            <Link to={`/project/${id}/edit`}>Edit</Link>
            <Header />
            </>
           
     
    );
 }
 export default Project;