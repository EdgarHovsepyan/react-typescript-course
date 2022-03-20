import { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate()
    const fetchUsers = async () => {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
      } catch (err) {
        alert(err + ": ERROR")
      }
    }

    useEffect(() => {
        fetchUsers()
      }, [])

    return (
        <List 
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user) => navigate("/users/" + user.id)} user={user} key={user.id} />}
        />
    )
}

export default UserPage