<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.materialize.org/themes/basics/template-files/#template-partials
 *
 * @package gridmat
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://materialize.org/', 'gridmat' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'gridmat' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'gridmat' ), 'gridmat', '<a href="http://rivers.click" rel="designer">Jon Rivers</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
