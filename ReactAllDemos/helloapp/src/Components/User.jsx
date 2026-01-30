import React from 'react'

export const User = (props) => {
  return (
    <div>
       <h2>User Name is : {props.username}  </h2>
      <h2>User Emails is :{props.email}</h2> 
    
    </div>
  )
}


// function User() {
//     return (
//         <div>
//             <h2>User Component</h2>
//             <p>This is the User component.</p>
//         </div>
//     );
// }
// export default User;