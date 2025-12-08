'use client'
import './globals.css'
import localFont from "next/font/local";
import { SettingsProvider } from '../context/SettingsContext'
import '../lib/i18n'

const mohammadFont = localFont({
    src: "./fonts/mohammad-bold-art-1.ttf",
    variable: "--font-mohammad",
    weight: "400",
});


export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning>
            <head>
                <link rel="icon" href="/logo-1.png" />
            </head>
            {/* <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-cairo"> */}
            <body className={`${mohammadFont.variable} font-mohammad bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
                <SettingsProvider>

                    {children}
                </SettingsProvider>
            </body>
        </html>
    )
}
