// pages/register.js
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    setError('');
    alert(`Kayıt başarılı! Email: ${email}, İsim: ${name}`);
    // Backend bağlantısı burada yapılacak
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="İsim" value={name} onChange={e => setName(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Şifre" value={password} onChange={e => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Kayıt Ol</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
