import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // 🏠 기본 사이트 정보
  title: 'Junyeol Blog',                    // 브라우저 탭에 표시되는 제목
  tagline: 'Dinosaurs are cool',       // 메인 페이지 부제목
  favicon: 'img/main-icon.ico',          // 브라우저 탭 아이콘

  // 🚀 호스팅 설정  
  url: 'https://junyeol.github.io',  // 실제 도메인
  baseUrl: '/my-blog/',                        // 기본 경로 (보통 '/')

  // 📁 GitHub Pages 배포용 (사용 안 할 경우 삭제 가능)
  organizationName: 'junye0l',        // GitHub 유저명/조직명
  projectName: 'my-blog',          // GitHub 레포 이름

  // ⚠️ 에러 처리 설정
  onBrokenLinks: 'throw',             // 깨진 링크 발견시 빌드 중단
  onBrokenMarkdownLinks: 'warn',      // 깨진 마크다운 링크는 경고만

  // 🌍 다국어 설정 
  i18n: {
    defaultLocale: 'ko',              // 기본 언어를 한국어로
    locales: ['ko'],                  // 지원 언어 (영어 제거)
  },

  // 🔧 플러그인 및 프리셋 설정
  presets: [
    [
      'classic',
      {
        // 📖 문서 기능 (블로그만 사용할 경우 false로 설정)
        docs: false,                   // 문서 기능 비활성화

        // ✍️ 블로그 설정 (메인 기능)
        blog: {
          routeBasePath: '/',          // 블로그를 메인 페이지로 (중요!)
          showReadingTime: true,       // 읽기 시간 표시
          feedOptions: {               // RSS 피드 생성
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Junyeol',   // 블로그 제목
          blogDescription: '개발과 공부를 기록하는 블로그',  // 블로그 설명
          postsPerPage: 10,            // 페이지당 포스트 수
          blogSidebarTitle: '최근 포스트',  // 사이드바 제목
          blogSidebarCount: 100,         // 사이드바에 표시할 포스트 수
          
          // GitHub 편집 링크 (필요 없으면 삭제)
          editUrl: 'https://github.com/junye0l/my-blog/tree/main/',
          
          // 블로깅 모범 사례 경고
          onInlineTags: 'warn',        // 인라인 태그 경고
          onInlineAuthors: 'warn',     // 인라인 작성자 경고
          onUntruncatedBlogPosts: 'warn',  // 잘리지 않은 포스트 경고
        },

        // 🎨 테마 설정
        theme: {
          customCss: './src/css/custom.css',  // 커스텀 CSS 파일
        },
      } satisfies Preset.Options,
    ],
  ],

  // 🎨 테마 상세 설정
  themeConfig: {
    // 📱 소셜 미디어 카드 이미지
    image: 'img/docusaurus-social-card.jpg',

    // 🧭 네비게이션 바
    navbar: {
      title: 'Junyeol',           // 로고 옆 텍스트
      logo: {
        alt: 'My Site Logo',
        src: 'img/main-icon.ico',           // 로고 이미지
      },
      items: [
        // 블로그 링크 (메인 페이지)
        // 정확히 메인 페이지(/)일 때만 활성화되도록 설정
        {
          to: '/', 
          label: 'Blog', 
          position: 'left',
          // 정확히 / 경로일 때만 활성화 (태그 페이지에서는 비활성화)
          activeBaseRegex: '^/$',
        },
        
        // 태그 페이지 - 태그 페이지에서만 활성화되도록 설정
        {
          to: '/tags', 
          label: 'Tag', 
          position: 'left',
          // tags 경로일 때만 활성화
          activeBaseRegex: '^/tags',
        },
        
        // GitHub 링크
        {
          href: 'https://github.com/junye0l',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // 🦶 푸터
    footer: {
      style: 'dark',                   // 'dark' 또는 'light'
      copyright: `Copyright © ${new Date().getFullYear()} JunYeol Blog`,
    },

    // 🎨 코드 하이라이팅 테마
    prism: {
      theme: prismThemes.github,       // 라이트 모드 테마
      darkTheme: prismThemes.dracula,  // 다크 모드 테마
      additionalLanguages: ['java', 'python', 'javascript'],  // 추가 언어 지원
    },

    // 🌙 다크모드 설정
    colorMode: {
      defaultMode: 'light',            // 기본 모드
      disableSwitch: false,            // 다크모드 스위치 표시
      respectPrefersColorScheme: true, // 시스템 설정 따르기
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
