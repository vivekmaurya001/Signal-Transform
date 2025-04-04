# Signal Visualization with Vite + React and Stdlib

This project is a signal visualization tool built with Vite, React, and Chart.js. It demonstrates how to generate various signal types (sine, cosine, square, tangent, constant) using [stdlib](https://github.com/stdlib-js/stdlib) functions, compute their discrete Fourier transform (DFT) with complex arithmetic, and visualize both the time-domain signal and its frequency-domain amplitude spectrum using Chart.js.

The UI includes:
- A time-domain chart with a glowing dark theme.
- A frequency-domain (amplitude spectrum) chart.
- A parameters panel for adjusting signal type, frequency, amplitude, and phase.
- Smooth interactive sliders and dropdowns with responsive tooltips.

## Features

- **Multiple Signal Types:** Generate sine, cosine, square, tangent (with clamping), and constant signals.
- **Discrete Fourier Transform:** Uses a naive DFT implementation with stdlib complex arithmetic.
- **Responsive Charts:** Visualize signals with Chart.js with enhanced tooltips.
- **Dark Theme:** A custom dark theme with glowing effects and animated gradient headings.
- **Interactivity:** Adjust parameters via sliders and dropdowns for live updates.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/signal-visualization.git
   cd signal-visualization
   npm install

1. **Run the project:**

   ```bash
   npm run dev