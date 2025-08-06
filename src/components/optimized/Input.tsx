import React, { memo, useState, useCallback, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  'aria-label'?: string;
}

// Memoized Input component with performance optimizations
const Input = memo(forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  variant = 'outlined',
  size = 'medium',
  error = false,
  errorMessage,
  helperText,
  disabled = false,
  required = false,
  fullWidth = false,
  startIcon: StartIcon,
  endIcon: EndIcon,
  onChange,
  onBlur,
  onFocus,
  className = '',
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || '');

  // Memoized handlers to prevent function recreation
  const handleFocus = useCallback(() => {
    setFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur?.();
  }, [onBlur]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [onChange, value]);

  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = currentValue.length > 0;
  const showLabel = label && (variant === 'outlined' || hasValue || focused);

  // Base input classes following Material Design 3
  const inputClasses = `
    w-full bg-transparent border-0 outline-none
    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
    disabled:opacity-60 disabled:cursor-not-allowed
  `;

  // Container classes based on variant and state
  const containerClasses = {
    filled: `
      relative bg-gray-100 dark:bg-gray-800 rounded-t-lg
      border-b-2 transition-all duration-200
      ${error ? 'border-red-500' : focused ? 'border-blue-600' : 'border-gray-300 dark:border-gray-600'}
      ${disabled ? 'opacity-60' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}
    `,
    outlined: `
      relative bg-transparent rounded-lg
      border-2 transition-all duration-200
      ${error ? 'border-red-500' : focused ? 'border-blue-600' : 'border-gray-300 dark:border-gray-600'}
      ${disabled ? 'opacity-60' : 'hover:border-gray-400 dark:hover:border-gray-500'}
    `,
  };

  // Size-specific classes
  const sizeClasses = {
    small: {
      container: 'h-10',
      input: 'text-sm px-3 py-2',
      label: 'text-xs',
      icon: 'w-4 h-4',
    },
    medium: {
      container: 'h-12',
      input: 'text-base px-4 py-3',
      label: 'text-sm',
      icon: 'w-5 h-5',
    },
    large: {
      container: 'h-14',
      input: 'text-lg px-5 py-4',
      label: 'text-base',
      icon: 'w-6 h-6',
    },
  };

  // Label positioning for outlined variant
  const labelClasses = variant === 'outlined' && showLabel
    ? `
      absolute left-3 bg-white dark:bg-gray-900 px-1 transition-all duration-200
      ${focused || hasValue 
        ? `-top-2 ${sizeClasses[size].label} ${error ? 'text-red-500' : focused ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`
        : `top-1/2 -translate-y-1/2 ${sizeClasses[size].input.split(' ')[0]} text-gray-500 dark:text-gray-400`
      }
    `
    : variant === 'filled' && label
    ? `
      absolute left-4 transition-all duration-200 pointer-events-none
      ${focused || hasValue 
        ? `top-1 ${sizeClasses[size].label} ${error ? 'text-red-500' : focused ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`
        : `top-1/2 -translate-y-1/2 ${sizeClasses[size].input.split(' ')[0]} text-gray-500 dark:text-gray-400`
      }
    `
    : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      <div className={`${containerClasses[variant]} ${sizeClasses[size].container} flex items-center`}>
        {/* Start Icon */}
        {StartIcon && (
          <div className="flex items-center justify-center pl-3">
            <StartIcon className={`${sizeClasses[size].icon} text-gray-500 dark:text-gray-400`} />
          </div>
        )}

        {/* Input Field */}
        <div className="relative flex-1">
          {/* Floating Label */}
          {label && (
            <label className={labelClasses}>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}

          <input
            ref={ref}
            type={type}
            value={currentValue}
            placeholder={!showLabel ? placeholder : ''}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${inputClasses} ${sizeClasses[size].input} ${StartIcon ? 'pl-0' : ''} ${EndIcon ? 'pr-0' : ''}`}
            aria-label={ariaLabel || label}
            aria-invalid={error}
            aria-describedby={error && errorMessage ? `${label}-error` : helperText ? `${label}-helper` : undefined}
            {...props}
          />
        </div>

        {/* End Icon */}
        {EndIcon && (
          <div className="flex items-center justify-center pr-3">
            <EndIcon className={`${sizeClasses[size].icon} text-gray-500 dark:text-gray-400`} />
          </div>
        )}
      </div>

      {/* Helper/Error Text */}
      {(errorMessage || helperText) && (
        <div className="mt-1 px-4">
          <p
            id={error && errorMessage ? `${label}-error` : `${label}-helper`}
            className={`text-xs ${error ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}
          >
            {error ? errorMessage : helperText}
          </p>
        </div>
      )}
    </div>
  );
}));

Input.displayName = 'Input';

export default Input;