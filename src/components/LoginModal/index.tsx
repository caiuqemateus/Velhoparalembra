'use client';

import TextField from '@/components/TextField';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import styles from './styles.module.css';

export default function LoginModal({ open, onClose }: any) {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
      await login(email, pass);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);

    } catch (err: any) {
      const msg = err?.response?.data?.error || err?.response?.data?.erro || 'E-mail ou senha inválidos.';
      setErro(msg);
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  if (success) {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div style={{ textAlign: "center", padding: "40px" }}>
            <div style={{ fontSize: "55px", marginBottom: "15px" }}>✨</div>
            <h2 style={{ color: "#4CAF50" }}>Login realizado!</h2>
            <p style={{ opacity: 0.7 }}>Bem-vinda de volta 💖</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <h1 className={styles.titulo}>Login</h1>

        {erro && <p className={styles.erroMsg}>{erro}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            label="E-mail"
            type="email"
            text={email}
            onChange={setEmail}
            required
          />

          <TextField
            label="Senha"
            type="password"
            text={pass}
            onChange={setPass}
            required
          />

          <button type="submit" className={styles.botao} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <div className={styles.cadastroLink}>
            Não tem conta? <a href="/cadastro">Cadastre aqui</a>
          </div>
        </form>
      </div>
    </div>
  );
}