import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
  style: ['normal', 'italic'], // Specify the styles you need
  display: 'swap', // Optional: Set font-display to swap for better performance
});