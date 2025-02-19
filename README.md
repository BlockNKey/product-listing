# ProductStore made with 💖

## ✨ Key Features

### 🎯 Core Features

- Responsive design for all devices (mobile, tablet, desktop)
- Dark mode with system preference detection
- Advanced product filtering and search
- Real-time price range filtering
- Stock availability tracking

### 🔍 SEO & Schema Markup

- Rich product schema markup for enhanced search results
- OpenGraph meta tags for better social sharing
- Structured data for:
  - Product listings (price, availability, ratings)
  - Breadcrumb navigation
  - Organization information
- Semantic HTML structure

### ♿ Accessibility (WCAG 2.1 Compliant)

- ARIA labels and landmarks
- Keyboard navigation support
- Focus management
- Screen reader friendly:
  - Descriptive alt texts
  - Semantic headings
  - Skip to main content
- Color contrast compliance
- Reduced motion support
- Error announcements for screen readers

### 🚨 Error Handling

- User-friendly error messages with react-toastify
- Comprehensive error states:
  - Network errors with automatic retry
  - API errors with specific messages
  - Validation errors with clear feedback
  - Loading states with skeleton screens
- Offline support
- Error boundary for component failures
- Accessibility-friendly error notifications

### 🎨 UI/UX Features

- Smooth animations and transitions
- Loading skeletons
- Toast notifications
- Responsive images
- Infinite scroll with error recovery

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Hooks
- **Error Handling**: react-toastify
- **Accessibility**: ARIA
- **Containerization**: Docker

## 🚀 Quick Start

### Development

1. Clone and install:

```bash
git clone https://github.com/BlockNKey/product-listing.git
cd product-listing
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### Docker

```bash
docker-compose up -d

docker-compose down
```

## 🤔 Technical Decisions

### Architecture Choices

1. **Next.js App Router**

   - Why: Better performance, built-in SSR, and improved SEO
   - Impact: Faster page loads and better search engine visibility

2. **TypeScript**

   - Why: Type safety and better developer experience
   - Impact: Reduced runtime errors and improved maintainability

3. **TailwindCSS**

   - Why: Rapid development and consistent styling
   - Impact: Reduced CSS bundle size and better responsive design

4. **React-Toastify**
   - Why: User-friendly error notifications
   - Impact: Better error handling and user experience

### Performance Optimizations

1. **Image Optimization**

   - Next.js Image component for automatic optimization
   - Lazy loading for better initial page load

2. **Error Handling**
   - Comprehensive error states
   - User-friendly error messages

## 🎯 Assumptions Made

1. **Data Structure**

   - Products have consistent structure (id, name, price, etc.)
   - All product images are accessible via URLs

2. **User Environment**

   - Modern browser support (last 2 versions)
   - Minimum screen width of 320px
   - Basic internet connectivity

3. **Performance**
   - Maximum of 1000 products in the list
   - Image sizes under 5MB

## 🎯 Implementation Details

### Error Handling Strategy

```typescript
// Example of comprehensive error handling
try {
  const response = await fetch('/api/products');
  if (!response.ok) throw response;
  // Handle success
} catch (error) {
  handleApiError(error, 'Failed to load products');
}
```

### Accessibility Implementation

```typescript
// Example of accessible component
<button
  onClick={handleAction}
  aria-label="Add to cart"
  role="button"
  aria-busy={loading}
  disabled={disabled}
>
  {loading ? 'Adding...' : 'Add to Cart'}
</button>
```

### Schema Markup Example

```typescript
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Product Name",
    "price": "19.99",
    "availability": "https://schema.org/InStock"
  }
</script>
```
