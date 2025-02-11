```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This runs only once after the component mounts
    // Any cleanup logic would go here
  }, []);

  return <div>Count: {count}</div>;
}
```