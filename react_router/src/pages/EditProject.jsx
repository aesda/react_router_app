import { useParams } from "react-router";

function EditProject() {
    const { id } = useParams();
    return(
       
            <h2>
                EditProject { id }
            </h2>
           
     
    );
 }
 export default EditProject;