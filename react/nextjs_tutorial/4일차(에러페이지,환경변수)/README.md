## nextjs tutorial(ver.2021/07/10)

[에러 페이지]
<img src="public/images/react_nextjs_20210710.gif" width="90%" height="80%" alt="react_nextjs"></img>

<img src="public/images/react_nextjs_20210710(2).gif" width="90%" height="80%" alt="react_nextjs"></img>

[개발,프로덕션 환경예따른 페이지]
<img src="public/images/react_nextjs_20210710(3).gif" width="90%" height="80%" alt="react_nextjs"></img>

<img src="public/images/react_nextjs_20210710(4).gif" width="90%" height="80%" alt="react_nextjs"></img>

* 오늘은 아래내용들을 추가작업 했습니다.

1. 404,500 에러 페이지 커스터마이징
2. 개발,프로덕션 모드에따라 서로 다른 API 데이터를 가져오기

[pages/404.js]
```javascript
// pages폴더에 404.js 이름의 파일을만들고 그안에서 return되는값으로 404 페이지를 커스터마이징 할 수 있습니다.
import { Icon } from "semantic-ui-react";

export default function Error404() {
    return (
        <div style={{ padding: "200px 0", textAlign: "center", fontSize: "30px" }}>
            <Icon name="warning circle" color="red" />
            404 : 페이지를 찾을 수 없습니다.
        </div>
    );
};
```

[pages/_error.js]
```javascript
// next.js에서 제공하는 404,500 에러발생시 페이지를 커스타마이징 할 수 있는 코드 입니다.
// pages폴더에 _error.js 이름의 파일을 만들고 제공된 코드들을 입력해주면 됩니다.
function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error;
```

[pages/index.js]
```javascript
import Axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 만들어둔 환경변수에 접근하기위해서는 'process.env.변수이름' 형식으로 입력 해줍니다.
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

    function getData() {
      Axios.get(API_URL).then((res) => {
        console.log(res.data);
        setList(res.data);
        setIsLoading(false);
      });
    };

    useEffect(() => {
      getData();
    }, []);

  return (
  <div>
    <Head>
      <title>HOME | 노고치</title>
      <meta name="description" content="노고치 홈입니다."></meta>
    </Head>

    {isLoading && (
      <div style={{ padding: "300px 0" }}>
        <Loader active>
          Loading
        </Loader>
      </div>
    )}

    {!isLoading && (
      <>
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
      </>
    )}
  </div>
  );
}
```

[pages/view/id.js]
```javascript
import Axios from 'axios';
import Head from 'next/head';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {/* 상단에 name 매개변수를 추가하고 return 내부에 선언 해줍니다. */}
          {/* 개발자 모드일때는 DEVELOPMENT, 프로덕션 모드일때는 PRODUCTION으로 표시 됩니다. */}
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      // 서버사이드렌더링함수의 return의 props 항목에 name을 추가 합니다.
      name: process.env.name
    },
  };
};
```

[src/component/Gnb.js]
```javascript
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Gnb() {
    const router = useRouter();
    let activeItem;

    if (router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    }

    function goLink(e, data) {
        if (data.name === "home") {
            router.push('/');
        } else if (data.name === "about") {
            router.push('/about');
        }
    }

    return(
        <Menu inverted>
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={goLink}
            />
            <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={goLink}
            />
            {/* 메뉴에 없는경로로 이어지는 탭을 추가 했습니다.(404 오류발생유도) */}
            <Menu.Item
            name='Contact Us'
            active={activeItem === 'contact'}
            onClick={() => {
                router.push("/contact");
            }}
            />
        </Menu>
    );
};
```

* development/production환경에서 각각 다른 값들을 가져올수 있도록 .env.* 파일을 만들었습니다.

[.env.development]
```
name=DEVELOPMENT
NEXT_PUBLIC_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
```

[.env.production]
```
name=PRODUCTION
NEXT_PUBLIC_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior
```