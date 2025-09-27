// Allow importing CSS from TypeScript files for side-effect only imports
// This prevents TypeScript errors when importing global Tailwind CSS files.
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

