/*
 * FTEmulator - FTEmulator is a high-performance stock market investment simulator designed with extreme technical efficiency
 * 
 * Copyright (C) 2025-2025 Álex Frías (alexwebdev05)
 * Licensed under GNU Affero General Public License v3.0
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * For commercial licensing inquiries, please contact: alexwebdev05@proton.me
 * GitHub: https://github.com/alexwebdev05
 */

import { Poppins } from 'next/font/google';
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FTEmulator",
  description: "Fast trade emulator.",
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default function RootLayout({ children }: { children: React.ReactNode}) {
    return (
        <html lang='es' className={poppins.className}>
            <body>{children}</body>
        </html>
    );
}