```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered');
    // Perform some side effect here
    return () => {
      console.log('Component unmounted');
      // Cleanup any resources
    };
  }, [count]); // Only re-run effect if 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```