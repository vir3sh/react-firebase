import React, { useState } from 'react';

function PasswordField() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((ShowPassword) => (!ShowPassword));
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{ width: '100%', paddingRight: '30px' }}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '-45px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
      >
        {showPassword ? 'hide' : 'show'}
      </span>
    </div>
  );
}

export default PasswordField;
