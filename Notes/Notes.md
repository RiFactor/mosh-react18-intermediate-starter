## Fetching and Updating Data with React Query

### Understanding the Application Layers

![Alt text](image.png)

## Global State Management

### Sharing State using React Context

1. Lift state to closest parent
2. Create context to transport data (state, dispatch) & wrap component tree w/ provider for same data or st else
3. useContext hook to access

Folders:
hooks, reducers, context
When project become more complicated: separate into independent modules / functional areas e.g. counter, tasks

Keyboard:
Option, shift, Fn + F12 -> find all references
Option + Cmd + arrow: navigate tabs

Checks:
run app
and Cmd + Shift + P: build: npm build

### Splitting Context for Efficiency

![Alt text](image-4.png)

Unnecessary renders if contexts are combined:
![Alt text](image-5.png)

### When to use Context

Best to split context to avoid unnecessary re-renders
![Alt text](image-3.png)
real-world, tasks would be in BED

![Alt text](image-1.png)

If splitting up state doesn't make sense but deal with unnecessary renders, then use a library
![Alt text](image-2.png)

### Context vs. Redux

Context doesn't have a way to store and update data but does prevent 'prop drilling'

Does context replace redux
![Alt text](image-6.png)

Redux + Dev Tools
![Alt text](image-7.png)
"give a fool a hammer and they will treat everything like a nail"
Don't think about tools as solutions

over focus on tools and features -> distracted from solution required
![Alt text](image-8.png)

Understand problems ->

redux complex - not necessary
![Alt text](image-9.png)

React Query simpler
![Alt text](image-10.png)

Zustand for Client state -> mgmt tool last resort
![Alt text](image-11.png)

## Routing

```typescript
<a href="/users">Users</a> // on the network tab this will cause a full page reload, not good
<Link to="/users">Users</Link> // no repeated requests b/c content already shipped, so don't need to return to server
```

Params are strings so need to parse to an int when required

'setSearchParams' has a side effect, component shoudl be pure
call inside event handler or effect only

Error logging service e.g. Sentry
