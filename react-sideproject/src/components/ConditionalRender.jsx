function ConditionalRender({ isLoggedIn, username }) {
    
    return (
        <div>
            {isLoggedIn && <h2>Welcome, {username}</h2>}
            {!isLoggedIn && <h2>Please log in</h2>}
            <p>Current User: {username || "Guest"}</p>

        </div>

    )
}

export default ConditionalRender;