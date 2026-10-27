import { useEffect, useState } from "react";

const User =()=>{

  type User = {
    username: string,
    id: string,
    email: string,
    name: string
  }
  const [users, setUsers] = useState<User[]>([]);

  useEffect(()=>{
    const fetchUser = async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUser();
  },[])

  return(
    <>
    <div>
        <h2>User Details</h2>
        {users.map((user)=>{
          return (
            <>
              {user.id}
              {user.name}
              {user.email}
              {user.username}
            </>
          )
        })}
    </div>
    </>
  )


}
export default User;