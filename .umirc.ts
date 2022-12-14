import { defineConfig } from 'dumi';

let base = '/xiaoshuai-ui';
let publicPath = '/xiaoshuai-ui/';

//本地启动不许奥设置 路径
if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'XIAOSHUAI UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  webpack5: {},
  base,
  publicPath,
});
