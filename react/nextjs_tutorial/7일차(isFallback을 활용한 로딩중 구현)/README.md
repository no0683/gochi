## nextjs tutorial(ver.2021/07/15)

* 오늘은 아래내용들을 추가작업 했습니다.

1. getStaticPaths를 사용하여 지정된 페이지 이외의 것들은 처음 접속할때 html,json파일을 불러오기때문에 잠시 빈화면이 보이게됨
-두 번째 접속부터는 정적파일들이 생성되있기때문에 빈 화면이 보이지 않게됨
-빈 화면을 채우고자 초기값이 false인 router.isFallback을 조건문과 사용하여 로딩화면을 넣어줌

2. getStaticPaths의 페이지 지정을 수동으로 id값을 넣는것대신 api를 가져와 map을사용하여 연동시켜 효율성을 증가시켜줌

[pages/detail/id.js]
```javascript
import Axios from 'axios';
import Head from 'next/head';
import Item from '../../src/component/Item';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';

const Post = ({ item, name }) => {
  const router = useRouter();

  // isFallback의 초기값은 false
  if(router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  };

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: '740' } },
    //   { params: { id: '730' } },
    //   { params: { id: '729' } }
    // ],

    // api안에 모든 페이지들을 미리 정적파일을 생성할필요는없어 slice를 사용하여 조절함
    paths: data.slice(0,3).map(item => ({
      params: {
        id: item.id.toString()
      }
    })),
    fallback: true,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    },
  };
};
```