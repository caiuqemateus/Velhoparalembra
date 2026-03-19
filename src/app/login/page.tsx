'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TextField from '@/components/TextField';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.css';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
      await login(email, pass);
      router.push('/dashboard');
    } catch (err: any) {
      const msg = err?.response?.data?.error || err?.response?.data?.erro || 'E-mail ou senha inválidos.';
      setErro(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <div className={styles.pageContainer}>

        <div className={styles.sideLeft}>
          <img
            src="https://i.postimg.cc/TPkhWCZW/AQM7-Zwx-Do-Exc-R1qqbs42-Oefj-Yt-Ql0-Rph38y-OD15-X4-qgwp2sx-TO00gu-Rok-Ip59-Q-rmf-Wfag-X0n-Pic-FUQLqnkr-PLidma5y-Fu-WOxi.jpg"
            alt="Logo Novo Amigo"
            className={styles.sideLeftImg}
          />
        </div>

        <div className={styles.formContainer}>
          <h1 className={styles.titulo}>Login</h1>

          {erro && <p className={styles.erroMsg}>{erro}</p>}

          <form className={styles.formCadastrar} onSubmit={handleSubmit}>
            <TextField
              label="E-mail"
              type="email"
              text={email}
              onChange={setEmail}
              required
              autoComplete="email"
            />

            <TextField
              label="Senha"
              type="password"
              text={pass}
              onChange={setPass}
              required
              autoComplete="current-password"
            />

            <button type="submit" className={styles.botaoCadastrar} disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            <div className={styles.cadastroLink}>
              Não tem conta?{' '}
              <a href="/cadastro">Cadastre aqui</a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}