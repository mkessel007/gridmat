<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.materialize.org/themes/basics/template-files/#template-partials
 *
 * @package gridmat
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area" role="complementary">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
