export interface BuildContext {
  rootDir: string;
  opts: NormalizedPluginOptions;
  routes: BuildRoute[];
  layouts: BuildLayout[];
  menus: Menu[];
  frontmatter: Map<string, string[]>;
  diagnostics: Diagnostic[];
  target: 'ssr' | 'client';
  isDevServerBuild: boolean;
}

export interface Diagnostic {
  type: 'error' | 'warn';
  message: string;
}

export interface RouteSourceFile {
  type: 'page' | 'endpoint' | 'layout' | 'menu';
  dirPath: string;
  dirName: string;
  filePath: string;
  fileName: string;
  ext: string;
}

export interface BuildRoute {
  type: 'page' | 'endpoint';
  /**
   * Unique id built from its relative file system path
   */
  id: string;
  /**
   * Local file system path
   */
  filePath: string;
  /**
   * URL Pathname
   */
  pathname: string;
  pattern: RegExp;
  paramNames: string[];
  layouts: BuildLayout[];
}

export interface ParsedLayoutId {
  layoutType: 'top' | 'nested';
  layoutName: string;
}

export interface BuildLayout extends ParsedLayoutId {
  filePath: string;
  dirPath: string;
  id: string;
}

export interface Menu {
  pathname: string;
  filePath: string;
}

export interface ParsedMenuItem {
  text: string;
  href?: string;
  items?: ParsedMenuItem[];
}

/**
 * @alpha
 */
export interface PluginOptions {
  /**
   * Directory of the `routes`. Defaults to `src/routes`.
   */
  routesDir?: string;
  /**
   * Ensure a trailing slash ends page urls. Defaults to `false`.
   */
  trailingSlash?: boolean;
  /**
   * MDX Options https://mdxjs.com/
   */
  mdx?: any;
}

export interface NormalizedPluginOptions extends Required<PluginOptions> {}

export interface MarkdownAttributes {
  [name: string]: string;
}
