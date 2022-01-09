import React, { useState } from 'react';

const BasicForms = () => {


const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const [allEntry , setallEntry] = useState([]);

const submitForm = (e) => {
    e.preventDefault();

if(email && password){
    const newEntry = { id: new Date().getTime().toString() ,  email:email , password:password };
   
    setallEntry([...allEntry , newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");
}
else{
    alert("Field is Empty");
}

}


    return (
      <>
      <div className='top'>
          <form action="" onSubmit={submitForm}>
              <div className='cmn'>
                  <label htmlFor="email">Email</label>
                  <input type="text" id='email' name='email' autoComplete='off' value={email} onChange={ (e) => setEmail(e.target.value)}/>
              </div>

              <div className='cmn'>
                  <label htmlFor="password">Password</label>
                  <input type="text" name='password' id='password' autoComplete='off' value={password} onChange={ (e) => setPassword(e.target.value)}/>
              </div>

              <button type='submit' className='cmn'>Login</button>
          </form>
</div>


          <div>
              {
                allEntry.map( (currElem) => {
                            const { id , email , password } = currElem;
                    return(
                        <div className='showDetails' key={id}>
                            <p>{email}</p>
                            <p>{password}</p>
                        </div>
                    )
                }

                )
              }
          </div>
      </>
    )
}

export default BasicForms;
