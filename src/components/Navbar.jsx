const Navbar = () => {
    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
            <h2>SimpleAuth</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: 10, alignItems: 'center' }}>
            <button style={{ minWidth: '8rem' }}>Sign In</button>
            <button style={{ minWidth: '8rem' }}>Sign Up</button>
        </div>
    </div>
}

export default Navbar;