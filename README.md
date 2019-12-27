# lovelace-ha-iframe-panel
一个在HA里使用的侧边栏iframe面板

## 使用方式（使用HACS安装）

懒得介绍，自己去找

## 使用方式（下载安装）
将ha-iframe-panel.js放到HA的www目录下

在配置里添加以下内容，即可看到效果，OK后自行修改对应参数
```

# 自定义面板（四种设置模式）
panel_custom:
  # 普通页面（和HA里的panel_iframe功能一样）
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-1
    sidebar_title: 普通页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: https://demo.home-assistant.io/

  # 全屏页面（隐藏头部）
  # fullscreen 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-2
    sidebar_title: 全屏页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: https://demo.home-assistant.io/
      fullscreen: true

  # 打开新页面（浏览器新开一个选项卡）
  # blank 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-3
    sidebar_title: 打开新页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: https://demo.home-assistant.io/
      blank: true

  # 打开HA系统页面
  # hass 设置为 true
  - name: ha-iframe-panel
    url_path: ha-iframe-panel-4
    sidebar_title: 系统集成页面
    sidebar_icon: mdi:react
    js_url: /local/ha-iframe-panel.js
    config:
      url: /config/integrations/dashboard
      hass: true
```