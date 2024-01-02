# Next App Router Revalidation Issue

Minimal reproduction, showing Next.js not respecting `revalidate` and `dynamic` settings.

### Getting Started

```shell
npm install
npm run dev
```

### Reproduction Steps

1. Open http://localhost:3000/
2. Click the first "Test" link
3. Make a note of the date value on /test (e.g. 1704206776517)
4. Click "Back"
5. Click the first "Test" link again
6. Note the date value on the /test page is the same, and has not changed (e.g. 1704206776517)
