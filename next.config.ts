// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Opcional: Añade una barra al final de las rutas, útil para servidores como Nginx
  trailingSlash: true,
};

module.exports = nextConfig;
