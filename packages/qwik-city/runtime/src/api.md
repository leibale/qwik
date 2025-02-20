## API Report File for "@builder.io/qwik-city"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Component } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';
import { ResourceReturn } from '@builder.io/qwik';

// @public (undocumented)
export const Content: Component<    {}>;

// @public (undocumented)
export interface ContentHeading {
    // (undocumented)
    id: string;
    // (undocumented)
    level: number;
    // (undocumented)
    text: string;
}

// @public (undocumented)
export interface ContentMenu {
    // (undocumented)
    href?: string;
    // (undocumented)
    items?: ContentMenu[];
    // (undocumented)
    text: string;
}

// Warning: (ae-forgotten-export) The symbol "DocumentHeadValue" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "DocumentHeadProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type DocumentHead<T = unknown> = DocumentHeadValue | ((props: DocumentHeadProps<T>) => DocumentHeadValue);

// @public (undocumented)
export interface DocumentLink {
    // (undocumented)
    as?: string;
    // (undocumented)
    crossorigin?: string;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    href?: string;
    // (undocumented)
    hreflang?: string;
    // (undocumented)
    id?: string;
    // (undocumented)
    imagesizes?: string;
    // (undocumented)
    imagesrcset?: string;
    // (undocumented)
    integrity?: string;
    // (undocumented)
    key?: string;
    // (undocumented)
    media?: string;
    // (undocumented)
    prefetch?: string;
    // (undocumented)
    referrerpolicy?: string;
    // (undocumented)
    rel?: string;
    // (undocumented)
    sizes?: string;
    // (undocumented)
    title?: string;
    // (undocumented)
    type?: string;
}

// @public (undocumented)
export interface DocumentMeta {
    // (undocumented)
    content?: string;
    // (undocumented)
    httpEquiv?: string;
    // (undocumented)
    key?: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    property?: string;
}

// @public (undocumented)
export interface DocumentStyle {
    // (undocumented)
    key?: string;
    // (undocumented)
    props?: {
        [propName: string]: string;
    };
    // (undocumented)
    style: string;
}

// Warning: (ae-forgotten-export) The symbol "RequestEvent" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "EndpointResponse" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type EndpointHandler<BODY = unknown> = (ev: RequestEvent) => EndpointResponse<BODY> | undefined | null | Promise<EndpointResponse<BODY> | undefined | null>;

// Warning: (ae-forgotten-export) The symbol "HtmlProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const Html: Component<HtmlProps>;

// @public (undocumented)
export interface QwikCityPlan {
    // (undocumented)
    cacheModules?: boolean;
    // Warning: (ae-forgotten-export) The symbol "MenuData" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    menus?: MenuData[];
    // (undocumented)
    routes: RouteData[];
    // (undocumented)
    trailingSlash?: boolean;
}

// @public (undocumented)
export type ResolvedDocumentHead = Required<DocumentHeadValue>;

// Warning: (ae-forgotten-export) The symbol "ContentModuleLoader" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "EndpointModuleLoader" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ROUTE_TYPE_ENDPOINT" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type RouteData = [pattern: RegExp, pageLoaders: ContentModuleLoader[]] | [pattern: RegExp, pageLoaders: ContentModuleLoader[], paramNames: string[]] | [
pattern: RegExp,
endpointLoaders: EndpointModuleLoader[],
paramNames: string[],
routeType: typeof ROUTE_TYPE_ENDPOINT
];

// @public (undocumented)
export interface RouteLocation {
    // (undocumented)
    readonly hash: string;
    // (undocumented)
    readonly hostname: string;
    // (undocumented)
    readonly href: string;
    // Warning: (ae-forgotten-export) The symbol "RouteParams" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    readonly params: RouteParams;
    // (undocumented)
    readonly pathname: string;
    // (undocumented)
    readonly query: Record<string, string>;
    // (undocumented)
    readonly search: string;
}

// @public (undocumented)
export const useContentHeadings: () => ContentHeading[] | undefined;

// @public (undocumented)
export const useContentMenu: () => ContentMenu | undefined;

// @public (undocumented)
export const useDocumentHead: () => Required<ResolvedDocumentHead>;

// @public (undocumented)
export const useEndpoint: <T = unknown>() => ResourceReturn<T>;

// @public (undocumented)
export const useLocation: () => RouteLocation;

// (No @packageDocumentation comment for this package)

```
