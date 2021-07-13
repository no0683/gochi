import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;

// next.js에서는 html,head,body과같은 document 태그들의 마크업들을 건너뛰고 페이지를 만들기때문에 _document.js를 통해 이 부분들을 수정할 수 있다.