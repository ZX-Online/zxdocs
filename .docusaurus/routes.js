import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ru/blog',
    component: ComponentCreator('/ru/blog', '5c5'),
    exact: true
  },
  {
    path: '/ru/blog/archive',
    component: ComponentCreator('/ru/blog/archive', 'ea9'),
    exact: true
  },
  {
    path: '/ru/blog/first-blog-post',
    component: ComponentCreator('/ru/blog/first-blog-post', '52c'),
    exact: true
  },
  {
    path: '/ru/blog/long-blog-post',
    component: ComponentCreator('/ru/blog/long-blog-post', '2b1'),
    exact: true
  },
  {
    path: '/ru/blog/mdx-blog-post',
    component: ComponentCreator('/ru/blog/mdx-blog-post', '2ad'),
    exact: true
  },
  {
    path: '/ru/blog/tags',
    component: ComponentCreator('/ru/blog/tags', 'c08'),
    exact: true
  },
  {
    path: '/ru/blog/tags/docusaurus',
    component: ComponentCreator('/ru/blog/tags/docusaurus', 'e9e'),
    exact: true
  },
  {
    path: '/ru/blog/tags/facebook',
    component: ComponentCreator('/ru/blog/tags/facebook', '86c'),
    exact: true
  },
  {
    path: '/ru/blog/tags/hello',
    component: ComponentCreator('/ru/blog/tags/hello', 'a43'),
    exact: true
  },
  {
    path: '/ru/blog/tags/hola',
    component: ComponentCreator('/ru/blog/tags/hola', '19c'),
    exact: true
  },
  {
    path: '/ru/blog/welcome',
    component: ComponentCreator('/ru/blog/welcome', '16a'),
    exact: true
  },
  {
    path: '/ru/markdown-page',
    component: ComponentCreator('/ru/markdown-page', 'b5b'),
    exact: true
  },
  {
    path: '/ru/docs',
    component: ComponentCreator('/ru/docs', 'c4f'),
    routes: [
      {
        path: '/ru/docs/borielzxbasic/',
        component: ComponentCreator('/ru/docs/borielzxbasic/', 'f6d'),
        exact: true,
        sidebar: "borielzx"
      },
      {
        path: '/ru/docs/borielzxbasic/sinclair-basic-to-boriel-basic',
        component: ComponentCreator('/ru/docs/borielzxbasic/sinclair-basic-to-boriel-basic', '0c2'),
        exact: true,
        sidebar: "borielzx"
      },
      {
        path: '/ru/docs/category/boriel-zx-basic',
        component: ComponentCreator('/ru/docs/category/boriel-zx-basic', 'f8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/category/tutorial---basics',
        component: ComponentCreator('/ru/docs/category/tutorial---basics', 'ecb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/category/tutorial---extras',
        component: ComponentCreator('/ru/docs/category/tutorial---extras', 'a16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/intro',
        component: ComponentCreator('/ru/docs/intro', 'a0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tsconf/',
        component: ComponentCreator('/ru/docs/tsconf/', 'a4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/ru/docs/tutorial-basics/congratulations', '0a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ru/docs/tutorial-basics/create-a-blog-post', '2be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/ru/docs/tutorial-basics/create-a-document', '128'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/ru/docs/tutorial-basics/create-a-page', 'ea4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ru/docs/tutorial-basics/deploy-your-site', 'c89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/ru/docs/tutorial-basics/markdown-features', 'bde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ru/docs/tutorial-extras/manage-docs-versions', '536'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ru/docs/tutorial-extras/translate-your-site', '0df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/zxnext/',
        component: ComponentCreator('/ru/docs/zxnext/', '184'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ru/docs/zxspectrum/',
        component: ComponentCreator('/ru/docs/zxspectrum/', '09c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ru/',
    component: ComponentCreator('/ru/', 'b76'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
