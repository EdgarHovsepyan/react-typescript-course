import { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface UserItemPageParams {
    id: string;
};

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    const fetchUser = async () => {
      try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
        setUser(response.data)
      } catch (err) {
        alert(err + ": ERROR")
      }
    }

    useEffect(() => {
        fetchUser()
    }, [])


  return (
    <div>
        <button onClick={() => navigate('/users')} >Back</button>
        <h3>User Page</h3>
        <div>
            {user?.email}
        </div>
        <div> {user?.name} {user?.address.city} {user?.address.street} {user?.address.zipcode} </div>
    </div>
  )
}

export default UserItemPage