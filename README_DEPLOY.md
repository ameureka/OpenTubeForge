# OpenTubeForge 发布候选包 v1

纯静态宣传站，适用于 Cloudflare Pages Direct Upload。上传本目录即可；不需要构建命令、包管理器或环境变量。

- 页面文件：`index.html`、`styles.css`、`script.js`、`assets/favicon.svg`
- 主项目软件许可：`LICENSE`（Apache-2.0），`NOTICE`
- 仓库：`https://github.com/ameureka/OpenTubeForge`
- 默认域名：Cloudflare Pages 按项目名分配 `<PROJECT_NAME>.pages.dev`，名称被占用时追加随机字符；以平台结果为准
- 本目录不含参考站素材、研究证据、REA工具、浏览器profile或任何私有路径

## Cloudflare Pages 设置

```text
Project name: opentubeforge
Framework preset: None
Build command: 留空
Build/output directory: 本目录
Root directory: 不设置
```

浏览器 Direct Upload：把本文件夹拖入即可。CLI：`npx wrangler pages project create` 后 `npx wrangler pages deploy <本目录>`。

## 当前状态

仓库已公开但为空；此候选包还没有 commit、push 或部署。Apache-2.0是主项目软件许可，不自动授权第三方素材或参考研究内容。上线仍需用户明确批准。
