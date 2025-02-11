# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.

## The Bug
The `bug.js` file contains a component that attempts to increment a state variable (`count`) within the `useEffect` hook.  The dependency array `[count]` causes the effect to run every time `count` changes, leading to an infinite loop because the effect itself changes `count`.

## The Solution
The `bugSolution.js` file corrects this by removing `count` from the dependency array.  This ensures the effect runs only once after the component mounts.