function ConditionFunUser () {
  const users = [{id : 1, name : "Hari" , online : true},
    {id : 2, name : "Krishna" , online : false}
  ];
  return(
    <ul>
      {users.map(user=>(
        <li
          key ={user.id}>
            {user.name}
            {user.online && ""}
        </li>
      ))}
    </ul>
  )
}

export default ConditionFunUser;