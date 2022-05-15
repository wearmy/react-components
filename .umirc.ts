import { accessSync } from 'fs';
import { defineConfig } from 'dumi';


function isAntd(name: string): boolean {
  try {
    accessSync(`./src/${name}`);
    return false;
  } catch (err) {
    return true; 
  } 
}

export default defineConfig({
  title: 'wearmy',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: './logo.png', 
  outputPath: 'docs-dist',
  mode: 'site',
  // mock: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'wearmy',
        style: false,
        /* customStyleName: name => {
          return isAntd(name) ? `antd/es/${name}/style` : './index.less'
        }, */ 
        "customName": (name: string) => {
          return isAntd(name) ? `antd/es/${name}` : './';
        }
      },
    ],
  ]
});
