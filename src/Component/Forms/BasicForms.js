import React, { useState } from 'react';

const BasicForms = () => {


const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const [allEntry , setallEntry] = useState([]);

const submitForm = (e) => {
    e.preventDefault();


    const newEntry = { email:email , password:password };
    setallEntry([...allEntry , newEntry]);
    console.log(allEntry);


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
                    return(
                        <div className='showDetails'>
                            <p>{currElem.email}</p>
                            <p>{currElem.password}</p>
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
