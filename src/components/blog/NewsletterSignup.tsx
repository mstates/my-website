'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
}

export function NewsletterSignup({
  title = 'Subscribe to our newsletter',
  description = 'Get the latest posts delivered right to your inbox',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // This would be replaced with your actual newsletter service API call
      // For example, with ConvertKit, Mailchimp, etc.
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // if (!response.ok) throw new Error('Subscription failed');
      
      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <div className={`rounded-lg border bg-card p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            required
            className="flex-grow px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button 
            type="submit" 
            disabled={status === 'loading'}
            className="whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        
        {status === 'success' && (
          <p className="text-sm text-green-600 dark:text-green-400">{message}</p>
        )}
        
        {status === 'error' && (
          <p className="text-sm text-red-600 dark:text-red-400">{message}</p>
        )}
        
        <p className="text-xs text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}

