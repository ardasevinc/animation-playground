/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const NumberAnimationsLazyImport = createFileRoute('/number-animations')()

// Create/Update Routes

const NumberAnimationsLazyRoute = NumberAnimationsLazyImport.update({
  id: '/number-animations',
  path: '/number-animations',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/number-animations.lazy').then((d) => d.Route),
)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/number-animations': {
      id: '/number-animations'
      path: '/number-animations'
      fullPath: '/number-animations'
      preLoaderRoute: typeof NumberAnimationsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/number-animations': typeof NumberAnimationsLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/number-animations': typeof NumberAnimationsLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/number-animations': typeof NumberAnimationsLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/number-animations'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/number-animations'
  id: '__root__' | '/' | '/number-animations'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NumberAnimationsLazyRoute: typeof NumberAnimationsLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NumberAnimationsLazyRoute: NumberAnimationsLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/number-animations"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/number-animations": {
      "filePath": "number-animations.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
