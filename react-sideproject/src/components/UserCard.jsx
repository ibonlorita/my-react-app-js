function UserCard({ name, age, email}) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>Age: {age}</h3>
            <h3>Email: {email}</h3>
        </div>
    );
}

export default UserCard;