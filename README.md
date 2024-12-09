# React 19 useEffect Cleanup Issue

This repository demonstrates a bug where the cleanup function in React 19's `useEffect` hook is not consistently called when the component unmounts.  This can result in memory leaks if not addressed.  The solution provided addresses this issue.

## Bug Description:

The `useEffect` hook's cleanup function is intended to perform cleanup tasks (like cancelling subscriptions, clearing timers, etc.) when the component is unmounted. However, in certain scenarios, this function might not be called, leading to resource leaks.

## Solution:

The provided solution ensures that the cleanup function is reliably invoked upon unmounting, preventing potential issues.