import { useLoaderData } from "react-router-dom";
import User from "../user/User";


const Users = () => {

    const users = useLoaderData()

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <h3>Hello Users</h3>
            <div className="card-container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;