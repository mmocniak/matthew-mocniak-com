/**
 * Design System - Text Scale
 *
 * A 5-level text hierarchy system ranging from weakest to strongest
 * Each level has light and dark mode variants
 */

export const textScale = {
    // Weakest - Most subtle, used for meta information, timestamps, etc.
    weakest: {
        light: "#94a3b8", // slate-400
        dark: "#64748b", // slate-500
    },

    // Weaker - Secondary text, descriptions, body content
    // (Previously "secondary")
    weaker: {
        light: "#475569", // slate-600
        dark: "#94a3b8", // slate-400
    },

    // Default - Primary text, main content
    // (Previously "primary")
    default: {
        light: "#1e293b", // slate-800
        dark: "#e2e8f0", // slate-200
    },

    // Stronger - Emphasized text, important highlights
    stronger: {
        light: "#0f172a", // slate-900
        dark: "#f1f5f9", // slate-100
    },

    // Strongest - Maximum emphasis, critical information
    strongest: {
        light: "#020617", // slate-950
        dark: "#f8fafc", // slate-50
    },
};

/**
 * Typography Scale
 * Semantic font sizes with responsive breakpoints
 */
export const typography = {
    // Display - Largest heading, hero text
    display: "text-4xl sm:text-5xl md:text-6xl",

    // Heading 1 - Main page title
    h1: "text-4xl sm:text-5xl font-semibold",

    // Heading 2 - Section titles
    h2: "text-2xl sm:text-3xl font-semibold",

    // Heading 3 - Subsection titles
    h3: "text-xl sm:text-2xl font-semibold",

    // Heading 4 - Card titles, list headers
    h4: "text-lg sm:text-xl font-semibold",

    // Body Large - Emphasized body text
    bodyLarge: "text-lg sm:text-xl",

    // Body - Default body text
    body: "text-base sm:text-lg",

    // Body Small - Supporting text
    bodySmall: "text-sm sm:text-base",

    // Caption - Meta information, timestamps
    caption: "text-xs sm:text-sm",

    // Label - Form labels, UI labels
    label: "text-sm font-medium uppercase tracking-wider",
};

/**
 * Spacing Scale
 * Consistent spacing values for layout
 */
export const spacing = {
    xs: "space-y-1",
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-6",
    xl: "space-y-8",
    xxl: "space-y-12",
};

/**
 * Component Patterns
 * Reusable component class combinations
 */
export const components = {
    // Container patterns
    container: {
        main: "mx-auto mt-8 mb-48 max-w-full md:max-w-2xl p-4 sm:p-8",
        section: "mt-16 space-y-6",
        card: "p-6 rounded-lg border border-slate-700 border-opacity-10",
    },

    // Button patterns
    button: {
        base: "flex items-center justify-center px-5 py-3 rounded-lg transition duration-100",
        primary:
            "bg-white dark:bg-zinc-800 border border-slate-700 border-opacity-20 text-blue-600 dark:text-blue-400",
        hover: "hover:bg-slate-100 dark:hover:bg-zinc-700 hover:text-blue-500 dark:hover:text-blue-300",
        active: "active:bg-slate-200 dark:active:bg-zinc-950 active:text-blue-800 dark:active:text-blue-100",
        disabled:
            "disabled:bg-slate-200 dark:disabled:bg-zinc-600 disabled:text-slate-400 dark:disabled:text-zinc-900",
    },

    // Link patterns
    link: {
        base: "hover:underline transition-colors",
        primary:
            "text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300",
        visited: "visited:text-purple-500 dark:visited:text-purple-400",
    },

    // Image patterns
    image: {
        project:
            "border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-left-top hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer",
        avatar: "w-32 md:w-40 h-32 md:h-40 object-bottom rounded-full",
    },
};

/**
 * Interactive States
 * Consistent interaction patterns
 */
export const states = {
    hover: {
        lift: "transform hover:-translate-y-0.5 transition",
        shadow: "hover:shadow-md transition-shadow",
        opacity: "hover:opacity-80 transition-opacity",
    },
    focus: {
        ring: "focus:outline-none focus:ring-4 focus:ring-offset-2",
        outline: "focus:outline-2 focus:outline-blue-500",
    },
    active: {
        scale: "active:scale-95 transition-transform",
        shadow: "active:shadow-inner",
    },
};
