import Header from "../components/Header";
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import schema from "../validationSchemes/projectContact";







function ProjectContact() {
    const {
        register,
        handleSubmit,
        
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
    const onSubmit = (data) => console.log(data);

   
       
    return (
        <div>
            <h2>Got a project? Contact us today</h2>
            
             <h3>Reach out to our team of software and app development experts and we will help your business grow and succeed.</h3>
            <Header />
            
        
          <form onSubmit={handleSubmit(onSubmit)}>
          
     
            <div>
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" {...register("firstName")} />
                {errors.firstName?.message}
            </div>
            <div>
                <label htmlFor="lastName">Lastname</label>
                <input type="text" id="lastName" {...register("lastName")} />
                {errors.lastName?.message}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} />
                {errors.email?.message}
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" {...register("phone")} />
                {errors.phone?.message}
            </div>
            <div>
                <label htmlFor="projectDetails">Project Details</label>
                <textarea type="text" id="projectDetails" {...register("projectDetails")}></textarea>
                {errors.projectDetails?.message}
             </div>



            



            
  <legend>Project expected budget(AUD) *</legend>
  <div >
    <input type="radio" id="less" value="$25K – $50K" />
    <label htmlFor="less">Less than $25K </label>
  </div>

  <div>
    <input type="radio" id="50k"  value="Web application development" />
    <label htmlFor="50k">$25K – $50K</label>
  </div>

 

  <div>
    <input type="radio" id="100k"  value="Software Testing" />
    <label htmlFor="100k">$50K – $100K</label>
  </div>
  <div>
    <input type="radio" id="100k+"  value="100k+"  />
    <label htmlFor="100k+">$100K+</label>
  </div>


  <legend>Required service <span>*</span></legend>

  <div>
    <input type="radio" id="web"  value="Web application development"/>
    <label htmlFor="web">Web application development</label>
  </div>

  <div>
    <input type="radio" id="mobile" value="Mobile application development" />
    <label htmlFor="mobile">Mobile application development</label>
  </div>

  <div>
    <input type="radio" id="software"  value="Software Testing"  />
    <label htmlFor="software">Software Testing</label>
  </div>
  <div>
    <input type="radio" id="other"  value="Other"  />
    <label htmlFor="other">Other</label>
  </div>
  <div>
        <button type="submit">Send Message</button>
    </div>




        


    </form>
    </div>
    

    
    )
}
export default ProjectContact;