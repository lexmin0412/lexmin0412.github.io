module.exports = {
  title: 'CellerChan Blog',
  description: 'All I know is that I know nothing.',
  themeConfig : {
    // base: "/",
    repo: 'vuejs/vuepress',
    nav : [
        { text: 'taro相关', link: '/Taro/Taro踩坑指南.md' },
        { text: 'ES6', link: '/ES6+/1. 解构.md' },
    ],
    sidebar: [
      {
        title: 'Git相关',
        collapsable: false,
        children: [
          '/Git相关/git报错的解决方案.md',
          '/Git相关/git提交日志规范.md',
        ]
      },
      {
        title: 'npm相关',
        children: [
          '/npm相关/npm常用命令.md',
        ]
      },
      {
        title: 'React相关',
        children: [
          '/React相关/React生命周期概述',
        ]
      },
      {
        title: 'npm相关',
        children: [
          '/npm相关/npm常用命令.md',
        ]
      },
    ],
    sidebarDepth : 2
  }
}