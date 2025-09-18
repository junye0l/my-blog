import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="준열의 개발 블로그">
      <main style={{padding: '2rem 0', textAlign: 'center'}}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p style={{fontSize: '1.2rem', margin: '1rem 0'}}>
            {siteConfig.tagline}
          </p>
          <p>
            개발과 공부를 기록하는 블로그입니다. 
            <br />
            블로그 포스트는 아래에서 확인하실 수 있습니다.
          </p>
        </div>
      </main>
    </Layout>
  );
}
