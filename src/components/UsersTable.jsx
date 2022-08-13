import { useState, useEffect } from 'react';
import { getUsers } from './api';
import User from './User';

const UsersTable = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [usersData, setUsersData] = useState(null);

    useEffect(()=>{
        getUsers().then(res=> setUsersData(res))
    },[])

    const showUser = (user) => {
        setCurrentUser(user);
    }

    return (<>
        <h1>UsersTable</h1>
        <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #dddddd'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {usersData && usersData.map((user)=>(
                    <tr key={user.id} style={{ border: '1px solid #dddddd'}}>
                        <td>{user.name}</td>
                        <td>{`${user.address.city}, ${user.address.street}`}</td>
                        <td>{user.company.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><button onClick={()=>showUser(user)}>details</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br/><hr/><br/>
        {currentUser && <User user={currentUser}/>}
    </>)
}

export default UsersTable