import Axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';

export default function Home({ list }) {
  return (
  <div>
    <Head>
      <title>HOME | 노고치</title>
      <meta name="description" content="노고치 홈입니다."></meta>
    </Head>
    <Header as="h3" style={{ paddingTop: "40px" }}>
      베스트 상품
    </Header>
    <Divider />
    <ItemList list={list.slice(0, 9)} />
    <Header as="h3" style={{ paddingTop: "40px" }}>
      신상품
    </Header>
    <Divider />
    <ItemList list={list.slice(9)} />
  </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    },
  };
};

// Next.js의 장점
// 1. 컴파일과 번들링이 자동으로 된다(webpack과 babel기능)
// 2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다
// 3. 서버사이드 렌더링이 지원 된다
// 4. 스태틱 파일을 지원한다