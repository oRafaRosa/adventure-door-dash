import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        game: {
          sky: "hsl(var(--game-sky))",
          meadow: "hsl(var(--game-meadow))",
          sun: "hsl(var(--game-sun))",
          path: "hsl(var(--game-path))",
          ink: "hsl(var(--game-ink))",
          cream: "hsl(var(--game-cream))",
          heart: "hsl(var(--game-heart))",
          sparkle: "hsl(var(--game-sparkle))",
        },
        door: {
          red: "hsl(var(--door-red))",
          blue: "hsl(var(--door-blue))",
          green: "hsl(var(--door-green))",
          trim: "hsl(var(--door-trim))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["Press Start 2P", "ui-monospace", "monospace"],
        body: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        pixel: "0 6px 0 hsl(var(--game-ink) / 0.18), 0 18px 36px hsl(var(--game-ink) / 0.14)",
        glow: "0 0 32px hsl(var(--game-sparkle) / 0.7), 0 0 70px hsl(var(--game-heart) / 0.28)",
        soft: "0 14px 35px hsl(var(--game-ink) / 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -8px, 0)" },
        },
        bob: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -6px, 0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg) translateY(0)" },
          "50%": { transform: "rotate(1deg) translateY(-5px)" },
        },
        sparkle: {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.7)" },
          "45%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-34px) scale(1.15)" },
        },
        pop: {
          "0%": { transform: "scale(0.92)", opacity: "0" },
          "70%": { transform: "scale(1.04)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-5px)" },
          "40%": { transform: "translateX(5px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 7s ease-in-out infinite",
        bob: "bob 1.8s ease-in-out infinite",
        wiggle: "wiggle 2.8s ease-in-out infinite",
        sparkle: "sparkle 1.6s ease-out infinite",
        pop: "pop 0.5s cubic-bezier(.2, .9, .25, 1.25) both",
        shake: "shake 0.45s ease-in-out both",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
