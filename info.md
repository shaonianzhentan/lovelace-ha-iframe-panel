一个在HA里使用的侧边栏iframe面板

```

# 自定义面板（三种设置模式）
panel_custom:
  # 普通页面（和HA里的panel_iframe功能一样）
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-1
    sidebar_title: 普通页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: https://github.com/shaonianzhentan/lovelace-ha-iframe-panel

  # 全屏页面（隐藏头部）
  # fullscreen 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-2
    sidebar_title: 全屏页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: https://github.com/shaonianzhentan/lovelace-ha-iframe-panel
      fullscreen: true

  # 打开新页面（浏览器新开一个选项卡）
  # blank 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-3
    sidebar_title: 打开新页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: https://github.com/shaonianzhentan/lovelace-ha-iframe-panel
      blank: true

```