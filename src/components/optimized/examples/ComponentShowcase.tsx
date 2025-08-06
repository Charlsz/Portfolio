import React, { useState, useCallback, useMemo } from 'react';
import { Search, Mail, Lock, User, Heart, Star } from 'lucide-react';
import Button from '../Button';
import Card from '../Card';
import Input from '../Input';
import Modal from '../Modal';
import ErrorBoundary from '../ErrorBoundary';
import Skeleton from '../Skeleton';
import { LazyWrapper } from '../LazyComponents';

// Example component showcasing all optimized components
const ComponentShowcase: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  // Memoized handlers to prevent unnecessary re-renders
  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);
  const handleInputChange = useCallback((value: string) => setInputValue(value), []);
  
  const handleLoadingToggle = useCallback(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Memoized card data to prevent recreation
  const cardData = useMemo(() => [
    { id: 1, title: 'Elevated Card', variant: 'elevated' as const },
    { id: 2, title: 'Filled Card', variant: 'filled' as const },
    { id: 3, title: 'Outlined Card', variant: 'outlined' as const },
  ], []);

  return (
    <ErrorBoundary>
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Optimized Material Components
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Performance-optimized React components following Material Design 3 principles
          </p>
        </div>

        {/* Button Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Buttons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Variants
              </h3>
              <div className="space-y-3">
                <Button variant="filled" color="primary" fullWidth>
                  Filled Button
                </Button>
                <Button variant="outlined" color="secondary" fullWidth>
                  Outlined Button
                </Button>
                <Button variant="text" color="tertiary" fullWidth>
                  Text Button
                </Button>
                <Button variant="elevated" color="primary" fullWidth>
                  Elevated Button
                </Button>
                <Button variant="tonal" color="primary" fullWidth>
                  Tonal Button
                </Button>
              </div>
            </Card>

            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                With Icons
              </h3>
              <div className="space-y-3">
                <Button variant="filled" icon={Heart} iconPosition="left" fullWidth>
                  Like
                </Button>
                <Button variant="outlined" icon={Star} iconPosition="right" fullWidth>
                  Favorite
                </Button>
                <Button variant="text" icon={Search} fullWidth>
                  Search
                </Button>
              </div>
            </Card>

            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                States
              </h3>
              <div className="space-y-3">
                <Button variant="filled" loading fullWidth>
                  Loading
                </Button>
                <Button variant="outlined" disabled fullWidth>
                  Disabled
                </Button>
                <Button variant="filled" color="error" fullWidth>
                  Error State
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Input Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Input Fields
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Outlined Inputs
              </h3>
              <div className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  variant="outlined"
                  startIcon={Mail}
                  placeholder="Enter your email"
                  fullWidth
                />
                <Input
                  label="Password"
                  type="password"
                  variant="outlined"
                  startIcon={Lock}
                  placeholder="Enter your password"
                  fullWidth
                />
                <Input
                  label="Search"
                  variant="outlined"
                  startIcon={Search}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Search..."
                  fullWidth
                />
              </div>
            </Card>

            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Filled Inputs
              </h3>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  variant="filled"
                  startIcon={User}
                  placeholder="Enter your name"
                  fullWidth
                />
                <Input
                  label="Email with Error"
                  type="email"
                  variant="filled"
                  startIcon={Mail}
                  error
                  errorMessage="Please enter a valid email address"
                  fullWidth
                />
                <Input
                  label="Disabled Input"
                  variant="filled"
                  disabled
                  defaultValue="Disabled value"
                  fullWidth
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Card Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map((card) => (
              <Card
                key={card.id}
                variant={card.variant}
                padding="medium"
                hoverable
                onClick={() => console.log(`Clicked ${card.title}`)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  This is a {card.variant} card variant with hover effects and click handling.
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Loading States */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Loading States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Skeleton Loading
              </h3>
              <div className="space-y-3">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="rectangular" height="120px" />
                <div className="flex items-center space-x-3">
                  <Skeleton variant="circular" width="40px" height="40px" />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="70%" />
                    <Skeleton variant="text" width="40%" />
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="elevated" padding="medium">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Dynamic Loading
              </h3>
              <div className="space-y-4">
                <Button
                  variant="filled"
                  onClick={handleLoadingToggle}
                  fullWidth
                >
                  Toggle Loading State
                </Button>
                {loading ? (
                  <Card loading />
                ) : (
                  <Card variant="filled" padding="medium">
                    <p className="text-gray-600 dark:text-gray-400">
                      Content loaded successfully! Click the button above to see the loading state.
                    </p>
                  </Card>
                )}
              </div>
            </Card>
          </div>
        </section>

        {/* Modal Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Modal
          </h2>
          <Card variant="elevated" padding="medium">
            <div className="text-center">
              <Button variant="filled" onClick={handleModalOpen}>
                Open Modal
              </Button>
            </div>
          </Card>

          <Modal
            isOpen={modalOpen}
            onClose={handleModalClose}
            title="Example Modal"
            size="medium"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                This is an example modal with Material Design styling. It includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Portal rendering for proper z-index handling</li>
                <li>Backdrop blur and overlay</li>
                <li>Keyboard navigation (ESC to close)</li>
                <li>Click outside to close</li>
                <li>Smooth animations</li>
                <li>Responsive sizing</li>
              </ul>
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="text" onClick={handleModalClose}>
                  Cancel
                </Button>
                <Button variant="filled" onClick={handleModalClose}>
                  Confirm
                </Button>
              </div>
            </div>
          </Modal>
        </section>

        {/* Lazy Loading Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Lazy Loading
          </h2>
          <Card variant="elevated" padding="medium">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Code Splitting with Suspense
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Components are lazy-loaded to improve initial bundle size and performance.
            </p>
            <LazyWrapper>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-800 dark:text-green-200">
                  ✅ This content was lazy-loaded successfully!
                </p>
              </div>
            </LazyWrapper>
          </Card>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ComponentShowcase;