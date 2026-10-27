# Book directions — Personal shopping list

**Catalog #405** · Roy Derks, *React Projects* (2nd ed., 2022), **Chapter 5** — Building a Personal Shopping List Application Using Context and Hooks

- Local PDF: `E:\Books\Other\React Projects Build advanced cross-platform projects with React and React Native to become a professional developer, 2nd Ed (Roy Derks) (z-lib.org).pdf` (printed ~pp. 138–173)
- Finished chapter (upstream): [PacktPublishing/React-Projects-Second-Edition/Chapter05](https://github.com/PacktPublishing/React-Projects-Second-Edition/tree/main/Chapter05)
- Initial scaffold (book): `Chapter05-initial`
- Web app: [`web/`](./web/) — Next.js 14, TypeScript, styled-components, port **3018**

## What the book asks you to build

A multi-route shopping list app: browse lists, open a list’s items, add items via a form. State is shared with **nested Context providers** (`ListsContext`, `ItemsContext`), **`useReducer`** for list/item actions, and fetch helpers on each provider. Data in the book uses [My JSON Server](https://my-json-server.typicode.com/) against the Packt repo `lists` and `items` resources.

## Web version notes

- Same provider nesting and reducer action names as **Chapter05** (`GET_LISTS_SUCCESS`, `ADD_ITEM_SUCCESS`, etc.).
- **Local Next.js API routes** (`/api/lists`, `/api/lists/:id`, `/api/lists/:id/items`, `POST /api/items`) replace My JSON Server so the demo runs offline with seed data from the book’s `db.json`.
- Routing uses the **App Router** (`/`, `/list/[listId]`, `/list/[listId]/new`) instead of `react-router-dom`; chapter code splitting maps to route-based bundles.

## Section order (from PDF / Chapter05)

1. Project overview — lists + items data model.
2. **Creating Context** — `ListsContext` with Provider and fetch.
3. **Consuming Context** — `Lists` page; remove inline fetch from children.
4. **ItemsContext** — fetch items per list; `ListDetail` consumes both contexts.
5. **Nested providers** — `AppContext` wraps `ListsContextProvider` → `ItemsContextProvider`.
6. **useReducer** — replace piecemeal `useState` updates for lists and items.
7. **Mutations** — `fetchList(listId)`, `addItem` POST, `ListForm` submit.
8. **Code splitting** — book uses `React.lazy` for pages; Next splits by route.
