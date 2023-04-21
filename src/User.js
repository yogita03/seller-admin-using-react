import { useState } from 'react';
import UserForm from './UserForm';
import ListProduct from './ListProduct';
const User = () => {
  const [ tt , setTt] = useState()
  const savaData =(toggle)=>{
    setTt(toggle)
  }

  return (
    <div>
     <UserForm toggleData={savaData}/>
     <ListProduct tg={tt}/>
    </div>
  );
}

export default User