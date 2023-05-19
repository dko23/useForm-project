
import './App.css';
import { useForm} from 'react-hook-form';
import React from 'react';


// import { Form, Button } from 'react-bootstrap';



function App() {
  const {
    register, handleSubmit, formState: { errors }, reset, watch
  }=useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  
  // console.log(watch("email"))
  const onSubmit = (data) => {
    console.log(data)
  
    reset()
  }

  return (

    <div className='container'>
      <div className='row'>
        <form onSubmit={handleSubmit(onSubmit)} className='box'>
          <div><h3>OCARINA</h3></div>
      
      <div class="mb-3">
    <label>First Name</label>
    <input type="text" class="form-control" name='first-name' {...register('first-name')}/>
  </div>

  <div class="mb-3">
    <label>Last Name</label>
    <input type="text" class="form-control" name='last-name'/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name='email'{...register('email',{required: true, pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})} />
        <div>We'll never share your email with anyone else. We promise, Wink wink! </div>
        {errors.email && errors.email.type === 'required' && (<p className='error-message'>Email is required</p>)}
        {errors.email && errors.email.type === 'pattern' && (<p className='error-message'>Email is not valid</p>) }
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" {...register('password', {required: true, minLength:5})} />
    {errors.password && errors.password.type === "required" && (<p className='error-message'>password is required</p>)}
  {errors.password && errors.password.type === "minLength" && (<p className='error-message'>password should be atleast 6 characters</p>)}
          </div>
          
          <div>
            <p>By clicking log in, or continuing with the other options below,<br></br>you agree to Ocarina's Terms of Service and have read the Privacy Policy</p>
          </div>

    
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    
    
    
    </div>


  );
}

export default App;

{/* <form >
<div className="form-control">
<label>Email</label>
 <input type="text" name="email"{...register('email', {
    required: true,
    pattern:{value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    message: "Email is not valid"}
  })} />
  
  {errors.email && errors.email.type === "required" && (<p className='error'>Email is required</p>)}
  {errors.email && (<p>{errors.email.message}</p>)}
</div>
<div className="form-control">
  <label>Password</label>
  <input type="password" name="password" {...register('password', { required: true, minLength: 6 })} />

  
</div>   
<div className="form-control">
  <label></label>
  <button type="submit">Login</button>
</div>
</form>
 */}





























  // {/* <form onSubmit={handleSubmit(onSubmit)}>
  //       <Form.Group className="mb-3" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control
  //           type="email"
  //           placeholder="Enter your email"
  //           {...register("email", {
  //             required: "Please enter your email",
  //             pattern: {
  //               value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
  //               message: "Please enter a valid email"
  //             }
  //           })}
  //         />
  //         {errors.email && <p className="errorMsg">{errors.email.message}</p>}
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="gender">
  //         <Form.Label>Select Gender</Form.Label>
  //         <Form.Check
  //           type="radio"
  //           label="Male"
  //           value="male"
  //           {...register("gender", {
  //             required: "Please select your gender"
  //           })}
  //         />
  //         <Form.Check
  //           type="radio"
  //           label="Female"
  //           value="female"
  //           {...register("gender")}
  //         />
  //         {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="skills">
  //         <Form.Label>Select Your Skills</Form.Label>
  //         <Form.Check
  //           type="checkbox"
  //           label="JavaScript"
  //           value="JavaScript"
  //           {...register("skills", {
  //             required: "Please select at-least one skill"
  //           })}
  //         />
  //         <Form.Check
  //           type="checkbox"
  //           label="React"
  //           value="react"
  //           {...register("skills")}
  //         />
  //         <Form.Check
  //           type="checkbox"
  //           label="Node.js"
  //           value="nodejs"
  //           {...register("skills")}
  //         />
  //         <Form.Check
  //           type="checkbox"
  //           label="Angular"
  //           value="angular"
  //           {...register("skills")}
  //         />
  //         {errors.skills && <p className="errorMsg">{errors.skills.message}</p>}
  //       </Form.Group>
  //       <label></label>
  //       <Button type="submit" variant="primary">
  //         Submit
  //       </Button>
  //     </form> */}