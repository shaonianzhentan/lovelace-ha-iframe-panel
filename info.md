一个在HA里使用的侧边栏iframe面板

```

# 自定义面板
panel_custom:
  # 普通页面（和HA里的panel_iframe功能一样）
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-1
    sidebar_title: 普通页面
    sidebar_icon: mdi:react
    js_url: /community_plugin/lovelace-ha-iframe-panel/ha-iframe-panel.js
    config:
      url: https://demo.home-assistant.io/

  # 全屏页面（隐藏头部）
  # fullscreen 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-2
    sidebar_title: 全屏页面
    sidebar_icon: mdi:react
    js_url: /community_plugin/lovelace-ha-iframe-panel/ha-iframe-panel.js
    config:
      url: https://demo.home-assistant.io/
      fullscreen: true

  # 打开新页面（浏览器新开一个选项卡）
  # blank 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-3
    sidebar_title: 打开新页面
    sidebar_icon: mdi:react
    js_url: /community_plugin/lovelace-ha-iframe-panel/ha-iframe-panel.js
    config:
      url: https://demo.home-assistant.io/
      blank: true

  # 打开HA系统页面（不要前面的域名和端口的URL地址）
  # hass 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-4
    sidebar_title: 系统集成页面
    sidebar_icon: mdi:react
    js_url: /community_plugin/lovelace-ha-iframe-panel/ha-iframe-panel.js
    config:
      url: /config/integrations/dashboard
      hass: true

  # 选项卡页面
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-5
    sidebar_title: TAB页面
    sidebar_icon: mdi:react
    js_url: /community_plugin/lovelace-ha-iframe-panel/ha-iframe-panel.js
    config:
      list:
        - name: 第一个页面
          url: /config/integrations/dashboard
          icon: mdi:react
        - name: 第二个页面
          icon: mdi:react
          url: https://demo.home-assistant.io/
```