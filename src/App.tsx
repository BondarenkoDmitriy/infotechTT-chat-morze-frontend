import React, { useState } from 'react';
import { ChatMessenger } from './Components/ChatMessenger/ChatMessenger';
import { Authorization } from './Components/Authorization/Authorization';
import { UserRole } from './type/roles';

export const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.User);
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (passingName: string, passingRole: UserRole, passingPassword: string) => {
    setUsername(passingName);
    setRole(passingRole);
    setPassword(passingPassword);
    setIsAuth(true);
  };

  return (
    <div>
      {isAuth && role ? (
        <ChatMessenger username={username} role={role} password={password} />
      ) : (
        <Authorization onLogin={handleLogin} />
      )}
    </div>
  );
};
