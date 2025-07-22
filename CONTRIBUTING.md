# Contributing to GEOLOX Website

Thank you for your interest in contributing to the GEOLOX website! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher
- Git
- Basic knowledge of React and Next.js

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/geolox-website.git
   cd geolox-website
   ```

3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/geolox-website.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 📝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title** and description
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear title** and detailed description
- **Use case** and motivation
- **Possible implementation** approach
- **Mockups or examples** if applicable

### Pull Requests

1. **Create a feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Commit your changes** with descriptive messages
5. **Push to your fork** and create a pull request

#### Pull Request Guidelines

- **Target the `develop` branch** for new features
- **Target the `main` branch** only for hotfixes
- **Include tests** for new functionality
- **Update documentation** as needed
- **Follow the PR template** provided
- **Keep PRs focused** - one feature per PR

## 🎨 Design Guidelines

### Brand Colors

```css
:root {
  --primary-blue: #1a237e;
  --accent-cyan: #00bcd4;
  --secondary-green: #4caf50;
  --dark-bg: #0a0a0a;
  --dark-surface: #1a1a1a;
}
```

### Typography

- **Primary Font**: Inter
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)
- **Responsive Scaling**: Use clamp() for fluid typography

### Component Design

- **Consistent Spacing**: Use Tailwind spacing scale
- **Rounded Corners**: 8px for buttons, 16px for cards
- **Hover States**: Smooth transitions (300ms)
- **Focus States**: Visible focus indicators

## 💻 Coding Standards

### JavaScript/React

- Use **functional components** with hooks
- Follow **React best practices**
- Use **meaningful variable names**
- Add **PropTypes** or TypeScript types
- Keep components **small and focused**

### CSS/Styling

- Use **Tailwind CSS** utility classes
- Create **custom CSS** only when necessary
- Follow **mobile-first** responsive design
- Use **CSS custom properties** for theming

### File Organization

```
components/
├── ui/              # Reusable UI components
├── sections/        # Page sections
├── forms/           # Form components
└── layout/          # Layout components

pages/               # Next.js pages
styles/              # Global styles
public/              # Static assets
docs/                # Documentation
```

### Naming Conventions

- **Components**: PascalCase (`ModernHeader.js`)
- **Files**: camelCase for utilities, PascalCase for components
- **CSS Classes**: Follow Tailwind conventions
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e
```

### Writing Tests

- **Test user interactions** not implementation details
- **Use descriptive test names**
- **Follow AAA pattern** (Arrange, Act, Assert)
- **Mock external dependencies**
- **Test accessibility** features

### Test Structure

```javascript
describe('Component Name', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interaction', () => {
    // Test implementation
  });
});
```

## 📚 Documentation

### Code Documentation

- **Comment complex logic**
- **Document component props**
- **Include usage examples**
- **Keep comments up to date**

### README Updates

When adding new features:

- Update the feature list
- Add new environment variables
- Update installation instructions
- Include new scripts or commands

## 🔄 Git Workflow

### Commit Messages

Follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

**Examples:**
```
feat(header): add dark mode toggle
fix(navigation): resolve mobile menu overlay issue
docs(readme): update installation instructions
```

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation
- `refactor/component-name` - Refactoring

## 🚀 Release Process

### Version Numbering

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Steps

1. **Update version** in `package.json`
2. **Update CHANGELOG.md**
3. **Create release PR** to `main`
4. **Tag the release** after merge
5. **Deploy to production**

## 🆘 Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Discord**: Real-time chat with the community
- **Email**: technical-support@geolox.com

### Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://reactjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

## 🏆 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **Annual contributor report**
- **Special badges** for long-term contributors

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to GEOLOX! Your efforts help make location intelligence more accessible and powerful for everyone. 🌍✨

