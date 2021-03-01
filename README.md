# my-project
# 🚀 项目备份技术栈和核心文件

-----------

🛬 `项目主体文件夹`
├── README.md
├── config
├── coverage
├── dist
├── jest.config.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── scripts
├── src
├── tests
├── tsconfig.json
├── webpack.config.js
├── yarn.lock
└── yideng.todo

## 开发部分 👷

### ①⏰ 项目核心技术栈

| 核心技术         | 情况说明                                                     |
| ---------------- | ------------------------------------------------------------ |
| babel-loader     | 生态丰富、直接导致 webpack 变慢                              |
| esbuild-loader   | 构建速度确实很快，但是tree shaiking的理念和webpack区别很大   |
| @reach/router    | 相对于官方的react-router简洁方便                             |
| react-hot-loader | 如果项目大了刷新特别卡顿一步到位[react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) |
| react-query      | 组件内进行大部分业务逻辑是请求数据填充数据直接上手           |
| react-hook-form  | 当系统中出现了大量的表单操作的时候直接可以上手该应用         |

### ②🍌 ts.config具体配置选项

| 配置参数                         | 参数说明                                                     |
| -------------------------------- | ------------------------------------------------------------ |
| incremental                      | 增量编译                                                     |
| outDir                           | 重定向输出目录                                               |
| target                           | 指定ECMAScript目标版本                                       |
| module                           | 指定生成哪个模块系统代码                                     |
| `lib`                            | 编译过程中需要引入的库文件的列表                             |
| sourceMap                        | 生成相应的 .map文件                                          |
| importHelpers                    | 从 [`tslib` ](https://www.npmjs.com/package/tslib)导入辅助工具函数（比如 `__extends`， `__rest`等） |
| `declaration`                    | 生成相应的 `.d.ts`文件。                                     |
| `rootDir`                        | 仅用来控制输出的目录结构                                     |
| `strict`                         | 启用所有严格类型检查选项                                     |
| `noUnusedLocals`                 | 若有未使用的局部变量则抛错                                   |
| `noUnusedParameters`             | 若有未使用的参数则抛错                                       |
| `noImplicitReturns`              | 不是函数的所有返回路径都有返回值时报错。                     |
| noFallthroughCasesInSwitch       | 报告switch语句的fallthrough错误                              |
| allowJs                          | 允许编译javascript文件                                       |
| `jsx`                            | 在 `.tsx`文件里支持JSX： `"React"`或 `"Preserve"`            |
| moduleResolution                 | 决定如何处理模块                                             |
| baseUrl                          | 解析非相对模块名的基准目录。                                 |
| forceConsistentCasingInFileNames | 禁止对同一个文件的不一致的引用                               |
| `esModuleInterop`                | 引用的时候带不带*                                            |
| `suppressImplicitAnyIndexErrors` | 阻止 `--noImplicitAny`对缺少索引签名的索引对象报错。         |
| `allowSyntheticDefaultImports`   | 允许从没有设置默认导出的模块中默认导入                       |
| experimentalDecorators           | 启用实验性的ES装饰器。                                       |
| `noImplicitAny`                  | 允不允许any                                                  |
| `noImplicitThis`                 | 当 `this`表达式的值为 `any`类型的时候，生成一个错误。        |
| `noImplicitAny`                  | 允不允许any                                                  |
| `typeRoots`                      | 要包含的类型声明文件路径列表。                               |
|                                  |                                                              |

### ③🍌  👱现有的技术栈

#### Playwright + Jest + TypeScript + React  + Node.js + Recoil + Storybook + Nest.js
