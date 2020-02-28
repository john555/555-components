#### View console for logs

```js
let items = [{ id: 1 }, { id: 2 }];

<div style={{ maxHeight: 100, overflow: 'auto' }}>
  <InfiniteScrollList
    callback={() => console.log('Fetch data here...')}
    items={items}
    Child={props => (
      <div style={{ height: 90 * props.id }}>
        {Array(props.id)
          .fill('Scroll!')
          .join(' ')}{' '}
        👇👇👇
      </div>
    )}
  />
</div>;
```
