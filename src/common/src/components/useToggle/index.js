import { useState, useCallback } from 'react';

export default function UseToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue((value) => !value), []);
  return [value, toggler];
};
