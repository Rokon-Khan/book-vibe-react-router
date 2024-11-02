
const User = ({user}) => {
    const {id, name, phone, email} = user;
    return (
        <div>
            
            <div className="card bg-blue-300 p-6 border-2 border-lime-400 my-4">
                <h2>Id: {id}</h2>
                <h2>Name: {name}</h2>
                <h2>Phone: {phone}</h2>
                <h2>Email: {email}</h2>
            </div>
            
        </div>
    );
};

export default User;