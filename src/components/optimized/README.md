# Optimized Material Design Components

This collection of React components implements Material Design 3 principles with performance optimizations and Tailwind CSS styling.

## Performance Optimizations

### 1. React.memo()
- All components are wrapped with `React.memo()` to prevent unnecessary re-renders
- Components only re-render when their props actually change
- Particularly effective for components in lists or frequently updating parent components

### 2. useMemo() and useCallback()
- **useMemo()**: Used for expensive calculations like class name concatenations and object creation
- **useCallback()**: Used for event handlers to prevent function recreation on every render
- Prevents child components from re-rendering due to new function references

### 3. Lazy Loading
- Components are split using `React.lazy()` for code splitting
- Reduces initial bundle size by loading components only when needed
- Includes optimized loading states with skeleton components

### 4. Bundle Optimization
- Tree-shakable imports from Lucide React icons
- Minimal dependencies and efficient component structure
- Optimized CSS classes to reduce bundle size

## Component Features

### Button Component
```tsx
// Optimized with memo and performance features
<Button 
  variant="filled" 
  color="primary" 
  icon={Search} 
  loading={isLoading}
  onClick={handleClick}
>
  Search
</Button>
```

**Optimizations:**
- Memoized with `React.memo()`
- Prevents re-renders when props don't change
- Optimized class name concatenation with `useMemo()`

### Input Component
```tsx
// Floating label input with performance optimizations
<Input
  label="Email"
  type="email"
  variant="outlined"
  startIcon={Mail}
  onChange={handleChange}
  error={hasError}
  errorMessage="Invalid email"
/>
```

**Optimizations:**
- `useCallback()` for event handlers
- Controlled vs uncontrolled state optimization
- Memoized class calculations

### Card Component
```tsx
// Flexible card with hover effects
<Card 
  variant="elevated" 
  hoverable 
  onClick={handleClick}
  loading={isLoading}
>
  <CardContent />
</Card>
```

**Optimizations:**
- Memoized class name calculations
- Optimized hover state handling
- Built-in loading state with skeleton

### Modal Component
```tsx
// Portal-rendered modal with accessibility
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  size="medium"
>
  <ModalContent />
</Modal>
```

**Optimizations:**
- Portal rendering for performance
- Memoized event handlers
- Efficient escape key handling
- Body scroll lock optimization

## Material Design 3 Implementation

### Color System
- Primary, Secondary, Tertiary color variants
- Error, Warning, Success states
- Surface and background colors
- Dark mode support with proper contrast ratios

### Typography
- Material Design 3 type scale
- Proper line heights and letter spacing
- Responsive text sizing
- Accessibility-compliant contrast ratios

### Elevation and Shadows
- Material Design shadow system
- Hover state elevation changes
- Proper z-index layering
- Smooth shadow transitions

### Interactive States
- Hover, focus, and active states
- Ripple-like effects with transforms
- Proper keyboard navigation
- WCAG 2.1 AA compliance

## Usage Examples

### Basic Implementation
```tsx
import { Button, Card, Input } from './components/optimized';

function MyComponent() {
  const [value, setValue] = useState('');
  
  const handleSubmit = useCallback(() => {
    // Handle form submission
  }, []);

  return (
    <Card variant="elevated">
      <Input
        label="Name"
        value={value}
        onChange={setValue}
      />
      <Button 
        variant="filled" 
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Card>
  );
}
```

### Lazy Loading Implementation
```tsx
import { LazyWrapper, LazyCardWithSpinner } from './components/optimized/LazyComponents';

function App() {
  return (
    <LazyWrapper>
      <LazyCardWithSpinner variant="elevated">
        <p>This card is lazy-loaded!</p>
      </LazyCardWithSpinner>
    </LazyWrapper>
  );
}
```

### Error Boundary Usage
```tsx
import ErrorBoundary from './components/optimized/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary onError={(error, errorInfo) => {
      // Log error to monitoring service
      console.error('Component error:', error, errorInfo);
    }}>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

## Performance Best Practices

1. **Use React.memo() wisely**: Only wrap components that receive stable props or are expensive to render
2. **Optimize callbacks**: Use `useCallback()` for event handlers passed to child components
3. **Memoize expensive calculations**: Use `useMemo()` for complex class name concatenations or object creation
4. **Implement lazy loading**: Split large components and load them on demand
5. **Use proper loading states**: Provide skeleton components for better perceived performance
6. **Handle errors gracefully**: Implement error boundaries to prevent entire app crashes

## Accessibility Features

- WCAG 2.1 AA compliant color contrast ratios
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management for modals and interactive elements
- Semantic HTML structure

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)
- Responsive design for all screen sizes
- Touch-friendly interactive elements