```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    console.log('Component rendered');
    const cleanup = () => {
      console.log('Component unmounted');
      setIsMounted(false);
    };
    return () => {
      if (isMounted) {
        cleanup();
      }
    };
  }, [count, isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```