import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
  <div>
    <Head>
      <title>HOME | 노고치</title>
    </Head>
    <div>Hello!!</div>
  </div>
  );
}

// Next.js의 장점
// 1. 컴파일과 번들링이 자동으로 된다(webpack과 babel기능)
// 2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다
// 3. 서버사이드 렌더링이 지원 된다
// 4. 스태틱 파일을 지원한다