import React from 'react'

function User() {
  return (
    <div>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginTop:"30vh", }}>
      <h2>User Profile</h2>
      <div style={{ marginBottom: '15px' }}>
        <strong>Name</strong> 
      </div>
      <div style={{ marginBottom: '15px'  }}>
        <strong>Sign out</strong> 
      </div>
      {/* Add more user details here */}
    </div>
    </div>
  )
}

export default User
