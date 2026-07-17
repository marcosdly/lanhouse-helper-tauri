export const StyleClass = {
  /**
   * Style class to match the window background
   */
  BACKGROUND: "background",
  /**
   * Style class for numbered badges
   */
  BADGE: "badge",
  /**
   * Style class for color chooser buttons to be applied to {@link Gtk.CheckButton} or {@link Gtk.RadioButton}
   */
  COLOR_BUTTON: "color-button",
  /**
   * Style class for slim headerbars, like in Terminal
   */
  DEFAULT_DECORATION: "default-decoration",
  /**
   * Style class for a {@link Gtk.Image} used to set a context-aware large icon size. By default this is 32px,
   * but in certain contexts it could be larger or smaller depending on the default assumed icon size.
   */
  LARGE_ICONS: "large-icons",
  /**
   * Style class for "on-screen display" widgets such as {@link Granite.Toast} and {@link Granite.OverlayBar}
   */
  OSD: "osd",
  /**
   * Style class defining a sidebar, such as the left side in a file chooser
   */
  SIDEBAR: "sidebar",
  /**
   * Style class for {@link Gtk.Label} or {@link Gtk.TextView} to emulate the appearance of Terminal. This includes
   * text color, background color, selection highlighting, and selecting the system monospace font.
   *
   * When used with {@link Gtk.Label} this style includes internal padding. When used with {@link Gtk.TextView}
   * interal padding will need to be set with {@link Gtk.Container.border_width}
   */
  TERMINAL: "terminal",
  /**
   * Style class for flattened widgets, such as buttons,
   */
  FLAT: "flat",
  /**
   * Style class for widgets which should use base color as their background
   */
  VIEW: "view",
} as const;

export const TransitionDuration = {
  /**
   * Transition duration when a widget closes, hides a portion of its content, or exits the screen
   */
  CLOSE: 200,
  /**
   * Transition duration when a widget transforms in-place, like when filtering content with a view switcher
   */
  IN_PLACE: 100,
  /**
   * Transition duration when a widget opens, reveals more content, or enters the screen
   */
  OPEN: 250,
} as const;

/**
 * CSS style classes to be used with {@link Gtk.Widget.add_css_class}
 */
export const CssClass = {
  /**
   * Style class to give accent color to a {@link Gtk.Label} or symbolic icon
   */
  ACCENT: "accent",
  /**
   * Style class for adding a small shadow to a container such as for image thumbnails
   */
  CARD: "card",
  /**
   * Style class for checkered backgrounds to represent transparency in images
   */
  CHECKERBOARD: "checkerboard",
  /**
   * Style class for a circular {@link Gtk.Button}
   */
  CIRCULAR: "circular",
  /**
   * Style class for {@link Gtk.Button} with a destructive action
   */
  DESTRUCTIVE: "destructive",
  /**
   * Style class for dimmed labels and icons
   */
  DIM: "dim-label",
  /**
   * Style class for widgets in error state.
   */
  ERROR: "error",
  /**
   * sets font features to use tabular numbers. Equivalent of Pango's tnum property
   */
  NUMERIC: "numeric",
  /**
   * Style class for a {@link Gtk.Label} to emulate Pango's "<small>" and "size='smaller'"
   */
  SMALL: "small-label",
  /**
   * Style class for when a {@link Gtk.Button} is the primary suggested action in a specific context.
   */
  SUGGESTED: "suggested",
  /**
   * Style class for widgets in success state.
   */
  SUCCESS: "success",
  /**
   * Style class for widgets in warning state.
   */
  WARNING: "warning",
  /**
   * Style class for non-terminal text that uses a monospace font.
   */
  MONOSPACE: "monospace",
} as const;

/**
 * Deep links to specific Settings pages.
 */
export const SettingsUri = {
  /**
   * Link to open Security & Privacy → Location Services settings page
   */
  LOCATION: "settings://privacy/location",
  /**
   * Link to open Online Accounts settings page
   */
  ONLINE_ACCOUNTS: "settings://accounts/online",
  /**
   * Link to Network settings page
   */
  NETWORK: "settings://network",
  /**
   * Link to open Applications → Permissions settings page
   */
  PERMISSIONS: "settings://applications/permissions",
  /**
   * Link to open Notifications settings page
   */
  NOTIFICATIONS: "settings://notifications",
  /**
   * Link to open Sound → Input settings page
   */
  SOUND_INPUT: "settings://sound/input",
  /**
   * Link to open Keyboard → Shortcuts → Custom settings page
   */
  SHORTCUTS: "settings://input/keyboard/shortcuts/custom",
} as const;
