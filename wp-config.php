<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blog_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:3307' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'yu31xtZ!OlHO2H?5}OQ;<^1i(iu]Z+H-08uJl&VmH`{IRpC{2Sha)j,h~w3n;A;w' );
define( 'SECURE_AUTH_KEY',  '77?sfJB(@5z9`e/r?H(rSFeE@Pw&NUQ@1O+T#=V)lLEz&Rl{z:cB(!],/Z}<v^qA' );
define( 'LOGGED_IN_KEY',    'YSCz+{:+!ds%~3oM;NdALP!LGG6##iqKb}f$jrazSZs7x1;&!)U>t?ijw}p0}riM' );
define( 'NONCE_KEY',        '~87]mNg~Bhn/$MT`=u4Fh37ex+ %kL:X~kOgCkK~G{)W-G)6L}K8-?_TW#,T&Q`A' );
define( 'AUTH_SALT',        '`m(It}ftZPet~ns uNmf8gk%A0Hi`c/s!^.;t-o[J/vyW1 5Yt,MVMjq>&RFlOM-' );
define( 'SECURE_AUTH_SALT', 'p}@}WnA6G?PAS{;3QUYc`es/EQKxzpAR8YJR4w`FwJ9cc&,_n#R`?E.N0LUTI.8B' );
define( 'LOGGED_IN_SALT',   'ZdsM$K pxnoc<EOw<knB~;zW53jvsIYC)=c72cJy<7,8a fHr1;6V7@Pf7;O9><}' );
define( 'NONCE_SALT',       ' y4#Pp)tsO,Y!WH)kP6V&t~R=2B}v>L*[%igG[RsFO5J`NyW7<2Wljdi`eUHcbDS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
