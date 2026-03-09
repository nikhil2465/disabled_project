# 🚀 Getting Started Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ (https://nodejs.org/)
- **Docker** & **Docker Compose** (https://www.docker.com/)
- **Git** (https://git-scm.com/)
- **PostgreSQL** 14+ (if running locally)
- **Redis** 6+ (if running locally)

## 📁 Project Structure

```
accessibility-platform/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Accessible React components
│   │   ├── contexts/       # React contexts (screen reader, keyboard, focus)
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── styles/         # Theme and global styles
│   │   └── utils/          # Accessibility utilities
│   ├── public/
│   └── package.json
├── backend/                  # Microservices backend
│   ├── api-gateway/         # API Gateway service
│   ├── user-service/        # User management service
│   ├── content-service/     # Content management service
│   ├── media-service/       # Media processing service
│   ├── notification-service/ # Notification service
│   └── package.json
├── shared/                   # Shared utilities and types
├── docs/                     # Documentation
├── docker-compose.yml        # Development environment
└── README.md
```

## 🛠️ Installation

### Option 1: Docker (Recommended)

1. **Clone the repository**
```bash
git clone <repository-url>
cd accessibility-platform
```

2. **Start all services**
```bash
docker-compose up -d
```

3. **Access the application**
- Frontend: http://localhost:80
- API Gateway: http://localhost:3000
- MinIO Console: http://localhost:9001
- Grafana: http://localhost:3001 (admin/admin)
- Prometheus: http://localhost:9090

### Option 2: Local Development

1. **Clone the repository**
```bash
git clone <repository-url>
cd accessibility-platform
```

2. **Install dependencies**
```bash
# Install all dependencies
npm run install:all

# Or install individually
cd frontend && npm install
cd ../backend && npm run install:all
```

3. **Set up environment variables**

#### Frontend (.env)
```bash
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_MINIO_URL=http://localhost:9000
```

#### Backend Services (.env files)
```bash
# Common environment variables
NODE_ENV=development
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=accessibility_platform
POSTGRES_USER=accessibility_user
POSTGRES_PASSWORD=accessibility_password
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-super-secret-jwt-key-here

# API Gateway (.env)
PORT=3000

# User Service (.env)
PORT=3001

# Content Service (.env)
PORT=3002
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=accessibility_user
MINIO_SECRET_KEY=accessibility_password

# Media Service (.env)
PORT=3003
OPENAI_API_KEY=your-openai-api-key-here
GOOGLE_VISION_API_KEY=your-google-vision-api-key-here

# Notification Service (.env)
PORT=3004
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
```

4. **Start databases**
```bash
# Start PostgreSQL and Redis
docker-compose up -d postgres redis elasticsearch

# Or install locally
# PostgreSQL: https://www.postgresql.org/download/
# Redis: https://redis.io/download
# Elasticsearch: https://www.elastic.co/downloads/elasticsearch
```

5. **Run database migrations**
```bash
cd backend
npm run migrate
```

6. **Start services**
```bash
# Start all backend services
npm run dev

# Or start individual services
npm run dev:api-gateway
npm run dev:user-service
npm run dev:content-service
npm run dev:media-service
npm run dev:notification-service
```

7. **Start frontend**
```bash
cd frontend
npm start
```

## 🔧 Development Workflow

### 1. Code Structure

#### Frontend Components
```typescript
// Example accessible component
import React from 'react';
import { useScreenReader } from '../contexts/ScreenReaderContext';
import { announceToScreenReader } from '../utils/accessibility';

const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
}> = ({ children, onClick, ariaLabel }) => {
  const { announce } = useScreenReader();

  const handleClick = () => {
    onClick();
    announce('Button clicked');
  };

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      className="accessible-button"
    >
      {children}
    </button>
  );
};
```

#### Backend Service
```typescript
// Example service with accessibility features
import express from 'express';
import { announceToScreenReader } from '../utils/accessibility';

const app = express();

// Accessible endpoint with proper headers
app.get('/api/users', (req, res) => {
  const users = await getUsers();
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
  res.setHeader('X-Total-Count', users.length);
  
  res.json(users);
});
```

### 2. Accessibility Testing

#### Automated Testing
```bash
# Run accessibility tests
npm run test:a11y

# Test color contrast
npm run test:contrast

# Test keyboard navigation
npm run test:keyboard
```

#### Manual Testing Checklist
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AAA
- [ ] Text scaling to 200%
- [ ] Focus management
- [ ] ARIA labels and roles
- [ ] Skip links work
- [ ] Forms are accessible
- [ ] Images have alt text
- [ ] Videos have captions

### 3. Git Workflow

```bash
# Create feature branch
git checkout -b feature/accessibility-improvement

# Make changes and test
npm run test:a11y
npm run lint:fix

# Commit changes
git add .
git commit -m "feat: improve screen reader support"

# Push and create PR
git push origin feature/accessibility-improvement
```

## 🧪 Testing

### Unit Tests
```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- AccessibilityButton.test.tsx
```

### Integration Tests
```bash
# Run integration tests
npm run test:integration

# Test API endpoints
npm run test:api

# Test accessibility
npm run test:a11y
```

### End-to-End Tests
```bash
# Run E2E tests
npm run test:e2e

# Test with screen readers
npm run test:screen-reader

# Test keyboard navigation
npm run test:keyboard
```

## 🐛 Debugging

### Common Issues

#### 1. Screen Reader Not Working
```bash
# Check ARIA attributes
npm run lint:a11y

# Test with different screen readers
npm run test:screen-reader

# Check semantic HTML
npm run test:semantic
```

#### 2. Keyboard Navigation Issues
```bash
# Check focus management
npm run test:focus

# Test tab order
npm run test:tab-order

# Check keyboard shortcuts
npm run test:shortcuts
```

#### 3. Color Contrast Issues
```bash
# Test color contrast
npm run test:contrast

# Check with color blindness simulators
npm run test:color-blindness

# Test high contrast mode
npm run test:high-contrast
```

### Debug Tools

#### Browser Extensions
- **axe DevTools**: Accessibility testing
- **WAVE**: Web accessibility evaluation
- **Color Contrast Analyzer**: Color contrast testing
- **Screen Reader Simulator**: Screen reader testing

#### Command Line Tools
```bash
# Accessibility audit
npx axe http://localhost:3000

# Lighthouse accessibility audit
npx lighthouse http://localhost:3000 --chrome-flags="--headless" --output=json --output-path=./lighthouse-report.json

# Pa11y accessibility testing
npx pa11y http://localhost:3000
```

## 📚 Resources

### Documentation
- [Accessibility Guidelines](./ACCESSIBILITY_GUIDELINES.md)
- [Component Library](./docs/COMPONENT_LIBRARY.md)
- [API Documentation](./docs/API_DOCUMENTATION.md)
- [Testing Guide](./docs/TESTING_GUIDE.md)

### External Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [Screen Reader Simulators](https://www.paciellogroup.com/resources/simulators/)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test accessibility**
5. **Submit a pull request**

### Accessibility Requirements
- All new features must be WCAG AAA compliant
- Include screen reader testing
- Test keyboard navigation
- Verify color contrast
- Add appropriate ARIA attributes

## 📞 Support

### Getting Help
- **Documentation**: Check the [docs](./docs/) folder
- **Issues**: Create an issue on GitHub
- **Discussions**: Join our GitHub Discussions
- **Email**: accessibility@example.com

### Community
- **Slack**: Join our accessibility community
- **Forums**: Participate in our forums
- **Meetups**: Attend our accessibility meetups
- **Conferences**: Present at accessibility conferences

---

*Happy coding! Remember, accessibility is not a feature, it's a fundamental right.*
