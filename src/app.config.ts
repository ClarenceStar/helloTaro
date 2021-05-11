export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/other/index',
  ],
  tabBar: {
    color: '#2c2c2c',
    selectedColor: '#1296db',
    list: [{
      pagePath: "pages/index/index",
      iconPath: 'images/home.png',
      selectedIconPath: 'images/home-selected.png',
      text: "首页"
    }, {
      pagePath: "pages/user/index",
      iconPath: 'images/user.png',
      selectedIconPath: 'images/user-selected.png',
      text: "用户"
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
}
