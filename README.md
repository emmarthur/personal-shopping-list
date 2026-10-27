# Personal shopping list

Browse grocery lists, view line items, and add new items—state handled with nested React Context and `useReducer`.

## Run the web app

```powershell
Set-Location "c:\Users\emmak\Desktop\Content\CodingProjects\PortProjects\demos\personal-shopping-list\web"
npm install
npm run dev
```

Open http://localhost:3018

If `npm install` was interrupted on Windows, delete `web/node_modules` and run `npm install` again before `npm run dev` or `npm run build`.

**`Failed to load SWC binary` / `not a valid Win32 application`:** the `@next/swc-win32-x64-msvc` native file is corrupt. Stop the dev server, then from `web/`:

```powershell
cmd /c "rmdir /s /q node_modules"
npm install
```

If it persists: `npm install next@14.2.35 --force`

## Book provenance

Chapter 5 of Roy Derks *React Projects* (2nd ed.): [`BOOK_DIRECTIONS.md`](./BOOK_DIRECTIONS.md).

Reference implementation: [Packt Chapter05](https://github.com/PacktPublishing/React-Projects-Second-Edition/tree/main/Chapter05).
