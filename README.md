# Kaihoko (Next.js Application with SCSS and i18n)

This is a template for a Next.js (14.2.13) application that utilizes SCSS for styling and i18n for translation support. It provides a starting point for building multi-language applications in English, Portuguese, and Spanish.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the development server with `npm run dev` or `yarn dev`.

Open [https://localhost:3000/pt](https://localhost:3000/pt) with your browser to see the result.

## Folder Structure

The folder structure of this template is as follows:

```
├── public
│   ├── images
│   └── ...
├── src
│   ├── components
│   ├── pages
│   ├── styles
│   ├── locales
│   └── ...
└── ...
```

- The `public` folder contains static assets such as images.
- The `src` folder contains the main source code of the application.
    - The `components` folder contains reusable React components.
    - The `pages` folder contains the Next.js pages.
    - The `styles` folder contains SCSS files for styling.
    - The `locales` folder contains translation files for different languages.

## Localization (i18n)

This template uses the i18n library to handle localization. The translation files for each language are stored in the `locales` folder. To add a new language, create a new JSON file in the `locales` folder with the translations for that language.

To use translations in your components or pages, import the `useTranslation` hook from the `next-translate` package and use it to access the translated strings.

```jsx
import { useTranslation } from 'next-translate';

const MyComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('common:hello')}</h1>
            <p>{t('common:description')}</p>
        </div>
    );
};
```

## Styling with SCSS

This template supports styling with SCSS. The SCSS files are located in the `styles` folder. To use SCSS styles in your components or pages, import the SCSS file and apply the styles to your elements.

```jsx
import styles from '../styles/MyComponent.module.scss';

const MyComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello, world!</h1>
            <p className={styles.description}>This is a styled component.</p>
        </div>
    );
};
```

## Conclusion

This template provides a solid foundation for building Next.js applications with SCSS and i18n support. Feel free to customize it according to your needs and start building amazing multi-language applications!
